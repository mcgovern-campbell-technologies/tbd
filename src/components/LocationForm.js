import React from 'react'
import { Field, reduxForm } from 'redux-form'

function LocationForm(props) {
  return (
    <form>
      <div>
        <label htmlFor="location">Select Your Location</label>
        <Field name="location" component="select">

        </Field>
      </div>
    </form>
  )
}

export default 