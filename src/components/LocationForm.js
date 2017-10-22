import React from 'react'
// import { Field, reduxForm } from 'redux-form'
import Select from 'react-select'
import 'react-select/dist/react-select.css'


function LocationForm(props) {
  const { options, selectValue, handleLocationSubmit} = props
  return (
      <div>
        <Select
          name="locationForm"
          options={options}
          value={selectValue}
          onChange={handleLocationSubmit}
        />
      </div>
  )
}

export default LocationForm