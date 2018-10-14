import React from 'react';
import Button from '@material-ui/core/Button';
import {withStyles} from "@material-ui/core";
import PropTypes from 'prop-types';

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	input: {
		display: 'none',
	},
});

class BusComponent extends React.Component {
	state = {
		position: {x: 0, y: 0}
	};

	positionChange(x, y) {
		this.setState({
			position: {x, y}
		});
		console.log(this.state.position);
	}

	render() {
		const { classes } = this.props;
		return (
			<div>
				{/*<Button onClick={this.positionChange(1, 2)} variant="outlined" color="primary" className={classes.button}>*/}
					{/*Place*/}
				{/*</Button>*/}
			</div>
		);
	}
}

BusComponent.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BusComponent);