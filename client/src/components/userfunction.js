import axios from 'axios'

export const register=newUser=>{
    return axios.post('routes/register',{
        first_name:newUser.first_name,
        number:newUser.number,
        email:newUser.email,
        password:newUser.password
    }).then(response=>{
        console.log(response.data);
        const notNew=response.data["state"];
        if(notNew){
            alert("user exist please try again");
           } 
        return notNew;
        
    })
}

export const login = user =>{
     return axios.post('routes/login',{
        email:user.email,
        password:user.password
    })
      .then(response => {
        localStorage.setItem('usertoken', response.data)
        localStorage.setItem('value', 'true')
           return response.data;
      })
    .catch(error => console.log(error)) 

}
