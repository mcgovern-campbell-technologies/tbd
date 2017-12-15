import React from 'react';
import PropTypes from 'prop-types';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';

import { Subject } from 'rxjs'
import { ajax } from 'rxjs/observable/dom/ajax';

function renderInput(inputProps) {
  const { classes, autoFocus, value, ref, ...other } = inputProps;
  return (
    <TextField
      autoFocus={autoFocus}
      className={classes.textField}
      value={value}
      inputRef={ref}
      InputProps={{
        classes: {
          input: classes.input,
        },
        ...other,
      }}
    />
  );
}

function renderSuggestion(suggestion, { query, isHighlighted }) {
  const matches = match(suggestion, query);
  const parts = parse(suggestion, matches);
  console.log('renderSuggestion')
  return (
    <MenuItem selected={isHighlighted} component="div">
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} style={{ fontWeight: 300 }}>
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </strong>
          );
        })}
      </div>
    </MenuItem>
  );
}

function renderSuggestionsContainer(options) {
  const { containerProps, children } = options;
  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

const styles = theme => ({
  container: {
    flexGrow: 1,
    position: 'relative',
    height: 200,
  },
  suggestionsContainerOpen: {
    position: 'absolute',
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 3,
    left: 0,
    right: 0,
  },
  suggestion: {
    display: 'block',
  },
  suggestionsList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },
  textField: {
    width: '100%',
  },
});

class AutoComplete extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.handleSuggestionsFetchRequested =  this.handleSuggestionsFetchRequested.bind(this)
    this.handleSuggestionsClearRequested = this.handleSuggestionsClearRequested.bind(this)
  }

  handleSuggestionsFetchRequested({ value }) {
    this.props.fetchSuggestions(value);
  };

  handleSuggestionsClearRequested() {
    this.props.clearSuggestions();
  };

  handleChange(event, { newValue }) {
    this.props.updateInput(newValue);
  };

  render() {
    const { classes } = this.props;

    return (
      <Autosuggest
        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderInputComponent={renderInput}
        suggestions={this.props.suggestions}
        onSuggestionsFetchRequested={this.handleSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.handleSuggestionsClearRequested}
        renderSuggestionsContainer={renderSuggestionsContainer}
        getSuggestionValue={(value) => value}
        renderSuggestion={renderSuggestion}
        inputProps={{
          autoFocus: true,
          classes,
          placeholder: '',
          value: this.props.inputValue,
          onChange: this.handleChange,
        }}
      />
    );
  }
}

AutoComplete.propTypes = {
  classes: PropTypes.object.isRequired,
  suggestions: PropTypes.object.isRequired,
  inputValue: PropTypes.string.isRequired,
  fetchSuggestions: PropTypes.func.isRequired,
  clearSuggestions: PropTypes.func.isRequired,
  updateInput: PropTypes.func.isRequired,
  getSuggestonValue: PropTypes.func
}

export default withStyles(styles)(AutoComplete);