
import Layout from "../components/ui/layout"
import Seo from "../components/seo"
import React, { useState } from "react"

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import  TextField  from "@material-ui/core/TextField"
import { InputAdornment } from "@material-ui/core"
import clsx from 'clsx'
import Button from '@material-ui/core/Button'
import { makeStyles, useTheme } from "@material-ui/core/styles"
import validate from "../components/ui/validate"
import { useMediaQuery } from '@material-ui/core'

import address from '../images/address.svg'
import Email from '../images/EmailAdornment.js'
import send from '../images/send.svg'
import nameAdornment from '../images/name-adornment.svg'
import PhoneAdornment from '../images/PhoneAdornment'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: '100vh',
    backgroundColor: '#191825',
    padding: '10rem 0rem 10rem 5rem',
    [theme.breakpoints.down('md')]:{
      padding: '10rem 0rem 10rem 2rem'
    }
  },
  text: {
    background: '#3F3B6C' ,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    [theme.breakpoints.down('md')]: {
      fontSize: '3.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem'
    }
  }
}))

const Contact = () => {
  const classes = useStyles()
return (
  <Layout>
  <Grid container  alignItems="center" classes={{root: classes.mainContainer}}>
    <Typography variant="h1" classes={{root: classes.text}}>
      CONTACT US
    </Typography>
    </Grid>
  </Layout>
)
}

export const Head = () => <Seo title="Page two" />

export default Contact
