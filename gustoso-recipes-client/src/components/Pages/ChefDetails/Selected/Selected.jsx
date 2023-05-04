import React, { useState } from 'react';
import { FaRegBookmark, FaBookmark } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Selected = () => {

    const [selected, setSelected] = useState(false)
    const notify = () => toast("Already added to favorites!");

    return (
        <>
            {
                selected ? <FaBookmark style={{cursor:'pointer'}} onClick={notify}></FaBookmark> : <FaRegBookmark style={{cursor:'pointer'}} onClick={() => setSelected(true)}></FaRegBookmark>
            }
            <ToastContainer />
            
        </>
    );
};

export default Selected;