import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import {FlightModalStyled} from './flight-modal.styles';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

const SpringModal = ({
                       destinationPortCode,
                       destinationPortName,
                       flightCode,
                       flightProvider,
                       id,
                       scheduledArrival,
                       scheduledDeparture,
                       sourcePortCode,
                       sourcePortName,
                       status
                     }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return (
        <FlightModalStyled>
          <button type="button" onClick={handleOpen}>
            More Details
          </button>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2>Flight Details</h2>
                        <h3>Scheduled Departure</h3>
                        <p>{scheduledDeparture}</p>
                        <h3>Scheduled Arrival</h3>
                        <p>{scheduledArrival}</p>
                        <h3>Destination</h3>
                        <p>{destinationPortName} {destinationPortCode}</p>
                        <h3>Flight Code/Provider</h3>
                        <p>{flightCode} {flightProvider}</p>
                        <h3>Current Status</h3>
                        <p>{status}</p>
                        <h3>Source Port Code/Name</h3>
                        <p>{sourcePortCode} {sourcePortName}</p>
                    </div>
                </Fade>
            </Modal>
        </FlightModalStyled>
    );
};

export default SpringModal;
