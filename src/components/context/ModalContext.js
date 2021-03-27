import React from 'react'
import {Dialog, DialogActions, DialogContent, DialogTitle} from '@material-ui/core'


const ModalContext = React.createContext();

export const useModal = () => {
    return React.useContext(ModalContext);
}

export const ModalProvider = (props) => {
    const [open, setOpen] = React.useState(false);
    const [images, setImages] = React.useState([]);
    const [title, setTitle] = React.useState("");
    
    // const nextImage = () => {

    // }

    // const previousImage = () => {

    // }

    return (
        <ModalContext.Provider value={{setOpen, setImages, setTitle}} >
            {props.children}
            <Dialog 
                open={open} 
                onClose={()=>setOpen(false)}
                aria-labelledby="image modal"
                aria-describedby="Images displayed">
                <DialogTitle id="ImageTitle" onClose={()=>setOpen(false)}>
                    {title}
                </DialogTitle>
                <DialogContent dividers>

                </DialogContent>
                <DialogActions>
                    {images}
                </DialogActions>
            </Dialog>
        </ModalContext.Provider>
    )
}