import React from 'react';
import classes from './Header.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

const Header = ({handleClick,handleChange}) => {
    return (
        <div className={classes.primaryHeader}>
            <div style={{display:'flex',flexDirection:'row',gap:'20px'}}>
                <img src='assets/my_unsplash_logo.svg' className={classes.headerLogo} alt='logo'></img>
                <div className={classes.searchBar}>
                    <AiOutlineSearch fontSize="20px" color="rgba(189, 189, 189, 1)"/>
                    <input type='search' onChange={handleChange} placeholder='Search by name'></input>
                </div>
            </div>
            <button className={classes.addButton} onClick={handleClick}>Add photos</button>
        </div>
    );
}

export default Header;

