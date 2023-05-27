import React, { useState } from 'react';
import { useStyles } from '../../UseStyles/useStayles';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <div className={`${classes.root}`}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.title}>
                        <Link to="/" className='text-decoration-none text-white coursor-pointer'>Abdul Aziz</Link>
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <ListGroup>
                    <ListGroup.Item>
                        <Link to="/admin/aboutme" className='text-decoration-none text-secondary coursor-pointer'>About me</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link to="/admin/account" className='text-decoration-none text-secondary coursor-pointer'>Account</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link to="/admin/blog" className='text-decoration-none text-secondary coursor-pointer'>Blog</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link to="/admin/dashboard" className='text-decoration-none text-secondary coursor-pointer'>Dashboard</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link to="/admin/myorder" className='text-decoration-none text-secondary coursor-pointer'>My Orders</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link to="/admin/orders" className='text-decoration-none text-secondary coursor-pointer'>Oders</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link to="/admin/services" className='text-decoration-none text-secondary coursor-pointer'>Services</Link>
                    </ListGroup.Item> 
                    <ListGroup.Item>
                        <Link to="/admin/portfolio" className='text-decoration-none text-secondary coursor-pointer'>Portfolio</Link>
                    </ListGroup.Item> 
                    <ListGroup.Item>
                        <Link to="/logout" className='text-decoration-none text-secondary coursor-pointer'>Logout</Link>
                    </ListGroup.Item>
                </ListGroup>
                <Divider />
                <Divider />
                <Divider />
                <Divider />
                <ListGroup>
                    <ListGroup.Item>
                        <Link to="/cart" className='text-decoration-none text-secondary coursor-pointer'>Cart</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link to="/" className='text-decoration-none text-secondary coursor-pointer'>Home</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link to="/login" className='text-decoration-none text-secondary coursor-pointer'>Login</Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Link to="/signup" className='text-decoration-none text-secondary coursor-pointer'>Signup</Link>
                    </ListGroup.Item> 
                </ListGroup>
            </Drawer>
        </div>
    );
};

export default Navbar;