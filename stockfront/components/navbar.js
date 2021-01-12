import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Link from 'next/link'

import styles from '../styles/navbar.module.scss'
import { useState } from 'react'

const NavBar = () => {
    const [display, setDisplay] = useState(false)

    const toggleDisplay = () => {
        if (display) {
            setDisplay(false)
            console.log(display)
        }
        else {
            setDisplay(true)
            console.log(display)
        }
    }


    return (
        <div className={styles.nav}>
            <MenuIcon className={styles.menuIcon} onClick={toggleDisplay} />
            <div className={styles.logo}></div>
            <div className={styles.searchBar}>
                <SearchIcon fontSize="small" />
                <input type="text" placeholder="Browse stocks/companies"></input>
            </div>
            <ul className={`${styles.subMenu} ${display ? styles.active : ''}`}>
                <li> <HomeRoundedIcon fontSize="small" /> Home </li>
                <li> <WorkRoundedIcon fontSize="small" /> Portfolios</li>
                <li> <PersonRoundedIcon fontSize="small" /> Profile</li>
            </ul>
            <ul className={styles.menuTablet}>
                <li> <HomeRoundedIcon fontSize="large" /> </li>
                <li> <WorkRoundedIcon fontSize="large" /> </li>
                <li> <PersonRoundedIcon fontSize="large" /> </li>
            </ul>
        </div>
    )
}

export default NavBar