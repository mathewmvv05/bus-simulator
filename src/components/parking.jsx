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
	},
});

class ParkingComponent extends React.Component {
	state = {
		spacing: '16',
		busPosition: {x: 0, y: 0, direction: ''}
	};

	positionChangeReset = () => {
		this.setState({
			busPosition: {x: 0, y: 0, direction: 'right'}
		});
		console.log(this.state.busPosition);
	};

	positionChangeRight = () => {
		this.setState({
			busPosition: {x: this.state.busPosition.x, y: this.state.busPosition.y, direction: 'right'}
		});
		console.log(this.state.busPosition);
	};
	positionChangeLeft = () => {
		this.setState({
			busPosition: {x: this.state.busPosition.x, y: this.state.busPosition.y, direction: 'left'}
		});
		console.log(this.state.busPosition);
	};
	positionChangeUp = () => {
		this.setState({
			busPosition: {x: this.state.busPosition.x, y: this.state.busPosition.y+1, direction: this.state.busPosition.direction}
		});
		console.log(this.state.busPosition);
	};
	positionReport() {
		console.log(this.state.busPosition);
	}

	handleChange = key => (event, value) => {
		this.setState({
			[key]: value,
		});
	};

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
							{[0, 1, 2, 4, 5].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										<p>Bus</p>
									</Paper>
								</Grid>
							))}
						</Grid>
						<Grid container className={classes.demo} spacing={Number(spacing)}>
							{[0, 1, 2, 4, 5].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										<p>Bus</p>
									</Paper>
								</Grid>
							))}
						</Grid>
						<Grid container className={classes.demo} spacing={Number(spacing)}>
							{[0, 1, 2, 4, 5].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										<p>Bus</p>
									</Paper>
								</Grid>
							))}
						</Grid>
						<Grid container className={classes.demo} spacing={Number(spacing)}>
							{[0, 1, 2, 4, 5].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										<p>Bus</p>
									</Paper>
								</Grid>
							))}
						</Grid>
						<Grid container className={classes.demo} spacing={Number(spacing)}>
							{[0, 1, 2, 4, 5].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										<p>Bus</p>
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
				<Button onClick={this.positionChange} variant="outlined" color="primary" className={classes.button}>
					Report
				</Button>
			</div>
		);
	}
}

ParkingComponent.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParkingComponent);