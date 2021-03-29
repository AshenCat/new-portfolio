import React, { useEffect } from 'react'
import {Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core'
import { ArrowLeftRounded, ArrowRightOutlined } from '@material-ui/icons';


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
    const imgRef = React.useRef();

    useEffect(()=> {
        if(imgRef.current) {
            imgRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
        }
    }, [position]);

    const onMouseMove = (e) => {
        if(pressed){
            setPosition({
                x: position.x + e.movementX,
                y: position.y + e.movementY
            });
        }
    }
    
    // console.log(images)
    const nextImage = () => {
        if (page + 1 < images.length) setPage(prevpage => prevpage + 1);
    }

    const previousImage = () => {
        if(page > 0) setPage(prevpage => prevpage - 1);
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
                        style={{overflow: "hidden"}}
                        onMouseMove={ onMouseMove }
                        onMouseDown={()=>setPressed(true)}
                        onMouseUp={()=>setPressed(false)}>
                    <div
                        ref={imgRef}>

                        {images.length !== 0? 
                        <img 
                            src={images[page].src} 
                            alt={images[page].alt} 
                            draggable="false"
                            /> : null}
                    </div>
                </DialogContent>
                <DialogActions>
                    <button 
                        className="cardMiddleLeft fakeButton"
                        onClick={previousImage}>
                        <ArrowLeftRounded />
                    </button>
                    <button 
                        className="cardMiddleRight fakeButton"
                        onClick={nextImage}>
                        <ArrowRightOutlined />
                    </button>
                </DialogActions>
            </Dialog>
        </ModalContext.Provider>
    )
}