import React from "react";
import styles from './Footer.module.css'
// import Dog from '../Assets/dogs-footer.svg'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* <Dog /> */}
            <p>Dogs. Alguns direitos reservados</p>
        </footer>
    )
}