import React, { useEffect } from 'react'
import {Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core'
import { ArrowLeftRounded, ArrowRightOutlined, ZoomIn, ZoomOut } from '@material-ui/icons';


const ModalContext = React.createContext();

export const useModal = () => {
    return React.useContext(ModalContext);
}

export const ModalProvider = (props) => {
    const [open, setOpen] = React.useState(false);
    const [images, setImages] = React.useState([]);
    const [title, setTitle] = React.useState("");
    const [page, setPage] = React.useState(0);
    const pressed = React.useRef(false);
    const [position, setPosition] = React.useState({x:0, y:0});
    const [zoom, setZoom] = React.useState(false)
    const imgRef = React.useRef();
    const rerender = React.useRef(0)

    useEffect(()=> {
        if(imgRef.current && zoom) {
            imgRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
        }
        console.log('modal rerender count: '+ rerender.current++)
        return ()=> {
            // setPage(0);
            // setZoom(false);
            // setPosition({x:0,y:0})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [position]);

    useEffect(()=> {
        return () => {
            setPage(0);
            setZoom(false);
            console.log('cleanup')
        }
    }, [open])

    const onMouseMove = (e) => {
        if(pressed.current){
            setPosition({
                x: position.x + e.movementX,
                y: position.y + e.movementY
            });
        }
    }
    
    const nextImage = () => {
        if (page + 1 < images.length) setPage(prevpage => prevpage + 1);
    }

    const previousImage = () => {
        if(page > 0) setPage(prevpage => prevpage - 1);
    }

    const onZoom = () => {
        // console.log(position)
        // setPosition({x:0, y:0});
        setZoom(prevZoom => !prevZoom);
    }

    const onPageButtonClick = (index) => {
        if(page !== index) {
            setPosition({x:0, y:0});
            setPage(index)
            // console.log("index:"+ index)
            //  console.log("page: "+page)
        };
    }

    const Magnify = (localProp) => {
        return zoom ? <ZoomOut className={localProp.className}/> : <ZoomIn className={localProp.className}/>;
    }

    const onClose = () => {
        setOpen(false);
        setPosition({x:0, y:0});
    }

    return (
        <ModalContext.Provider value={{setOpen, setImages, setTitle}} >
            {props.children}
            <Dialog 
                open={open} 
                onClose={onClose}
                aria-labelledby="image modal"
                aria-describedby="Images displayed"
                maxWidth="md">
                <DialogTitle id="ImageTitle" onClose={onClose}>
                    {title}
                </DialogTitle>
                <DialogContent dividers className="modalImageContainer"
                        style={{overflow: "hidden",objectFit: 'contain'}}
                        onMouseMove={ onMouseMove }
                        onMouseDown={()=>pressed.current = true}
                        onMouseUp={()=>pressed.current = false}>
                    <div
                        ref={imgRef}
                        style={{width: '100%'}}
                        >
                        {images.length !== 0? 
                        <img 
                            src={images[page].src} 
                            alt={images[page].alt} 
                            style={zoom ? {} : {width:'100%'}}
                            draggable="false"
                            /> : null}
                    </div>
                </DialogContent>
                <DialogActions style={{justifyContent:'center'}}>
                    <button 
                        className="cardMiddleLeft fakeButton"
                        onClick={previousImage}
                        >
                        <ArrowLeftRounded />
                    </button>
                    <button 
                        className="cardMiddleRight fakeButton"
                        onClick={nextImage}
                        >
                        <ArrowRightOutlined />
                    </button>
                    <button 
                        className="cardMiddleBottom"
                        onClick={onZoom}>
                        <Magnify className="zoomSize"/>
                    </button>
                    {[...new Array(images.length)].map((v,index) =>
                        <button 
                            key={index} 
                            className="pageIndicator"
                            onClick={()=>onPageButtonClick(index)}>
                            {index + 1}
                        </button>)}
                </DialogActions>
            </Dialog>
        </ModalContext.Provider>
    )
}