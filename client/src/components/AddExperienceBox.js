import React, { Component }from 'react';
import PropTypes from 'prop-types';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddExperienceBox extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.handleChange = this.handleChange.bind(this);
    this.handleAddExperience = this.handleAddExperience.bind(this);
  }

  handleAddExperience() {
    this.props.handleAddExperience({ ...this.props.properties })
  }

  handleDeleteExperience() {
    this.props.handleDeleteExperience()
  }

  handleChange(name) {
    return event => {
      this.setState({
        [name]: event.target.value
      })
    }
  }

  render() { 
    const { edit, properties, handleUpdateProperties, locations, companies, positions } = this.props;
    const { startDate, endDate, position, company, location } = properties;
    return (
      <Dialog
        open={this.props.open}
      >
        <DialogContent>
          <DialogTitle>
            { edit? "Edit Your Experience" : "Add Some Experience" }
          </DialogTitle>
          <form>
            <div className='db'>
              <TextField
                select
                label="position"
                value={position}
                InputLabelProps={{
                  shrink: true,
                }}
                SelectProps={{
                  native: true,
                }}
                onChange={handleUpdateProperties('position')}
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
                value={company}
                InputLabelProps={{
                  shrink: true,
                }}
                SelectProps={{
                  native: true,
                }}
                onChange={handleUpdateProperties('company')}
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
                onChange={handleUpdateProperties('location')}
                margin="normal"
                disable={this.props.edit}
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
                value={startDate}
                onChange={handleUpdateProperties('startDate')}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div className='db'>
              <TextField
                label="end date"
                value={endDate}
                onChange={handleUpdateProperties('endDate')}
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

AddExperienceBox.propTypes = {
  toggleAddExperienceBox: PropTypes.func.isRequired,
  handleAddExperience: PropTypes.func.isRequired,
  handleDeleteExperience: PropTypes.func.isRequired,
  edit: PropTypes.bool.isRequired
}

export default AddExperienceBox