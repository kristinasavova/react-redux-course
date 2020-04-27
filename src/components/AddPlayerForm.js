import React, { Component, PropTypes } from 'react'; 

export default class AddPlayerForm extends Component {
    
    static propTypes = {
        onAdd: PropTypes.func.isRequired
    };
  
    state = {
        name: ''
    }; 
  
    onNameChange = event => {
        const name = event.target.value;
        this.setState ({ name });
    };
  
    onSubmit = event => {
        if (event) { 
            event.preventDefault ();
            this.props.onAdd (this.state.name);
            this.setState ({ name: '' });
        }
    };
  
    render () {
        return (
            <div className="add-player-form">
            <form onSubmit={this.onSubmit}>
                <input
                    type="text"
                    value={this.state.name}
                    onChange={this.onNameChange}
                    placeholder="Player Name"
                />
                <input type="submit" value="Add Player" />
            </form>
            </div>
        );
    };
}