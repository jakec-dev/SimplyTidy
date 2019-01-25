import React from 'react'
import { makeStyles } from '@material-ui/styles'
// Material components
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
// Custom components
import { Container } from '../../components/Containers'
import { CallToActionButton } from '../../components/Buttons'
// Colors
import amber from '@material-ui/core/colors/amber'
// Icons
import QuoteIcon from '@material-ui/icons/FormatQuote'
import StarIcon from '@material-ui/icons/StarRate'
import ExpandIcon from '@material-ui/icons/KeyboardArrowDown'

// ReviewCard styles
const reviewCardStyles = makeStyles(theme => ({
    topCard: {
        padding: '2rem 2rem 3rem 1rem'
    },
    gridContainer: {
        width: '100%'
    },
    gridItem: {
    },
    cardHeader: {
        alignItems: 'flex-start'
    },
    icon: {
        flex: '0 0 auto',
        marginRight: '1rem',
    },
    quoteIcon: {
        transform: 'scaleX(-1) scaleY(-1)',
        color: theme.palette.grey[500]
    },
    comment: {
        flex: '1 1 auto',
        paddingTop: '1rem'
    },
    expandIcon: {
        fontSize: '16px',
        position: 'relative',
        bottom: '-2px',
        left: '4px'
    },
    rating: {
        paddingTop: '1rem'
    },
    starIcon: {
        color: amber[500]
    },
    author: {
        paddingTop: '0',
        marginTop: '-2rem',
    },
    avatar: {
        width: '4rem',
        height: '4rem',
        marginLeft: 'auto'
    },
    authorName: {
        fontWeight: 500,
        paddingBottom: '0.25rem',
        marginTop: '-0.25rem',
        color: 'rgba(0, 0, 0, 0.87)',
    }
}))

export function ReviewCard() {
    const classes = reviewCardStyles()
    return (
        <Grid item sm={12} md={6} lg={4} xl={4} className={classes.gridItem}>
            <Card>
                <CardContent className={classes.topCard}>
                    <Grid container alignItems='flex-start' wrap='nowrap'>
                        <Grid item className={classes.icon}>
                            <QuoteIcon className={classes.quoteIcon} fontSize='large' />
                        </Grid>
                        <Grid item className={classes.comment}>
                            <Typography variant='subtitle1' component='span'>
                                <em>
                                    I used Gold Coast Maids for the first time this week and was impressed. I liked the online booking system. I did it in my lunch break at work and they came the next day! Will definitely use again.
                                </em>
                                <ExpandIcon className={classes.expandIcon} />
                            </Typography>

                            <div className={classes.rating}>
                                <StarIcon className={classes.starIcon} />
                                <StarIcon className={classes.starIcon} />
                                <StarIcon className={classes.starIcon} />
                                <StarIcon className={classes.starIcon} />
                                <StarIcon className={classes.starIcon} />
                            </div>
                        </Grid>
                    </Grid>
                </CardContent>
                <Divider />
                <CardContent className={classes.author}>
                    <Avatar alt="CLIENT NAME" src="/static/avatars/1.jpg" className={classes.avatar} />
                    <Typography variant='body1' className={classes.authorName}>
                        Jake C
                    </Typography>
                    <Typography variant='body2'>
                        September 1, 2018
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

// Reviews styles
const reviewsStyles = makeStyles(theme => ({
    subtitle: {
        paddingBottom: '3rem'
    },
    CTAContainer: {
        width: 'fit-content',
        margin: '0 auto',
        paddingTop: '3rem',
    },
    button: {
        margin: '0 1rem',
        width: '20rem'
    }
}))

export default React.memo(function Reviews(props) {
    const classes = reviewsStyles()
    return (
        <section className={classes.root}>
            <Container variant='section'>
                <Typography variant='h3' component='h2' className={classes.heading}>
                    Actual Customer Reviews
                </Typography>
                <Typography variant='h6' component='p' className={classes.subtitle}>
                    And that's just a few
                </Typography>
                <Grid container spacing={32} justify='center'>
                    <ReviewCard />
                    <ReviewCard />
                    <ReviewCard />
                </Grid>
                <div className={classes.CTAContainer}>
                    <Button variant='outlined' size='large' color='primary' className={classes.button}>
                        Read More Reviews
                    </Button>
                    <CallToActionButton
                        size='large'
                        className={classes.button}>
                        Get An Instant Quote
                    </CallToActionButton>
                </div>
            </Container>
        </section>
    )
})