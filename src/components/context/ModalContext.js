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
    const [pressed, setPressed] = React.useState(false);
    const [position, setPosition] = React.useState({x:0, y:0});
    const [zoom, setZoom] = React.useState(false)
    const imgRef = React.useRef();
    const rerender = React.useRef(0)

    useEffect(()=> {
        if(imgRef.current && zoom) {
            imgRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
        }
        console.log(rerender.current++)
    }, [position]);

    const onMouseMove = (e) => {
        if(pressed){
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

    const onZoom = async () => {
        // console.log(position)
        await setPosition({x:0, y:0});
        setZoom(prevZoom => !prevZoom);
    }

    const onPageButtonClick = async (index) => {
        if(page !== index) {
            await setPosition({x:0, y:0});
            setPage(index)
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
                aria-describedby="Images displayed">
                <DialogTitle id="ImageTitle" onClose={onClose}>
                    {title}
                </DialogTitle>
                <DialogContent dividers className="modalImageContainer"
                        style={{overflow: "hidden",objectFit: 'contain'}}
                        onMouseMove={ onMouseMove }
                        onMouseDown={()=>setPressed(true)}
                        onMouseUp={()=>setPressed(false)}>
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
                            onClick={(e)=>onPageButtonClick(index)}>
                            {index + 1}
                        </button>)}
                </DialogActions>
            </Dialog>
        </ModalContext.Provider>
    )
}