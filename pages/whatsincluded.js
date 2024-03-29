/* eslint-disable jsx-a11y/anchor-is-valid */
import '../src/bootstrap'
import React from 'react'
// Material components
import { makeStyles } from '@material-ui/styles'
import Hidden from '@material-ui/core/Hidden'
// Page specific sections
// Common sections
import Header from '../sections/Header'
import Navbar from '../sections/Navbar'
import Fold from '../sections/Fold'
import Footer from '../sections/Footer'
import BookingFormDrawer from '../sections/BookingFormDrawer'
import NavigationDrawer from '../sections/NavigationDrawer'

// Index styles
const useStyles = makeStyles(theme => ({
    foldSubtitle: {
        color: theme.palette.grey[300]
    }
}))

export default function WhatsIncluded() {
    // Define styles
    const classes = useStyles()
    return (
        <React.Fragment>
            <Header title="What's included" />
            <Navbar />
            <Fold
                hero='hero-background-window-cleaning.jpg'
                title="What's Included"
                className={classes.foldSubtitle}
                subtitle="Services to suit every need"
                subtitleProps={{
                    className: classes.foldSubtitle
                }}
            >
            </Fold>

            <Footer />
            <BookingFormDrawer /> {/* Fix service image code */}
            <NavigationDrawer />
        </React.Fragment >
    )
}