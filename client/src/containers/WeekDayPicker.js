import React from 'react';

// styles
const days = {
  "M": false,
  "Tu": false,
  "W": false,
  "Th": false,
  "F": false,
  "Sa": false,
  "Su": false
};

const dayPickerWrapperStyles = {
  display: "flex",
}

const circleStyle = {
  padding: "0",
	marginLeft: "2px",
	width: "30px",
	height: "30px",
  lineHeight: "30px",
	color: "white",
	backgroundColor: "rgb(185,185,185)",
	borderRadius: "50%",
	fontSize: "12px",
	display: "inline-block",
	textAlign: "center",
  cursor: "pointer",
}

const selectedCircleStyle = {
  ...circleStyle,
  backgroundColor: "green",
}


// Day component
const Day = ({day, toggleDay, selected}) => (
  <div onClick={() => toggleDay(day)} style={selected ? selectedCircleStyle : circleStyle}>
    {day}
  </div>
)


class WeekDayPicker extends React.Component {
  constructor () {
    super();
    this.state = {
      selectedDays: {
        "M": false,
        "Tu": false,
        "W": false,
        "Th": false,
        "F": false,
        "Sa": false,
        "Su": false
      }
    }

    this.toggleDay = this.toggleDay.bind(this);
  }

  toggleDay(day) {
    const selectedDays = {...this.state.selectedDays};
    selectedDays[day] = !selectedDays[day];
    console.log('selectedDays from WeekDayPicker')
    console.log(selectedDays)
    this.setState({selectedDays})
  }

  render () {
    return (
      <div style={dayPickerWrapperStyles}>
        {Object.keys(this.state.selectedDays).map(day =>
          <Day
            toggleDay={this.toggleDay}
            selected={this.state.selectedDays[day]}
            key={`i-${day}`}
            day={day}
          />
        )}
      </div>
    )
  }
}

export default WeekDayPicker;
