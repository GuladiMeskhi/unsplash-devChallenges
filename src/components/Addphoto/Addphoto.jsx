import React from 'react';
import classes from './Addphoto.module.css'


const Addphoto = ({handleCancel,handleCaption,caption,handleURL,imgURL,handlePublish}) => {
   

    return (
        <div className={classes.addphotoContainer}>
            <h1>Add new photo</h1>
            <div className={classes.inputContainer}>
                <label>
                    Label
                </label>
                <input type="text" onChange={handleCaption} value={caption} placeholder='Suspendisse elit massa'>
                </input>
            </div>
            <div className={classes.inputContainer}>
                <label>
                  Photo URL
                </label>
                <input onChange={handleURL} type="text"  value={imgURL} placeholder='https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...'>
                </input>
            </div>
            <div className={classes.ctaBtn}>
                <button onClick={handleCancel} className={classes.cancelButton}>
                    Cancel
                </button>
                <button onClick={handlePublish} className={classes.addButton}>
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Addphoto;
