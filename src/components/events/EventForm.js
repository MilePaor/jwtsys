import React from 'react';

class EventForm extends React.Component {
  state = {
    title: '',
    errors: {},
    isLoading: false
  };

  onChange =(e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create New Game Event</h1>
        <div className="form-group">
          <input 
            type="text" 
            name="title" 
            value={title}
            className="form-control" 
            onChange={this.onChange} 
            />
        </div>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    );
  }
}

export default EventForm;