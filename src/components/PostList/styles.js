import { makeStyles } from '@material-ui/core/styles';

const border = '1px solid black';

const useStyles = makeStyles(() => ({
	root: {
		backgroundColor: '#ffffff',
		padding: '20px',
		marginBottom: '50px',
		boxShadow: '0px 10px 15px rgba(230, 235, 255, 0.5)',
		borderRadius: '10px',
		textAlign: 'center',
	},
	title: {
		fontFamily: '"Open Sans", sans-serif',
		fontSize: '20px',
		fontWeight: 'bold',
		marginBottom: '20px',
	},
	table: {
		minWidth: '750px',
		maxWidth: '1000px',
		borderTop: border,
	},
	tableCell: {
		borderRight: border,
		'&:last-child': {
			borderRight: 0,
		},
	},
	icon: {
		fontSize: '24px',
		color: 'rgb(69, 70, 71)',
		cursor: 'pointer',
		'&:hover': {
			color: '#000000',
		},
	},
}));

export default useStyles;
