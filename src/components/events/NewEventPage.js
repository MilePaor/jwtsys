import React, { Component } from 'react';
import EventForm from './EventForm';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventActions';
import PropTypes from 'prop-types';


class NewEventPage extends Component {
  render () {
    return (
      <div>
        <EventForm createEvent={this.props.createEvent}/>
      </div>
    )
  }
}

NewEventPage.propTypes = {
  createEvent: PropTypes.func.isRequired
}

export default connect(null, { createEvent })(NewEventPage); 