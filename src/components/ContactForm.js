import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

// export default class extends Component{

//   constructor(props) {
//     super(props)

//     var { firstName, lastName, email, date, onBasicInfoUpdate } = this.props
//     this.state = {
//       firstName,
//       lastName,
//       email,
//       date,
//     }
//     this.handleChange = this.handleChange.bind(this)
//   }

//   handleChange(e) {
//     this.setState({[e.target.name]: e.target.value})
//     this.props.onBasicInfoUpdate(e)
//   }

//   render() {
//     const { firstName, lastName, email, date, onBasicInfoUpdate } = this.props
//     return (
//       <div>
//         <form>
//           <label>
//             first name:
//             <input type="text" name="firstName" value={firstName} onChange={this.handleChange}/>
//           </label>
//           <label>
//             last name:
//             <input type="text" name="lastName" value={lastName} onChange={(e) => onBasicInfoUpdate(e, "basicInfo")}/>
//           </label>
//           <label>
//             email:
//             <input type="email" name="email" value={email} onChange={(e) => onBasicInfoUpdate(e, "basicInfo")}/>
//           </label>
//           <label>
//             date of birth:
//             <input type="date"  value={date} onChange={(e) => onBasicInfoUpdate(e, "basicInfo")}/>
//           </label>

//           <input type="button" value="continue"/>
//         </form>
//       </div>
//     )
    
//   }
// }

function ContactForm(props) {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
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
      <div>
        <label htmlFor="Phone Number">Email</label>
        <Field name="phoneNumber" component="input" type="text" />
      </div>
      {<button type="submit">Submit</button>}
    </form>
  )
}

export default reduxForm({ form: 'contact' })(ContactForm)






