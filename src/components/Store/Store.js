import React, { useState } from "react"
import StoreItem from "./StoreItem/StoreItem"
import StoreItemModal from "../Store/StoreItem/StoreItemModal/StoreItemModal"
import microphone from "../../assets/svg/microphone-solid.svg"
import classes from "./Store.module.css"

export default function Store(props) {
  const [detailId, setDetailId] = useState(null)

  const items = []
  
  props.items.forEach((item) => {
    items.push(
      <StoreItem
        key={item.id}
        item={item}
        clickedDetails={() => setDetailId(item.id)}
      />
    )
  })

  return (
    <>
      <button
        className={classes.MicrophoneButton}
        onClick={() => {}}
      >
        <img src={microphone} alt="microphone"></img>
      </button>
      <div className={classes.ItemsContainer}>
        {items}
      </div>
      {
        detailId && <StoreItemModal item={props.items[detailId]} closeModal={() => setDetailId(null)} />
      }
    </>
  )
}
