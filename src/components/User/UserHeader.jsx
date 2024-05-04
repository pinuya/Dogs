import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from './UserHeader.module.css';
import { useLocation } from "react-router-dom";

export default function UserHeader() {
    const [title, setTitle] = React.useState('');
    const location = useLocation();

    React.useEffect(() => {
        setTitle(location.pathname);
        const { pathname } = location

        switch (pathname) {
            case '/conta/post':
                setTitle('Poste Sua Foto');
                break;
            case '/conta/stats':
                setTitle('Estatísticas');
                break;
            default:
                setTitle('Minha Conta');
        }
    }, [location])

    return (
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav />
        </header>
    )
}