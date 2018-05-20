import React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from 'react-autocomplete';


export class TextInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputOptions: [],
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    this.setState({ value: e.target.value })
    this.props.onChange(this.props.name, e.target.value);
  }

  componentWillMount() {
    /// Create the options from the props
    var array1 = [];
    (this.props.prevSearchTerms).forEach(function(e) {
      array1.push({ id: e, label: e })
    });
    this.setState( { inputOptions: array1 });
  }

  render() {
    if(this.props.isActive){
      return (
        <div>
          <div>
          {this.props.label}
          </div>
          <Autocomplete
          getItemValue={(item) => item.label}
          items={this.state.inputOptions}
          renderItem={(item, isHighlighted) =>
            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
              {item.label}
            </div>
          }
          value={this.state.value}
          onChange={this.handleChange}
          onSelect={(val) => this.setState({ value: val })}
          />
        </div>
      );
    } else{
      return(null);
    }

  }
}

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  prevSearchTerms: PropTypes.array.isRequired
};

export class NumberListInput extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e){
    this.props.onChange(e);
  }

  render() {
    return (
      <div>
        <label>
          {this.props.label}
          <input type="number" min="1" name={this.props.name} onChange = {this.handleChange} />
        </label>
      </div>
    );
  }
}

NumberListInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};