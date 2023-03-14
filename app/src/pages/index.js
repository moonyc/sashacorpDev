import * as React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/ui/layout"
import Seo from "../components/seo"

import AnimatetPresentation from "../components/home/AnimatedPresentation"

const useStyles = makeStyles(theme => ({
  mainContainer: {
    height: '100vh',
    padding: '5rem 20rem 20rem 20rem',
    backgroundColor: '#191825',
    [theme.breakpoints.down('md')]:{
      padding: '1rem 0rem 1rem 0rem',
      width: '100%',
    }
  },
 
}))

// const isBrowser = typeof window !== "undefined"

const IndexPage = () => {
  const classes= useStyles()
 
  return (
  <Layout>
    <div classes={{root: classes.mainContainer}}>
        <AnimatetPresentation/>
    </div>

   
   
    
  </Layout>
)}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
