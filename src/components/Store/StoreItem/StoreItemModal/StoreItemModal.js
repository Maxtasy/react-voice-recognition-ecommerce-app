import React from 'react'
import classes from "./StoreItemModal.module.css"

export default function StoreItemModal(props) {
  return (
    <>
      <div className={classes.Backdrop} onClick={props.closeModal}></div>
      <div className={classes.StoreItemModal}>
        {props.item.name}
        <button onClick={props.closeModal}>Close</button>
      </div>
    </>
  )
}
