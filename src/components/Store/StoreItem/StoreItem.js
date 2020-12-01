import React from "react"
import classes from "./StoreItem.module.css"

export default function StoreItem(props) {
  function formatPrice(priceInCents) {
    const priceInCentsString = priceInCents + ""
    const preComma = priceInCentsString.slice(0, 2)
    const postComma = priceInCentsString.slice(2)
    
    return `$${preComma}.${postComma}`
  }

  return (
    <div
      className={classes.StoreItem}
    >
      <div
        className={classes.Image}
        style={{ backgroundColor: `#${props.item.imageColor}` }}
      ></div>
      <span className={classes.ItemCategory}>{props.item.category}</span>
      <span className={classes.ItemName}>{props.item.name}</span>
      <span className={classes.ItemPrice}>{formatPrice(props.item.priceCents)}</span>
      <button
        className={classes.DetailsButton}
        onClick={props.clickedDetails}
      >
        Details
      </button>
    </div>
  )
}
