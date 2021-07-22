import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import {Container,Row ,Col} from 'react-bootstrap'
import AddUser from './Component/AddUser';
import Users from './Component/Users'
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      users:[
        {
          name:"prince",
          email:"a@gmail.com",
          number:"0348667292",
          address:"CT7647",
          jobrole:"developer",
          salary:"$4000",
          id: 'gvsbhshsh088978'
        },
        {
          name:"Bill",
          email:"ja@gmail.com",
          number:"28883746",
          address:"Ab9739",
          jobrole:"developer",
          salary:"$3998",
          id:'gshjsjsg876668'
        },
        {
          name:"Randy",
          email:"as@gmail.com",
          number:"9273238",
          address:"FGH2273",
          jobrole:"developer",
          salary:"$3223",
          id: 'hhahsgsh099889'
        }
      ]
    }
  }


  handleAddUser = (user) => {
    user.id = Math.random().toString;
    this.setState({ 
      users: [...this.state.users, user ]});
  };

  handleDeleteUser = (id) =>{
    const addedUsers = this.state.users.filter(users => users.id !== id);

    this.setState({users: addedUsers})
  }

  handleEditUser =(id, updateUser) =>{
    this.setState({
      users : this.state.users.map(user=> user.id === id ? updateUser: user)
    })
    }

  render() {

    

    return (
      <>
      <Container fluid>
        <Row>
        <Navbar />
        <Col sm={3}></Col>
        <Col sm={6}>
          <AddUser addUser={this.handleAddUser} />
        </Col>
        <Col sm={3}></Col>
        </Row>
      
          
        <h1 style={{textAlign:`center`,margin:`50px 0px`}}>ADDED EMPLOYEES</h1>
        <div className="User-list">
       <Users usersDater={this.state.users} deleteUser={this.handleDeleteUser} editUser={this.handleEditUser} />
       </div>
        
      
      </Container>
       
      </>
    );
  }
}

export default App;

