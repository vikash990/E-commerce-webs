import React from 'react';
import jwt_decode from 'jwt-decode';
import styled from "styled-components";

const ProfileWrapper = styled('div')`

      min-height:75vh;
        
`;

const TextWrapper = styled('div')`

        display: flex;
        flex-direction: column;
        align-items: center;
        width:50vh;
        height:65vh;
        
`;



class Profile extends React.Component {
   
   constructor() {
     super()
     this.state={
         first_name:'',
         email:''
     }

   }

componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
        first_name:decoded.first_name,
        email:decoded.email
    })

}

render() {
    return (
        <ProfileWrapper>
          <TextWrapper>
            <h4>Hiii {this.state.first_name}</h4>
             <p> Welcome {this.state.first_name} we have number of offer for you.</p>
             <p>Please go to home section for the Shopping</p>            
            <p>your email id is {this.state.email}</p>
            <h4>Thank you {this.state.first_name}</h4>
          </TextWrapper>

        </ProfileWrapper>
    )
}

}

export default Profile