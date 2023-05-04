import React, { useState } from 'react';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Selected = () => {

    const [selected, setSelected] = useState(false)
    const notify = () => toast("Added to favorites!");
    const handleFavorite = () => {
        setSelected(true)
        notify()
    }
    return (
        <>
            {
                selected ? <FaBookmark style={{cursor:'pointer'}} ></FaBookmark> : <FaRegBookmark style={{cursor:'pointer'}} onClick={handleFavorite}></FaRegBookmark>
            }
            <ToastContainer />
            
        </>
    );
};

export default Selected;