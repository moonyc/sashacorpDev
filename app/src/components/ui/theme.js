import { createTheme } from "@material-ui/core/styles";

const lightPurple = "rgba(180,149,231, 0.7)"
const darkPurple = "rgba(79,69,255,1)"
const purple = "rgba(117,99,246,1) "
const offWhite = "#E3DFFD"
const offBlack = "#3F3B6C"
const gradient = `
linear-gradient( 194deg, rgba(180,149,231,1) 7%, 
rgba(79,69,255,1) 28%,
rgba(117,99,246,1) 28%, 
rgba(98,84,251,1) 51%, 
rgba(110,93,248,1) 65%, 
rgba(79,69,255,1) 65%);
`

const theme = createTheme({
    palette: {
        primary: {
        main: purple
    },
    secondary: {
        main: lightPurple
    },
    common: {
        darkPurple,
        offBlack,
        offWhite,
        gradient

    }
},
   typography: {
    h1: {
        fontSize: '5rem',
        color: purple,
        fontFamily: "Roboto",
        fontWeight: 700,
    },
    h2: {
        fontSize: '4rem',
        color: darkPurple
    },
    h3: {
        fontSize: '3rem',
        color: offBlack
    },
    h4: {
        fontSize: '1.5rem',
        fontWeight: 400,
        color: offWhite,
       
    },
    h5: {
        fontSize: '2.5rem',
        color: lightPurple
    },
    body: {
        fontSize: '1.5rem',
        color: offBlack
    },
    body2: {
        fontSize: '2rem',
        color: purple
    }


   },
   overrides: {

   }

})

export default theme