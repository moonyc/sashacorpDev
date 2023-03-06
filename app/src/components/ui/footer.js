import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import { useMediaQuery } from '@material-ui/core';

import twitter from '../../images/twitter.svg'
import linkedin from '../../images/linkedin.svg'
import github from '../../images/github.svg'
import logoLarge from '../../images/logoLarge.png'

const useStyles = makeStyles(theme => ({
    footer: {
        background: theme.palette.common.gradient,
        padding: "2rem",
        marginTop: '10rem'
       }, 
    logoLarge: {
        height: '25rem',
        [theme.breakpoints.down('md')]:{
            height: '20rem'
          },
        [theme.breakpoints.down('sm')]:{
            height: '10rem'
          }
    },
    followUs:{
       color: '#fff',
       fontWeight: 500,
       [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem'
       }

    },
    "@global" : {
        body: {
           margin: 0,
        },
    }
}))

const isBrowser = typeof window !== "undefined" 
const Footer = () => {
    const classes = useStyles()
    const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'))
    const socials = [
        {
            label: 'Twitter',
            link: 'https://twitter.com/diderotthecat',
            icon: twitter,
        },
        {
            label: 'Linkedin',
            link: 'https://www.linkedin.com/in/muni-fara/',
            icon: linkedin,
        },
        {
            label: 'GitHub',
            link: 'https://github.com/moonyc',
            icon: github,
        }
        
    ]
    return(
        <footer className={classes.footer}>
         <Grid container direction="row" justifyContent='space-between'>
           <Grid item>
            <Grid item container direction="column" alignItems="center">
            <Grid item>
                <Typography variant='body2' classes={{root: classes.followUs}}>Follow us</Typography>
             </Grid>
            <Grid item container direction={isBrowser && matchesMD ? 'column' : 'row'}>
             {socials.map(social => (
                 <Grid item>
                 <IconButton 
                 component="a" href={social.link} target='_blank'>
                    <img src={social.icon} alt={social.label} key={social.name}/>
                 </IconButton>
                </Grid>
              ))}
             </Grid>
             
            </Grid>
           </Grid>
           <Grid item>
           <Grid item container direction="column">
                <img src={logoLarge} alt="large logo" className={classes.logoLarge}/>
             </Grid>
            
           </Grid>
             
         </Grid>
          
         </footer>
    )
}

export default Footer