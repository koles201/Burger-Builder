import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './Toolbar.module.css'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DekstopOnly}>
                <NavigationItems isAuth={props.isAuth}></NavigationItems>
            </nav>
        </header>
    );
};

export default toolbar;