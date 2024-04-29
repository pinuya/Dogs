import React from "react";
import styles from './Header.module.css'
import { Link } from "react-router-dom";
import Dog from '../Assets/dogs.svg'

export default function Header(){
    return(
        <header className={styles.header}>
            <nav className={` ${styles.nav} container `}>
                <Link className={styles.logo} to='/' aria-label="Dogs - Home">
                    <img src={Dog}/>
                </Link>
                <Link className={styles.login} to='/login'>Login / Criar</Link>
            </nav>
        </header>
    )
}