import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/styles'
// State
import { Store } from '../../state/store'
// Actions
import {
    nextBookingStep,
    previousBookingStep
} from '../../state/actions'
// Steps
import Step1 from './Steps/Step1'
// Material components
import Hidden from '@material-ui/core/Hidden'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { IconContentContainer } from './Containers/ContentField'
import LockIcon from '@material-ui/icons/EnhancedEncryption'
import NextPageIcon from '@material-ui/icons/ArrowForward'
// Custom components
import { Wrapper } from '../../components/Wrappers'
import Divider from '@material-ui/core/Divider'
import Image from '../../components/Image'

// Define steps
const steps = [
    {
        desktop: 'Choose Your Service',
        mobile: 'Service'
    },
    {
        desktop: 'Select A Date',
        mobile: 'Date'
    },
    {
        desktop: 'Add Instructions',
        mobile: 'Instructions'
    },
    {
        desktop: 'Confirm Booking',
        mobile: 'Confirm'
    }
]

// Get current step
function getStepIndex(stepIndex) {
    switch (stepIndex) {
        case 0:
            return {
                title: 'How Can We Help You Today?',
                next: 'Select a Date',
                subtitle: 'Tell us about your home and cleaning requirements',
                content: <Step1 />
            }
        case 1:
            return {
                title: 'Choose Your Preferred Service Date',
                next: 'Add Instructions',
                content: 'Test2'
            }
        case 2:
            return {
                title: 'Add Special Instructions',
                next: 'Review & Confirm',
                content: 'Test3'
            }
        case 3:
            return {
                title: 'Confirm Your Booking Request',
                content: 'Test3'
            }
        default:
            return {
                title: 'Uh Oh! Something Went Wrong...',
                content: 'Please email us at support@goldcoastmaids.com.au'
            }
    }
}

// Create styles
const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.grey[200],
    },
    stepperContainer: {
        height: 'fit-content',
        paddingTop: theme.spacing.unit,
        [theme.breakpoints.down('xs')]: {
            paddingTop: 0,
        }
    },
    stepper: {
        marginTop: 2 * theme.spacing.unit,
        marginBottom: 2 * theme.spacing.unit,
        background: 'none',
        [theme.breakpoints.down('xs')]: {
            margin: 0,
            paddingTop: 2 * theme.spacing.unit,
            paddingBottom: 1 * theme.spacing.unit
        }
    },
    card: {
        [theme.breakpoints.down('xs')]: {
            boxShadow: 'none',
            borderRadius: 0
        },
    },
    cardContainer: {
        paddingBottom: 6 * theme.spacing.unit,
        height: 'fit-content',
        [theme.breakpoints.down('xs')]: {
            paddingBottom: 0
        }
    },
    title: {
        marginTop: 4 * theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        [theme.breakpoints.down('xs')]: {
            marginTop: 2 * theme.spacing.unit,
            fontSize: '1.5rem'
        }
    },
    buttonDivider: {
        marginTop: 4 * theme.spacing.unit,
        marginBottom: 4 * theme.spacing.unit
    },
    pageButtonContainer: {
        marginTop: 2 * theme.spacing.unit
    },
    pageButton: {
        // paddingLeft: 12 * theme.spacing.unit,
        // paddingRight: 12 * theme.spacing.unit,
        // marginRight: 2 * theme.spacing.unit,
        // width: '100%'
    },
    buttonIcon: {
        marginLeft: 1.5 * theme.spacing.unit
    }

}))

export default React.memo(function BookingForm(props) {
    // Get state
    const { state, dispatch } = useContext(Store)
    // Define styles
    const classes = useStyles()
    return (
        <section className={classes.root}>
            <Wrapper
                variant='base'
                md={6}
                className={classes.stepperContainer}
            >
                <Hidden xsDown>
                    <Stepper
                        activeStep={state.bookingForm.page}
                        alternativeLabel
                        className={classes.stepper}
                    >
                        {steps.map(label => {
                            return (
                                <Step key={label}>
                                    <StepLabel>
                                        <Hidden xsDown>
                                            {label.desktop}
                                        </Hidden>
                                        <Hidden smUp>
                                            {label.mobile}
                                        </Hidden>
                                    </StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Hidden>
            </Wrapper>
            <Wrapper
                sm={10}
                md={8}
                className={classes.cardContainer}
            >
                <Card className={classes.card}>
                    <CardContent className={classes.cardContainer}>
                        <Wrapper md={11}>
                            {state.bookingForm.page === steps.length ? (
                                <div>
                                    <Typography className={classes.instructions}>
                                        All steps completed
                                    </Typography>
                                </div>
                            ) : (
                                    <div>
                                        <Typography
                                            variant='h4'
                                            component='p'
                                            className={classes.title}
                                            color='textPrimary'
                                        >
                                            {getStepIndex(state.bookingForm.page)['title']}
                                        </Typography>
                                        <Hidden xsDown>
                                            <Typography
                                                variant='subtitle1'
                                                className={classes.subtitle}
                                                align='center'
                                            >
                                                {getStepIndex(state.bookingForm.page)['subtitle']}
                                            </Typography>
                                        </Hidden>
                                        {getStepIndex(state.bookingForm.page)['content']}
                                        <Divider className={classes.buttonDivider} />
                                        <Grid container
                                            className={classes.pageButtonContainer}
                                            alignItems='flex-end'
                                        >
                                            <Grid item xs={12}>
                                                <Button
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={() => dispatch(nextBookingStep())}
                                                    className={classes.pageButton}
                                                    size='large'
                                                >
                                                    {state.bookingForm.page === steps.length - 1 ?
                                                        'Confirm Booking'
                                                        :
                                                        getStepIndex(state.bookingForm.page)['next']
                                                    }
                                                    <NextPageIcon className={classes.buttonIcon} />
                                                </Button>
                                                {state.bookingForm.page !== 0 &&
                                                    <Button
                                                        onClick={() => dispatch(previousBookingStep())}
                                                        className={classes.pageButton}
                                                        size='large'
                                                    >
                                                        Back
                                                    </Button>
                                                }
                                            </Grid>
                                            <Hidden xsDown>
                                                <Grid item style={{ marginLeft: 'auto' }}>
                                                    <IconContentContainer
                                                        height={4} // measured in theme.styling.units (8px unless default changed)
                                                        icons={[
                                                            {
                                                                inputVariant: LockIcon,
                                                            },
                                                            {
                                                                inputVariant: Image,
                                                                src: './static/other/powered_by_stripe.png',
                                                            },
                                                        ]}
                                                    />
                                                </Grid>
                                            </Hidden>
                                        </Grid>
                                    </div>
                                )}
                        </Wrapper>
                    </CardContent>
                </Card>
            </Wrapper>
        </section>
    )
})