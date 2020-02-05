import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import useStyles from './styles';
import Input from '../../shared/Input';
import Radio from '../../shared/Radio';
import { addOnePost } from '../../store/post/action';

const Schema = Yup.object().shape({
	firstName: Yup.string()
		.min(2, 'Too Short!')
		.max(30, 'Too Long!')
		.required('Required'),
	lastName: Yup.string()
		.min(2, 'Too Short!')
		.max(30, 'Too Long!')
		.required('Required'),
	phone: Yup.string()
		.min(10, 'Too Short!')
		.max(17, 'Too Long!')
		.required('Required'),
	age: Yup.number()
		.min(10, 'few, from 10 to 130')
		.max(130, 'very much, from 10 to 130')
		.required('Required'),
});

const ValidationForm = ({ addOnePost, list }) => {
	const classes = useStyles();

	const initialValues = {
		firstName: '',
		lastName: '',
		phone: '',
		age: '',
		gender: 'true',
	};

	return (
		<div className={classes.root}>
			<div className={classes.title}>Fill the form</div>
			<Formik
				initialValues={initialValues}
				validationSchema={Schema}
				onSubmit={(values, { resetForm }) => {
					addOnePost([
						...list,
						{
							...values,
							gender: values.gender === 'true' ? true : false,
							id: Date.now(),
						},
					]);
					resetForm(initialValues);
				}}
			>
				{({ errors, touched }) => (
					<Form>
						<div className={classes.form}>
							<Input
								name="firstName"
								type="text"
								placeholder="first name"
								className={`${classes.input} ${
									errors.firstName && touched.firstName ? classes.error : null
								}`}
							/>
							<Input
								name="lastName"
								type="text"
								placeholder="last name"
								className={`${classes.input} ${
									errors.lastName && touched.lastName ? classes.error : null
								}`}
							/>
							<Input
								name="phone"
								type="text"
								placeholder="phone"
								className={`${classes.input} ${
									errors.phone && touched.phone ? classes.error : null
								}`}
							/>
							<Input
								name="age"
								type="number"
								placeholder="age"
								className={`${classes.input} ${
									errors.age && touched.age ? classes.error : null
								}`}
							/>
							<div>
								<label>
									<Radio name="gender" value="true" />
									Male
								</label>
								<label>
									<Radio name="gender" value="false" />
									Female
								</label>
							</div>
						</div>
						<button type="submit" className={classes.submit}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

const mapStateToProps = ({ post }) => {
	return {
		list: post.list,
	};
};

const mapDispatchToProps = {
	addOnePost,
};

export default connect(mapStateToProps, mapDispatchToProps)(ValidationForm);
