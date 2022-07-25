import React from 'react'
import classes from './Backdrop.module.css'

export default function Backdrop({handleClick}) {
  return (
    <div className={classes.backdrop} onClick={handleClick} style={{cursor:'pointer'}}>

    </div>
  )
}
