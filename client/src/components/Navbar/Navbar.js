import React, { useEffect, useState } from 'react'
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import moments from '../../images/moments.png'
import useStyles from './styles';
import {Link,useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const location=useLocation();
    const[user,setUser]=useState(JSON.parse(localStorage.getItem("profile")))
    const navigate=useNavigate();
    // const user=null;
    const classes = useStyles();
    const logout=()=>{
        setUser(null);
        localStorage.clear();
        navigate('/auth')
    }
    useEffect(()=>{
        if(user){

        const token=user.token
        }
        setUser(JSON.parse(localStorage.getItem("profile")))
    },[location])
    return (
        <AppBar className={`${classes.appBar}`} position='static' color='inherit'>
            <div className={classes.brandContainer}>
                <Typography className={classes.heading} variant='h2' align='center' component={Link} to='/'>
                    Moments
                </Typography>
                <img className={classes.image} src={moments} alt='moments' height='60' />
            </div>
            <Toolbar className={classes.toolbar}>
                {user?(
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>
                            {user.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant='h6'>
                            {user.result.name.split(" ")[0]}
                        </Typography>
                        <Button variant='contained' className={classes.logout} color='secondary' onClick={logout}>
                            Logout
                        </Button>
                    </div>
                ):(
                    <Button component={Link} to='/auth' variant='contained' color='primary'> 
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
