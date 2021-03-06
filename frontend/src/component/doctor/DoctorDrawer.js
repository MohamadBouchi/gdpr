import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { MenuList, MenuItem } from '@material-ui/core';
import Auth from '../registeration and login/auth'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.primary.default,
        padding: theme.spacing(3),
    },
}));


export default function DoctorDrawer() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        HSRW Doctor Dashboard
          </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <MenuList>
                    <MenuItem component={Link} to="/doctor">Home</MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem component={Link} to="/docreportview">Patient Reports</MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem component={Link} to="/DocUpload">Add Medical Prescription</MenuItem>
                </MenuList>
                <Divider />
                <MenuList>
                    <MenuItem component={Link} to="/stafflogin" onClick={() => { Auth.logout() }}>Logout</MenuItem>
                </MenuList>
            </Drawer>
        </React.Fragment>
    );
}
