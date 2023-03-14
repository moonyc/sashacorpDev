/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import { makeStyles } from "@material-ui/core/styles"

import Header from "./header"
import Footer from "./footer"

const useStyles = makeStyles(theme => ({
  majorContainer: {
    backgroundColor: '#191825',
    padding: 0,
    margin: 0,
  }
}))


const Layout = ({ children }) => {
const classes = useStyles() 

  return (
    <div className={classes.majorContainer}>
      <Header/>
        
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout
