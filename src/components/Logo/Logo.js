import React from 'react'
import BurgerLogo from '../../assets/images/burger.png'
import classes from './Logo.module.css'

const logo = (props) => {
    return (
        <div className={classes.Logo}>
            <img src={BurgerLogo} alt="burgerImage" />
        </div>
    );
};

export default logo;