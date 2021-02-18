import React from "react";
import {NavLink} from "react-router-dom";
import styles from './Header.module.scss'

const Header = ()=>{


    return(
        <div className={styles.wrapper}>
        <div className={styles.text}>Hoc Krystian</div>
        <div className={styles.nav}>
            <NavLink className={styles.link} to="/">Docs</NavLink>
            <NavLink className={styles.link} to="/Tips">Tips</NavLink>
            <NavLink className={styles.link} to="/Patterns">Patterns</NavLink>
            <NavLink className={styles.link}  to="/Components">Components</NavLink>
        </div>
    </div>

)

}

export default Header;
