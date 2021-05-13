import React from 'react'

import mealsImage from '../../Assets/Images/meals.jpg'

import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

function Header(props) {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>MAHARAJA</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table Full of delecious food!"/>
            </div>
        </React.Fragment>
    )
}

export default Header