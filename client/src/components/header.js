import React from 'react';
import {NavLink,withRouter } from 'react-router-dom';
import styled from "styled-components";
import PropTypes from 'prop-types';

import logo from './ecommerce-logo.jpg';



const NavWrapper = styled('nav')`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        background: rgba(60, 60, 60,0.6);
        width:100%;
            

    `;

const LogoWrapper = styled('img')`
        height: 47px;
        margin: 10px
        border-radius: 10px;
`;



const ButtonWrapper=styled('button')`
    
    height:30px;
    width:50px;
    border-radius:5px;
    color:black;
    margin: 10px 10px
       
`


class Header extends React.Component{

    constructor(props) {
        super(props)
       this.state={
        token:null
    }
    }

    static propTypes = {
        token: PropTypes.shape({})
    }

    static defaultProps = {
        token: localStorage.usertoken,
    }

    componentDidUpdate(prevProps) {
        if(this.props.token !== prevProps.token) {
            this.setState({ token:localStorage.usertoken })
        }
    }
    

    

    render(){
        const token = localStorage.usertoken;
       
        return(
            <NavWrapper>
             
                     <NavLink to ="/" exact ><a href="/"><LogoWrapper src={logo}/></a></NavLink>
                     <h1>E-commerce Website</h1>
                       {token ?
                        <div>
                            <ButtonWrapper onClick={() => { this.props.history.push('/logout') }}> Logout</ButtonWrapper>
                            <ButtonWrapper  onClick={() => { this.props.history.push('/profile') }}>Profile</ButtonWrapper>
                            
                        </div>
                       : <div>
                       <ButtonWrapper  onClick={() => { this.props.history.push('/login') }}> Login</ButtonWrapper>
                       
                       </div>
                       }
                     
                
            
            </NavWrapper>
            
           
        );

    }

}
export default withRouter(Header);