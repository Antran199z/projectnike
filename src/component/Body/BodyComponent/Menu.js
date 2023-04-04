import React from 'react'
import { makeStyles } from '@mui/styles'
// import { PopupState, MenuItem } from '@mui/material'
// import { ImageListItem } from '@mui/material'
// import {ImageListItemBar} from '@mui/material'
const useStyles = makeStyles((theme) => ({
  headMenu: {
    textDecoration:"none",
    display:"flex",
    justifyContent:"center",
    // alignItems:"center"
    // display: "grid",
    // gridTemplateColumns: "auto auto auto",
    // gridTemplateRow: " auto auto auto"
  }
}))
const Menu = (props) => {
  console.log(props.merchMenu)
  const classes = useStyles()
  return (
    <div>
      {props.merchMenu.map((item, index) => {
        return (
          <table className={classes.headMenu}>
            <tr>{item.heading}</tr>
          </table>
        )
      })}
    </div>
  )
}

export default Menu