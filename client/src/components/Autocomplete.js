import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { MenuItem } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';

/* Rxjs */
import { ajax } from 'rxjs/observable/dom/ajax';
import { Subject } from 'rxjs';

function InputBox({ inputProps }) {
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

function renderSuggestion(params) {
  const { suggestion, index, itemProps, theme, highlightedIndex, selectedItem } = params;
  const isHighlighted = highlightedIndex === index;
  const isSelected = selectedItem === suggestion.label;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected
          ? theme.typography.fontWeightMedium
          : theme.typography.fontWeightRegular,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}

function SuggestionsContainer({ containerProps, children }) {
  return (
    <Paper {...containerProps} square>
      {children}
    </Paper>
  );
}

const styles = {
  container: {
    flexGrow: 1,
    height: 200,
  },
  textField: {
    width: '100%',
  },
};

const createSuggestionStream$ = (url) => {
  const suggestionStream = new Subject()
    .throttleTime(300)
    .concatMap(value => 
      ajax.get(`${url}?queryString=${value}`)
        .takeUntil(suggestionStream)
    )
    .map(({ response }) => response)
    .map(list => list.map(value => ({label: value})))

  return suggestionStream
}

class Autocomplete extends Component {
  constructor(props) {
    super(props)

    const { url } = this.props;

    this.state = {
      suggestions: []
    }

    this.suggestionStream = createSuggestionStream$(url);

    this.suggestionStreamSubscription = this.suggestionStream
      .subscribe(result => {
        this.setState({ suggestions: result })
      });

    this.handleInputValueChange = this.handleInputValueChange.bind(this);
  }

  handleInputValueChange({ inputValue }) {
    this.suggestionStream.next(inputValue)
  }

  render() {
    const { classes, theme, placeholder } = this.props;
    return (
      <Downshift
        onStateChange={this.handleInputValueChange}
        onSelect={this.props.handleSelection}
        render={({
          getInputProps,
          getItemProps,
          isOpen,
          inputValue,
          selectedItem,
          highlightedIndex,
        }) => (
          <div className={classes.container}>
            <InputBox 
              inputProps={getInputProps({
                classes,
                placeholder: placeholder,
                id: 'integration-downshift',
              })}
            />
            {isOpen
              ? <SuggestionsContainer
                  children={
                    this.state.suggestions.map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        theme,
                        itemProps: getItemProps({ item: suggestion.label }),
                        highlightedIndex,
                        selectedItem,
                      })
                    )
                  }
                />
              : null}
          </div>
        )}
      />
    );  
  }
}

Autocomplete.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleSelection: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Autocomplete);




