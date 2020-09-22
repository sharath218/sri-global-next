import React, { useState } from "react";
import styles from "../styles/Contact.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select from "./Select";
import firebase from "../services/firebase";
const initialValues = {
	name: "",
	email: "",
	phoneNumber: "",
	place: "",
	service: "",
};
const validationSchema = Yup.object({
	email: Yup.string().email("Invalid email format").required("Email Required"),
	name: Yup.string().required("Your Name is Required"),
	//phoneNumber: Yup.number().required("Phone Number Required").min(10).max(10),
	place: Yup.string().required("Select an place"),
	service: Yup.string().required("Select an service"),
	phoneNumber: Yup.string().required("phone number is required").matches(/^[6-9]\d{9}$/, {message: "Please enter valid number."})
});


const Contact = () => {
		const [gif, setgif] = useState(false);
	const placeOptions = [
		{ key: 'Select your Location', value: '' },
		{ key: 'React', value: 'react' },
		{ key: 'Angular', value: 'angular' },
		{ key: 'Vue', value: 'vue' }
	  ]	
	  const serviceOptions = [
		{ key: 'Select your Service', value: '' },
		{ key: 'React', value: 'react' },
		{ key: 'Angular', value: 'angular' },
		{ key: 'Vue', value: 'vue' }
	  ]	  

	  const giftimer= () => {
		setgif(true);
		setTimeout(() =>{setgif(false)}, 2000);
	  }

	  async function loginUser(values,resetForm,){
		
		let res;
		await firebase.addData(values)
		.then(function() {
			console.log("waiting");
			giftimer()
			resetForm();
				
		})
		.catch(err => alert(err));
		giftimer()
	  }
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={async (values, { setSubmitting,resetForm}) => {
				
				await loginUser(values ,resetForm);
				setSubmitting(false);
			}}
		>
			{({ isSubmitting, isValid }) => (
					
				<Form >
					{ isSubmitting ? <div className={styles.loader}></div> : 
					
					<div className={styles.contContainer}>
						{ gif ?
						<img
						className={styles.successgif}
						src="/img/success.gif"
						alt="image1"
						/> : null }
					<h1 className={styles.title}> Reach Us</h1>
                    

                    <label className={styles.formlabel}>Name</label>
                    <Field className={styles.input} type='text' id='name' name='name'/>
                    <ErrorMessage  name='name'>
                    {error => <p className={styles.errormsg}>{error}</p>}
                    </ErrorMessage>

                    <label className={styles.formlabel}>Email</label>
                    <Field className={styles.input} type='email' id='email' name='email'/>
                    <ErrorMessage  name='email'>
                    {error => <p className={styles.errormsg}>{error}</p>}
                    </ErrorMessage>

                    <label className={styles.formlabel}>Phone Number</label>
                    <Field className={styles.input} id='phoneNumber' name='phoneNumber' />
                    <ErrorMessage  name='phoneNumber'>
                    {error => <p className={styles.errormsg}>{error}</p>}
                    </ErrorMessage>

					<label className={styles.formlabel}>Locality</label>
                    <Select 
			
						 name='service'
						 className={styles.input}
						 options={placeOptions}
					/>
					<ErrorMessage  name='service'>
                    {error => <p className={styles.errormsg}>{error}</p>}
                    </ErrorMessage>

					<label className={styles.formlabel}>select the Service</label>
                    <Select 
						 name='place'
						 className={styles.input}
						 options={serviceOptions}
					/>
					<ErrorMessage  name='place'>
                    {error => <p className={styles.errormsg}>{error}</p>}
                    </ErrorMessage>



					<button
						disabled={!isValid || isSubmitting}
						type="submit"
						className={ !isValid || isSubmitting ? styles.submitting : styles.submitbtn}
					>
						SEND
					</button>

					
					</div>}
					
				</Form>
				
			
			)}

						
		</Formik>
	);
};

export default Contact;
