import { makeStyles } from '@material-ui/core/styles';

const font = '"Open Sans", sans-serif';

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
		fontFamily: font,
		fontSize: '20px',
		fontWeight: 'bold',
		marginBottom: '20px',
	},
	form: {
		padding: '10px',
		display: 'flex',
		justifyContent: 'center',
	},
	input: {
		fontSize: '15px',
		fontFamily: font,
		padding: '5px 10px',
		border: '1px solid #E6EBFF',
		outline: 0,
		width: '150px',
		borderRadius: '30px',
		'&:hover': {
			border: '1px solid #888888',
		},
		'&:focus': {
			border: '1px solid #121213',
		},
	},

	submit: {
		fontSize: '20px',
		fontFamily: font,
		padding: '10px 20px',
		background: '#00F2C9',
		border: 0,
		outline: 0,
		cursor: 'pointer',
		boxShadow: '0px 4px 10px rgba(0, 242, 201, 0.5)',
		borderRadius: '30px',
		color: '#3D3B69',
		'&:hover': {
			background: '#FDFDFD',
		},
	},

	error: {
		border: '1px solid red',
	},
}));

export default useStyles;
