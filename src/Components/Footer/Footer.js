import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
	return (
		<Typography variant="body2" color="text.secondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://github.com/sazid-hassan">
				Sazid Hassan Khan
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

function Footer(props) {
	const { description, title } = props;

	return (
		<div style={{ backgroundColor: "#f5f8f8", marginBottom: "0", marginTop: "20vh" }}>
			<Box component="footer" sx={{ py: 6 }}>
				<Container maxWidth="lg">
					<Typography variant="h6" align="center" gutterBottom>
						{title}
					</Typography>
					<Typography
						variant="subtitle1"
						align="center"
						color="text.secondary"
						component="p"
					>
						{description}
					</Typography>
					<Copyright />
				</Container>
			</Box>
		</div>
	);
}

Footer.propTypes = {
	description: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};

export default Footer;