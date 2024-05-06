import React from "react";
import styles from './FeedPhotosItem.module.css';

export default function FeedPhotosItem({ photo, setModalPhoto }) {
    function handleClick() {
        setModalPhoto(photo);
    }

    return (
        <li className={styles.photo} onClick={handleClick}>
            <img src={photo.src} alt={photo.title} />
            <span className={styles.views}>{photo.acessos}</span>
        </li>
    )
}