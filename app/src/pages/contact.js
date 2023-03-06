import * as React from "react"

import Layout from "../components/ui/layout"
import Seo from "../components/seo"
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import Grid from "@material-ui/core/Grid"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: '50vh',
    padding: '10rem 0rem 10rem 5rem',
    [theme.breakpoints.down('md')]:{
      padding: '10rem 0rem 10rem 2rem'
    }
  },
  text: {
    background: theme.palette.common.gradient,
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
