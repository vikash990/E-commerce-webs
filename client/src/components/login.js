import React from 'react';
import styled from 'styled-components';
import { register } from './userfunction';
import { login } from './userfunction'

const ContentWrapper = styled('div')`
    min-height: 70vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;


const LabelWrapper=styled('label')`

        color: black;
        box-sizing: content-box;
        text-align: left;
        font-size: 20px;
        font-color: blue;
        font-weight: 600;
`

const ButtonWrapper=styled('button')`
    margin-top: 10px;
    margin-right: 25px;
    height: 35px;
    font-weight: 600;
    weidth: 250px;
    color: blue;
    border-radius: 8px;


`;

const LoginWrapper=styled('div')`
    
      display: flex;
      flex-direction: column;
      align-items: center;
      width:50vh;
      height:65vh;
      border-style: solid;
      border-width: 3px;
      border-radius: 25px;
      padding-top: 12px;
      padding-right: 40px;
      padding-bottom: 50px;
      padding-left: 80px;
      margin-top: 10vh;
      margin-bottom: 100px;
     
      @media(max-width: 768px) {
        margin: 0px;
        margin-top:25px;
        margin-left:8px;
    }

`
const SignWrapper=styled('div')`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 150;
     
      width:50vh;
      height:85vh;
      border-style: solid;
      border-width: 3px;
      border-radius: 25px
      margin-top: 10vh;
      margin-bottom: 100px;
      margin-right: 150px;
      
      padding-top: 12px;
      padding-right: 40px;
      padding-bottom: 50px;
      padding-left: 80px;

      @media(max-width: 768px) {
      
        margin: 20px 15px;
    }
`
 const TextWrapper =styled('div')`
    
      display: flex;
      flex-direction: row;
      justify-content:space-around;
       width: 220px;
       margin-top:20px;

  `
 const FormWrapper =styled('form')`
    padding-top:30px;

`


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state=
        {
        first_name:'',
         number:'',
         email:'',
         password:'',
         isToggle:false
        
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleChangel=this.handleChangel.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleToggle=this.handleToggle.bind(this);
        this.handleSubmitl=this.handleSubmitl.bind(this);
       

    }
        
    handleChange(event) {
            this.setState({ [ event.target.name]:event.target.value,})
             }
        
        handleSubmit(event) {
            event.preventDefault();
            const newUser = {
                first_name: this.state.first_name,
                 number:this.state.number,
                email: this.state.email,
                password: this.state.password
              }
            console.log(this.state.number);
              register(newUser).then(res => {
                  if(!res){
                alert("You have created your account");
                this.handleToggle()}
              })
            
        }
        handleChangel(event) {
            this.setState({ [ event.target.name]:event.target.value,})
             }
     
        handleSubmitl(e) {
            e.preventDefault()

            const user = {
              email: this.state.email,
              password: this.state.password
            }
            
        
            login(user).then(res => {
              if (res) {
             this.props.history.push(`/profile`)
              }
              else {
                alert("Incorrect Password");
              }
            })
     }
       
     handleToggle() {
        this.setState({
                isToggle:!this.state.isToggle
             })
        }
       
    render(){
        return(
           <ContentWrapper>
                { !this.state.isToggle ? 
                <LoginWrapper>
                  <h5>LOGIN</h5>
                    <FormWrapper onSubmit={this.handleSubmitl}>
                      <LabelWrapper>
                           Email:<input type="email" name="email" value={this.state.value} onChange={this.handleChangel} required/>
                      </LabelWrapper>
                      <LabelWrapper>
                            Password:<input type="password"  name="password" value={this.state.value} onChange={this.handleChangel} required/>
                      </LabelWrapper>
                      <ButtonWrapper> LOGIN </ButtonWrapper>
                    </FormWrapper>
                    <TextWrapper>
                      <p>Not a member?</p>
                      <ButtonWrapper onClick={this.handleToggle}>SiGN UP</ButtonWrapper>
                    </TextWrapper>
                </LoginWrapper>
               :
               <SignWrapper>
                 <h5>Sign Up</h5>
                 <form onSubmit={this.handleSubmit}>
                   
                        <LabelWrapper>
                         
                               Name:<input type="text"  name="first_name" value={this.state.value} onChange={this.handleChange} required/>
                        </LabelWrapper>
                        <LabelWrapper>
                               Number:<input type="number" name="number" value={this.state.value} onChange={this.handleChange} required/>
                        </LabelWrapper>
                        <LabelWrapper>
                               Email:<input type="email" name="email" value={this.state.value} onChange={this.handleChange} required/>
                        </LabelWrapper>
                        <LabelWrapper>
                                Password:<input type="password" name="password" value={this.state.value} onChange={this.handleChange}  required/>
                        </LabelWrapper>
                        <ButtonWrapper >SIGN UP</ButtonWrapper>
                    </form>
                
                    <TextWrapper>
                      <p>Already Have an account?</p>
                      <ButtonWrapper onClick={this.handleToggle}>LogIn</ButtonWrapper>
                    </TextWrapper>
                  </SignWrapper>
                } 
            </ContentWrapper>
        );

    }

}
export default Login;