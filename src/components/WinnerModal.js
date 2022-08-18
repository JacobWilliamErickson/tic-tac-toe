import React from 'react'
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './WinnerModal.module.css'
const WinnerModal = (props) => {

  
  return (
    <div>
<div className={classes.backdrop} onClick={props.onOkay}></div>
<Card className={classes.modal}>
 <header className={classes.header}>
    <h2>{props.title}</h2>
 </header>
 <div>
        <p className={classes.content}>
            {props.message}
        </p>
    </div>
<footer className={classes.actions}>
    <Button onClick={props.onOkay}>Okay</Button>
</footer>
  </Card>
    </div>
  )
}

export default WinnerModal