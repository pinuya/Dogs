import React from "react";
import styles from './Header.module.css'
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <div className={styles.Header}>
            <nav className="container">
                <Link to='/'>Home</Link>
                <Link to='/login'>Login / Criar</Link>
            </nav>
        </div>
    )
}