import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from '../../Assets/feed.svg';
import Stats from '../../Assets/estatisticas.svg';
import AddPhoto from '../../Assets/adicionar.svg';
import Out from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';
import useMedia from "../../Hooks/useMedia";

export default function UserHeaderNav() {
    const { userLogout } = React.useContext(UserContext);
    //mobile menu
    const mobile = useMedia('(max-width: 40rem)');
    const [mobileMenu, setMobileMenu] = React.useState(false)

    const { pathname } = useLocation();
    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            {mobile && <button aria-label="Menu"
                className={`${styles.mobileButton} 
             ${mobileMenu && styles.mobileButtonActive}`}
                onClick={() => setMobileMenu(!mobileMenu)}></button>}

            <nav className={`${mobile ? styles.navMobile : styles.nav} 
                ${mobileMenu && styles.navMobileActive}`}>
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
        </>
    )
}