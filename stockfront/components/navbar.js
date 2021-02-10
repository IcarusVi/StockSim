import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Popper from '@material-ui/core/Popper';
import TextField from '@material-ui/core/TextField';
import {useCookies} from 'react-cookie';

import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';


//for tomorrow work on navigating to a different page with search;

import styles from '../styles/navbar.module.scss'
import React from "react";
import { List } from "react-virtualized";
import { useState } from 'react'

let tickerData = require('../assets/allTickers/allTickers.json')



const useStyles = makeStyles({
    textInput: {
        color: 'white',
        backgroundColor: 'black',
        borderRadius: '5px',
        paddingLeft: '10px',
        height: '80%'
    },

    label: {
        color: 'white'

    },
    focused: {
        color: 'white'
    },
    popper:{
        marginTop: '10px',
        padding: '10px 10px 10px 10px',
        textAlign: 'center',
        backgroundColor: '#222222',
        color:'white'

    }
});


const ListboxComponent = React.forwardRef(function ListboxComponent(
    props,
    ref
) {
    const { children, role, ...other } = props;
    const itemCount = Array.isArray(children) ? children.length : 0;
    const itemSize = 36;

    return (
        <div ref={ref}>
            <div {...other}>
                <List
                    height={250}
                    width={1}
                    rowHeight={itemSize}
                    overscanCount={5}
                    rowCount={itemCount}
                    rowRenderer={props => {
                        return React.cloneElement(children[props.index], {
                            style: props.style
                        });
                    }}
                    containerStyle={{
                        width: "100%",
                        maxWidth: "100%"
                      }}
                    style={{
                        width: "100%"
                      }}
                    role={role}
                />
            </div>
        </div>
    );
});


const NavBar = ({ username }) => {
    const classes = useStyles();
    const [display, setDisplay] = useState(false)
    const [anchorEl, setAnchorEl] = useState(null);
    const [signedIn, setSignIn] = useState(false);
    const [search, setSearch] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['jwt'])

    const handleLogOut = () => {
        if(confirm('Would you like to logout')){
            removeCookie('jwt')
            window.location.reload()
        }
    }

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

    const handlePopper = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        location.href = `/stock/${search.split(' ')[0]}`
        if (!search) {
            console.log('Search is empty')
        }
        else {
            console.log(`Fired submit: ${search.split(' ')[0]}`)

        }

    }

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;




    return (
        <div className={styles.nav}>
            <MenuIcon className={styles.menuIcon} onClick={toggleDisplay} />
            <div className={styles.logo}></div>


            <div className={styles.searchBar}>
                <SearchIcon style={{ color: 'white' }} />
                <form style={{ width: '100%' }} onSubmit={handleSubmit}>
                    <Autocomplete
                        className={classes.textInput}
                        style={{ width: '100%' }}
                        ListboxComponent={ListboxComponent}
                        options={tickerData.map((ticker) => {
                            return ticker.ticker + ' ' + ticker.name
                        })
                        }
                        onChange={(event, value) => setSearch(value)}
                        renderInput={(params) => (

                            <TextField
                                {...params}
                                fullWidth
                                label='Type below to browse stocks'
                                InputProps={{
                                    ...params.InputProps,
                                    type: 'search',

                                }}
                                InputLabelProps={{
                                    classes: {
                                        root: classes.label,
                                        focused: classes.focused
                                    }
                                }}
                                onInput={
                                    e => {
                                        setSearch(e.target.value)
                                    }
                                }
                            />

                        )}
                    />

                </form>
            </div>


            <ul className={`${styles.subMenu} ${display ? styles.active : ''}`}>
                <li> <Link href='/'><HomeRoundedIcon fontSize="small" /></Link>Home </li>
                <li> <WorkRoundedIcon fontSize="small" /> Portfolios</li>
                <li> <PersonRoundedIcon fontSize="small" /> Profile</li>
            </ul>
            <ul className={styles.menuTablet}>
                <li> <Link href='/'><HomeRoundedIcon fontSize="large" /></Link> </li>
                <li> <Link href='/portfolios'><WorkRoundedIcon fontSize="large" /></Link> </li>
                <li> <PersonRoundedIcon onClick={handlePopper} fontSize="large" /> </li>
            </ul>

            <Popper className={classes.popper} id={id} open={open} anchorEl={anchorEl}>
                <div>
                    {username ? <p style={{marginTop:'0px'}}>{username}</p> : <Link href='/login'>Click to signin</Link>} 
                    {username ? <button style={{marginBottom: '0'}} onClick={handleLogOut}>Click to logout</button> : ''}
                </div>
            </Popper>
        </div>
    )
}


export default NavBar