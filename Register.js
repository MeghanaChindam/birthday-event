import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardHeader from 'react-bootstrap/esm/CardHeader';

const App = () => {
  const [data,setdata]=useState({
        register:'',
        email:'',
        username:'',
        number:'',
        pass:'',
        cpassword:''
  });
  const [status,setstatus]=useState('');

  const change = (e)=>{
    setdata({...data,[e.target.name]:e.target.value});
  }
  const sub = (e)=>{
    var a=1;
    e.preventDefault();
    if(data.username.length==0 )
    {
      alert('Enter your UserName!')
      a=0;
    }
    if(data.number.length!=10)
    {
      alert('Please Enter Correct MobileNumber')
      a=0;
    }
    if(isNaN(data.number))
    {
      alert('Please Enter Correct MobileNumber')
      a=0;
    }
    if(data.pass.length <8)
    {
      alert('Password should have Minimum 8 Characters')
      a=0;
    }
    if(data.pass.length != data.cpassword.length)
    {
        alert("Confirm Password not matching with Password");
        a=0;
    }
    if(a==1)
    {
      console.log(data);
      fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
      });
    }

    
  }
  return (
    <div> 
       <center><div class="card-header text-white bg-primary">Register</div></center><hr/><br/><br/><br/>
  <div class="card-body border-0">
    <form name="my-form"  onSubmit={sub}>
    <div class="form-group row">
    
        <div class="col-md-6">
          
            <input type="text"  list="uadmin"class="form-control"  placeholder="Enter adim/user" name="register" onChange={change} id="admin/user" />
                            <datalist id="uadmin">
                                <option value="user"></option>
                                <option value="admin"></option>
                            </datalist>
        </div>
    </div>

    <div class="form-group row">

        <div class="col-md-6">
            <br/><input type="email" id="email" placeholder="Enter email" class="form-control" name="email" onChange={change} /><br/>
            <span id="mail" class="text-danger"></span>
        </div>
    </div>

    <div class="form-group row">
        
        <div class="col-md-6">
            <input type="text" id="user_name" placeholder="Enter Username"class="form-control" name="username" onChange={change} required  />
            <br /><span id="uname" class="text-danger"></span>
        </div>
    </div>

    <div class="form-group row">
     
        <div class="col-md-6">
            <input type="tel" id="mobilenumber" placeholder="Enter Mobilenumber" name='number' onChange={change} class="form-control"  required  />
            <br/><span id="messages" class="text-danger"></span>
        </div>
       
    </div>

    <div class="form-group row">
    
        <div class="col-md-6">
            <input type="password" id="password"  name='pass' placeholder="Password" onChange={change} class="form-control" />
           <br/> <span id="pword" class="text-danger"></span>
        </div>
    </div>

    <div class="form-group row">

        <div class="col-md-6">
            <input type="password" id="confirmPassword" name='cpassword' onChange={change} placeholder="Confirm Password" class="form-control"  />
          <br/><span id="cpass" class="text-danger"></span>
        </div>
    </div>

    
        <div class="col-md-6 offset-md-4">
            <button type="submit" class="btn btn-primary" name='submit'  id="submitButton"  >
            Submit
            </button>
            <br/>
            
        </div>
        <div class="col-md-4 offset-md-4">
            Already a user? <a href="login1.html">Login</a>
        </div>
    
</form>
<h3>{status}</h3>
</div>
</div>
  )
}

export default App