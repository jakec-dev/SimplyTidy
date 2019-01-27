import React, { useContext } from 'react'
import Link from 'next/link'
// State
import { Store } from '../state/store'
// Actions
import { toggleDrawer } from '../state/actions'
// Data
import {
    navPages,
    navActions
} from '../data/navigationData'
// Utils
import { VariantInput } from '../utils/functions'
// Material components
import { makeStyles } from '@material-ui/styles'
import { Typography, Grid } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
// Custom components
import { Wrapper } from '../components/Wrappers'

const useStyles = makeStyles((theme) => ({
    fullList: {
        width: 'calc(100vw - 56px)',
        maxWidth: '320px'
    },
    header: {
        display: 'block',
        position: 'relative',
        background: `${theme.palette.primary.main} url('/static/backgrounds/cleaning-pattern.jpg') no-repeat 0 center / cover`,
        '&::before': {
            display: 'block',
            paddingTop: '56.25%',
            content: '""'
        }
    },
    headerWrapper: {
        padding: 2 * theme.spacing.unit,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    },
    logo: {
        height: 8 * theme.spacing.unit,
        cursor: 'pointer'
    },
    subtitle: {
        color: theme.palette.primary.contrastText,
        lineHeight: 1.25
    },
    bookNow: {
        color: theme.palette.secondary.main
    }
}))

export default function NavigationDrawerContent() {
    // Get state contexts
    const { state, dispatch } = useContext(Store)
    // Define styles
    const classes = useStyles()
    return (
        <div className={classes.fullList}>
            <div className={classes.header}>
                <Grid container
                    direction='column'
                    justify='space-between'
                    className={classes.headerWrapper}
                >
                    <Grid item>
                        <Link prefetch href='/'>
                            <img
                                src='./static/logos/logo-light.png'
                                className={classes.logo}
                                onClick={() => dispatch(toggleDrawer('navigation', false))}
                            />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant='body2'
                            className={classes.subtitle}
                        >
                            Gold Coast's Premier Home Cleaning Company
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <List>
                {navPages.map((link, index) => (
                    <Link
                        prefetch
                        href={link.href}
                        key={link.label}
                    >
                        <ListItem
                            button
                            onClick={() => dispatch(toggleDrawer('navigation', false))}
                        >
                            <ListItemIcon><VariantInput inputVariant={link.icon} /></ListItemIcon>
                            <ListItemText primary={link.label} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            <Divider />
            <List>
                {navActions.map((link, index) => (
                    <ListItem
                        button
                        key={link.label}
                        onClick={() => dispatch(toggleDrawer('navigation', false))}
                    >
                        <ListItemIcon>
                            <VariantInput
                                inputVariant={link.icon}
                                className={index === 0 ? classes.bookNow : null}
                            />
                        </ListItemIcon>
                        <ListItemText
                            primary={link.label}
                            primaryTypographyProps={index === 0 ? { className: classes.bookNow } : null}
                        />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}
