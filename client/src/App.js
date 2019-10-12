import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import './index.css'


const UserList = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  align-items: space-between;
  justify-content: center;
`

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playersData: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => this.setState({
        playersData: res.data
      }))
        .catch(err => console.error('Request failed', err))
    }

  render() {
    return (
      <>    
        <UserList>
          <div className='App'>
            <h1>Soccer players</h1>
          </div>
        </UserList>
       </>
    )
  }
}

