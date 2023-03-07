import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"

import Layout from "../components/ui/layout"
import Seo from "../components/seo"
import { Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"
import AnimatetPresentation from "../components/home/animatedPresentation"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: '50vh',
    padding: '5rem 0rem 10rem 0rem',
    [theme.breakpoints.down('md')]:{
      padding: '5rem 0rem 5rem 0rem'
    }
  },
  titleContainer: {

  },
  text: {
    background: theme.palette.common.gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    [theme.breakpoints.down('md')]: {
      fontSize: '3.5rem'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem'
    }
  }
}))


const IndexPage = () => {
  const classes= useStyles()
  return (
  <Layout>
    <Grid item container  justifyContent="space-around" alignItems="center" classes={{root: classes.mainContainer}}>
    <Grid item>
    <Typography variant="h1" classes={{root: classes.text}}>
      SASHACORP
    </Typography>
    </Grid>
    <Grid item>
      <AnimatetPresentation/>
    </Grid>

   
    </Grid>
    
  </Layout>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
