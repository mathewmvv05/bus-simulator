import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import bus from '../assets/bus.jpg';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

var imgStyle = {
	width: "100px"
};

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
		busPosition: {x: 0, y: 0}
	};

	positionChangeReset = () => {
		this.setState({
			busPosition: {x: 0, y: 0}
		});
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
	};
	positionChangeUp = () => {
		if( this.state.busPosition.y === 4) {
			return this.state.busPosition;
		}
		else {
			this.setState({
				busPosition: {x: this.state.busPosition.x, y: this.state.busPosition.y + 1}
			});
		}
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
	};
	positionReport = () => {
		window.alert(JSON.stringify(`X - Position = ${this.state.busPosition.x}, Y - Position =  ${this.state.busPosition.y}`));
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

				<Grid container className={classes.root}  spacing={8}>
					<Grid item xs={5}>
						<Grid container className={classes.demo} spacing={Number(spacing)}>
							{[0, 1, 2, 3, 4].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										{(value === this.state.busPosition.x) ? <span>{this.parkingRow0()}</span>: <span></span>}
									</Paper>
								</Grid>
							))}
						</Grid>
						<Grid container className={classes.demo} spacing={Number(spacing)}>
							{[0, 1, 2, 3, 4].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										{value === this.state.busPosition.x ? <span>{this.parkingRow1()}</span>: <span></span>}
									</Paper>
								</Grid>
							))}
						</Grid>
						<Grid container className={classes.demo} spacing={Number(spacing)}>
							{[0, 1, 2, 3, 4].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										{value === this.state.busPosition.x ? <span>{this.parkingRow2()}</span>: <span></span>}
									</Paper>
								</Grid>
							))}
						</Grid>
						<Grid container className={classes.demo} spacing={Number(spacing)}>
							{[0, 1, 2, 3, 4].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										{value === this.state.busPosition.x ? <span>{this.parkingRow3()}</span>: <span></span>}
									</Paper>
								</Grid>
							))}
						</Grid>
						<Grid container className={classes.demo} spacing={Number(spacing)}>
							{[0, 1, 2, 3, 4].map(value => (
								<Grid key={value} item>
									<Paper className={classes.paper}>
										{value === this.state.busPosition.x ? <p>{this.parkingRow4()}</p>: <p></p>}
									</Paper>
								</Grid>
							))}
						</Grid>
					</Grid>
				</Grid>
				<Button onClick={this.positionChangeReset} variant="outlined" color="primary" className={classes.button}>
					Place
				</Button>
				<Button onClick={this.positionChangeLeft} variant="outlined" color="primary" className={classes.button}>
					Left
				</Button>
				<Button onClick={this.positionChangeRight} variant="outlined" color="primary" className={classes.button}>
					Right
				</Button>
				<Button onClick={this.positionChangeUp} variant="outlined" color="primary" className={classes.button}>
					Move Down
				</Button>
				<Button onClick={this.positionChangeDown} variant="outlined" color="primary" className={classes.button}>
					Move Up
				</Button>
				<Button onClick={this.positionReport} variant="outlined" color="primary" className={classes.button}>
					Report
				</Button>
			</div>
		);
	}
	parkingRow0() {
		const { busPosition } = this.state;
		if( busPosition.y === 0 ) {
			return <span><img style={imgStyle} src={bus} alt={''}/></span>;
		} else {
			return <span></span>
		}
	}
	parkingRow1() {
		const { busPosition } = this.state;
		if( busPosition.y === 1 ) {
			return <span><img style={imgStyle} src={bus} alt={''}/></span>;
		} else {
			return <span></span>
		}

	}
	parkingRow2() {
		const { busPosition } = this.state;
		if( busPosition.y === 2 ) {
			return <span><img style={imgStyle} src={bus} alt={''}/></span>;
		} else {
			return <span></span>
		}
	}
	parkingRow3() {
		const { busPosition } = this.state;
		if( busPosition.y === 3 ) {
			return <span><img style={imgStyle} src={bus} alt={''}/></span>;
		} else {
			return <span></span>
		}
	}
	parkingRow4() {
		const { busPosition } = this.state;
		if( busPosition.y === 4 ) {
			return <span><img style={imgStyle} src={bus} alt={''}/></span>;
		} else {
			return <span></span>
		}
	}
}

ParkingComponent.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ParkingComponent);