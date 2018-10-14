import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import BusComponent from './bus.jsx';

const styles = theme => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 100,
		width: 100,
	},
	paper2: {
		height: 650,
		width: 650,
	},
	control: {
		padding: theme.spacing.unit * 2,
	},
	button: {
		margin: theme.spacing.unit,
	},
	input: {
		display: 'none',
	}
});

class ParkingComponent extends React.Component {
	state = {
		spacing: '16',
		busPosition: {x: 0, y: 0},
		newBus: <p>Car</p>
	};

	positionChangeReset = () => {
		this.setState({
			busPosition: {x: 0, y: 0}
		});
		console.log(this.state.busPosition);
	};

	positionChangeRight = () => {
		if(this.state.busPosition.x === 4) {
			return this.state.busPosition;
		}
		else {
			this.setState({
				busPosition: {x: this.state.busPosition.x+1, y: this.state.busPosition.y}
			});
		}
		console.log(this.state.busPosition);
	};
	positionChangeLeft = () => {
		if(this.state.busPosition.x === 0) {
			return this.state.busPosition;
		}
		else {
			this.setState({
				busPosition: {x: this.state.busPosition.x - 1, y: this.state.busPosition.y}
			});
		}
		console.log(this.state.busPosition);
	};
	positionChangeUp = () => {
		if( this.state.busPosition.y === 4) {
			return this.state.busPosition;
		}
		else {
			this.setState({
				busPosition: {x: this.state.busPosition.x, y: this.state.busPosition.y+1}
			});
		}
		console.log(this.state.busPosition);
	};
	positionChangeDown = () => {
		if( this.state.busPosition.y === 0) {
			return this.state.busPosition;
		}
		else {
			this.setState({
				busPosition: {x: this.state.busPosition.x, y: this.state.busPosition.y - 1}
			});
		}
		console.log(this.state.busPosition);
	};
	positionReport() {
		console.log(this.state.busPosition);
	}

	render() {
		const { classes } = this.props;
		const { spacing } = this.state;

		return (
			<div>
				<AppBar position="static" color="default">
					<Toolbar>
						<Typography variant="h6" color="inherit">
							Accordo Test
						</Typography>
					</Toolbar>
				</AppBar>
				<Grid container className={classes.root}  spacing={0}>
					<Grid item xs={5}>
						<Grid container className={classes.demo} spacing={Number(spacing)}>
							{[0, 1, 2, 3, 4].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										<p>{this.parkingRow0()}</p>
									</Paper>
								</Grid>
							))}
						</Grid>
						<Grid container className={classes.demo} spacing={Number(spacing)}>
							{[0, 1, 2, 3, 4].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										<p>{this.parkingRow1()}</p>
									</Paper>
								</Grid>
							))}
						</Grid>
						<Grid container className={classes.demo} spacing={Number(spacing)}>
							{[0, 1, 2, 3, 4].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										<p>{this.parkingRow2()}</p>
									</Paper>
								</Grid>
							))}
						</Grid>
						<Grid container className={classes.demo} spacing={Number(spacing)}>
							{[0, 1, 2, 3, 4].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										<p>{this.parkingRow3()}</p>
									</Paper>
								</Grid>
							))}
						</Grid>
						<Grid container className={classes.demo} spacing={Number(spacing)}>
							{[0, 1, 2, 3, 4].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										<p>{this.parkingRow4()}</p>
									</Paper>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
				<Button onClick={this.positionChangeReset} variant="outlined" color="primary" className={classes.button}>
					Place
				</Button>
				<Button onClick={this.positionChangeRight} variant="outlined" color="primary" className={classes.button}>
					Right
				</Button>
				<Button onClick={this.positionChangeLeft} variant="outlined" color="primary" className={classes.button}>
					Left
				</Button>
				<Button onClick={this.positionChangeUp} variant="outlined" color="primary" className={classes.button}>
					Move Up
				</Button>
				<Button onClick={this.positionChangeDown} variant="outlined" color="primary" className={classes.button}>
					Move Down
				</Button>
				<Button onClick={this.formatCount} variant="outlined" color="primary" className={classes.button}>
					Format
				</Button>
			</div>
		);
	}
	parkingRow0() {
		const { newBus, busPosition } = this.state;
		if( busPosition.x === 0 ) {
			return <span>New Bus</span>;
		} else {
			return <span></span>
		}

	}
	parkingRow1() {
		const { newBus, busPosition } = this.state;
		if( busPosition.x === 1 ) {
			return <span>New Bus</span>;
		} else {
			return <span></span>
		}

	}
	parkingRow2() {
		const { busPosition } = this.state;
		if( busPosition.x === 2 ) {
			return <span>New Bus</span>;
		} else {
			return <span></span>
		}
	}
	parkingRow3() {
		const { busPosition } = this.state;
		if( busPosition.x === 3 ) {
			return <span>New Bus</span>;
		} else {
			return <span></span>
		}
	}
	parkingRow4() {
		const { busPosition } = this.state;
		if( busPosition.x === 4 ) {
			return <span>New Bus</span>;
		} else {
			return <span></span>
		}
	}
	parkingRestX() {
		const { busPosition } = this.state;
		if ( busPosition.x > 4 || busPosition.x < 0 ) {
			this.setState({
				busPosition: {x: 0, y: this.state.busPosition.y}
			});
		}
	}
	parkingRestY() {
		const { busPosition } = this.state;
		if ( busPosition.y > 4  || busPosition.y < 0) {
			this.setState({
				busPosition: {x: this.state.busPosition.x, y: 0}
			});
		}
	}
}

ParkingComponent.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParkingComponent);