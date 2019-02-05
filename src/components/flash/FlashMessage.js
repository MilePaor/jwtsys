import React from 'react';
import PropTypes from 'prop-types';

class FlashMessage extends React.Component {

  componentDidMount(){
    setTimeout(() => {
      this.props.deleteFlashMessage(this.props.message.id);    
    }, 5000);
  }
  
  onClick = () => {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render(){
    const { type, text } = this.props.message;
    let alertType = type === 'success' ? 'alert-success' : 'alert-danger';

    return (
      <div className={['alert', alertType].join(' ')}>
        <button className="close" onClick={this.onClick}><span>&times;</span></button>
        {text}
      </div>
    )
  } 
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessage;