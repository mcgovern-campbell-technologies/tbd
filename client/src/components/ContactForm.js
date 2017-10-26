import React from 'react'
import { Field, reduxForm } from 'redux-form'

function ContactForm(props) {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
      {/*
              <label htmlFor="firstName">First Name</label>
              <Field name="firstName" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="lastName">Last Name</label>
              <Field name="lastName" component="input" type="text" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <Field name="email" component="input" type="email" />
            </div>
            <div>*/}
        <label htmlFor="Phone Number">Phone Number</label>
        <Field name="phoneNumber" component="input" type="tel" />
      </div>
      {<button type="submit">Submit</button>}
    </form>
  )
}

export default reduxForm({ form: 'contact' })(ContactForm)






