import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    name: '',
    age: null,
    email: ''
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  postData = (e) => {
    e.preventDefault();

    axiosWithAuth()
      .post('/api/friends', this.state)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => console.log('No data returned', err));
  }

  render() {
    return (
      <div>
        <h2>Add Friends</h2>
        <form onSubmit={this.postData}>
          <input 
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default FriendsList;
