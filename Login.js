import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  CardHeader from 'react-bootstrap/esm/CardHeader';

 
const Test = () => {
  const [data,setdata]=useState({
    email:' ',
    pass:' '
  });


  const [status,setstatus]=useState('');


  const change = (e)=>{
    setdata({...data,[e.target.name]:e.target.value});
  }


  const sub = (e)=>{
    
    e.preventDefault();
    if(data.pass.length <8)
    {
      alert('Password should have Minimum 8 Characters')
    
    }
    console.log(data);
    fetch("http://localhost:3000/logins", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });

  }
  return (
    <div>
    <div class="cotainer">
        <div class="na text-white bg-primary">
            <h1><center>Login</center></h1>
        </div><hr/><br/><br/><br/>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="">
                    
                    <div class="card-body"></div>
   
                    
                    
                        <form onSubmit={sub}>
                            <div class="form-group row">
                             
                                <div class="col-md-6">
                                    <input type="email" id="email" class="form-control" name="email" placeholder="Enter email" onChange={change} required />
                                    <br/>
                                    
                                </div>
                            </div>

                            <div class="form-group row">
                           
                                <div class="col-md-6">
                                    <input type="password" id="password" class="form-control" name="pass" onChange={change} placeholder="Enter password" required />
                                    <br/>
                                   
                                </div>
                            </div>

                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button>
                                New User/admin?<a href="login.html">Sign Up</a>
                            </div>
                    
                    </form>
                </div>
                </div>
                </div>
                </div>
    



      
    </div>
  )
}

export default Test
