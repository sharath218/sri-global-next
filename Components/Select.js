import React from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from "../styles/Contact.module.scss";

function Select (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field as='select' id={name} name={name} {...rest}>
        {options.map(option => {
          return (
            <option className={styles.selinput} key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>
     
    </div>
  )
}

export default Select