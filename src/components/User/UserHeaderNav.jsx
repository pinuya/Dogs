import React from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from '../../Assets/feed.svg';
import Stats from '../../Assets/estatisticas.svg';
import AddPhoto from '../../Assets/adicionar.svg';
import Out from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

export default function UserHeaderNav() {
    const { userLogout } = React.useContext(UserContext);
    const { mobile, setMobile } = React.useState(null);

    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end>
                <img src={Feed} />
                {mobile && 'Minhas Fotos'}
            </NavLink>
            <NavLink to="/conta/stats">
                <img src={Stats} />
                {mobile && 'Estatisticas'}
            </NavLink>
            <NavLink to="/conta/post">
                <img src={AddPhoto} />
                {mobile && 'Adicionar Foto'}
            </NavLink>
            <button onClick={userLogout}>
                <img src={Out} />
                {mobile && 'Sair'}
            </button>
        </nav>
    )
}