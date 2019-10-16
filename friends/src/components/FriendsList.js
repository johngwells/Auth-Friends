import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    name: '',
    age: null,
    email: '',
    friends: []
  }

  componentDidMount() {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        this.setState({ friends: res.data })
        console.log(res.data)
      })
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
        this.setState({ friends: res.data })
      })
      .catch(err => console.log('No data returned', err));
  }

  render() {
    console.log(this.state)
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
        {this.state.friends.map(friend => (
          <p>{friend.name}</p>
        ))}
      </div>
    );
  }
}

export default FriendsList;
