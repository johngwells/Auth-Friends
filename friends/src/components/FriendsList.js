import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class FriendsList extends React.Component {
  state = {
    name: '',
    age: '',
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
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input 
            type='text'
            name='age'
            placeholder='Age'
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input 
            type='text'
            name='email'
            placeholder='Email'
            value={this.state.email}
            onChange={this.handleChange}
          />
          <button type='submit'>Submit friend</button>
        </form>
        {this.state.friends.map(friend => (
          <div key={friend.id} className='friend-container'>
            <p>{friend.name}</p>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default FriendsList;
