import React, { Component }from 'react';

import  
  Dialog, {
  DialogContent,
  DialogContentText,
  DialogTitle,
  DialogActions,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const locations = [
  { label: 'west', value: 'west' },
  { label: 'east', value: 'east' }
]

const companies = [
  { label: 'kuka', value: 'kuka' }
]

const positions = [
  { 
    label: 'Electrician II', 
    value: 'electrician 2'
  },
  { 
    label: 'Electrician I', 
    value: 'electrician 1'
  },
  { 
    label: 'Electrician Spec', 
    value: 'electrician spec'
  },

]

class AddExpirienceBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      position: positions[0].value,
      company: companies[0].value,
      location: locations[0].value,
      startDate: '', 
      endDate: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
  }

  handleAddExperience() {
    this.props.handleAddExperience({ ...this.state })
  }

  handleChange(name) {
    return event => {
      this.setState({
        [name]: event.target.value
      })
    }
  }

  render() {  
    return (
      <Dialog
        open={this.props.open}
      >
        <DialogContent>
          <DialogTitle>
            Add Some Experience
          </DialogTitle>
          <form>
            <div className='db'>
              <TextField
                select
                label="position"
                value={this.state.position}
                InputLabelProps={{
                  shrink: true,
                }}
                SelectProps={{
                  native: true,
                }}
                onChange={this.handleChange('position')}
                margin="normal"
              >
                {positions.map(option => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            <div className='db'>
              <TextField
                select
                label="company"
                value={this.state.company}
                InputLabelProps={{
                  shrink: true,
                }}
                SelectProps={{
                  native: true,
                }}
                onChange={this.handleChange('company')}
                margin="normal"
              >
                {companies.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            <div className='db'>
              <TextField
                select
                label="location"
                value={this.state.location}
                InputLabelProps={{
                  shrink: true,
                }}
                SelectProps={{
                  native: true,
                }}
                onChange={this.handleChange('location')}
                margin="normal"
              >
                {locations.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </div>
            <div className='db'>
              <TextField
                label="start date"
                type="date"
                onChange={this.handleChange('startDate')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className='db'>
              <TextField
                label="end date"
                onChange={this.handleChange('endDate')}
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={this.props.toggleAddExperienceBox}
          >
            Cancel
          </Button>
          <Button
            onClick={this.handleAddExperience}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
  }

export default AddExpirienceBox