import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, useMediaQuery } from '@material-ui/core';
import { Link } from 'gatsby'

// Assets
import search from '../../images/search.svg'
import cat from '../../images/cat.svg'
import menu from '../../images/menu.svg'
import logo from '../../images/logo.png'


const useStyles = makeStyles((theme) => ({
    coloredIndicator: {
        backgroundColor: theme.palette.common.offWhite
    },
    appBar: {
        background:'#191825',
        margin: 0

    },
    logo: {
        height: '4rem'
    },
   
    tabs: {
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    icon: {
        height: "2.5rem",
        width: "2.5rem"
    },
    logoContainer: {
        [theme.breakpoints.down('md')]: {
            marginRight: "auto",
            
        }
    },
    drawer: {
        backgroundColor: theme.palette.secondary.main
    },
    listItemText: {
        color: theme.palette.common.offWhite
    },
    tab: {
        ...theme.typography.body1,
        fontSize: "1.2rem",
        fontWeight: 400
    },
}))
const isBrowser = typeof window !== "undefined"

function Header () {
    // Styles
    const classes = useStyles()
    // Responsiveness
    const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'))
    // Menù Piece of State
    const [drawerOpen, setDrawerOpen] = useState(false)
     
    // Data
    const routes = [
        {node: {name: 'contact', link: '/contact'}},
        //{node: {name: 'About Us', link: '/aboutus'}}
    ]

    const actions = [
        // {icon: search, alt: "string", visible: true, onClick: () => console.log("search")}, 
        {icon: cat, alt: "cats", visible: !matchesMD, link: "/cats"},
        {icon: menu, alt: 'menu', visible: matchesMD, onClick: () => setDrawerOpen(true)}
        ]

    // Active Index Method
    
    
    const activeIndex = () => {
        const found = routes.indexOf(
             routes.filter(
             ({ node: { name, link } }) => 
             `${link}/` === window.location.pathname || undefined
        )[0])
        return found === -1 ? false : found
     }
    
   
    
    

    // Open Tabs
    const tabs = (
        <Tabs 
        value={isBrowser && activeIndex()}
        classes={{ indicator: classes.coloredIndicator, root: classes.tabs}}>
            {routes.map(route => (
                <Tab 
                component={Link}
                to={route.node.link || `/${route.node.name.toLowerCase()}`}
                classes={{root: classes.tab}}
                label={route.node.name} 
                key={route.node.name} />
            ))}
        </Tabs>
    )

    // Hidden Menù
    const drawer = (
        <SwipeableDrawer 
           open={drawerOpen} 
           onOpen={() => setDrawerOpen(true)}
           onClose={() => setDrawerOpen(false)}
           classes={{ paper: classes.drawer}}
           >
          <List disablePadding>
            {routes.map((route, index)=>(
                <ListItem 
                   selected={isBrowser && activeIndex() ? activeIndex === index : null}
                   divider 
                   button 
                   key={route.node.name.toLowerCase()} 
                   component={Link} 
                   to={route.node.link || `/${route.node.name.toLowerCase()}`}
                   
                   >
                    <ListItemText primary={route.node.name} classes={{ primary: classes.listItemText}} key={route.node.strapiId + `1`}/>
                </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
    )


  
    
    return (
        <AppBar elevation={0} position="absolute" classes={{root: classes.appBar}}>
            <Toolbar>
                <IconButton component={Link} to ="/" classes={{root: classes.logoContainer}}>
                    <img src={logo} alt="logo" className={classes.logo}/>
                    <Typography variant="h4"> SASHACORP</Typography>
                </IconButton>
                
                {matchesMD ? drawer : tabs}
                {actions.map(action => 
                 { if (action.visible){
                    return (
                    <IconButton
                      key={action.alt}
                      component={action.onClick ? undefined: Link}
                      to={action.onClick ? undefined: action.link}
                      onClick={action.onClick}
                    >
                    <img 
                    className={classes.icon}
                    src={action.icon} 
                    alt={action.alt} 
                    key={action.alt}
                    />
                    </IconButton>
                    )}
                    else { return (null)}
                 } 
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Header
