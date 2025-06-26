import React, {useState} from 'react';
import './Login.css'



function Login() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();


        const result = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, password})
        })

        const data = await result.json();

        if (result.ok) {
            alert('Login was completed successfully!');
        } else {
            alert(data.message);
        }
    }



    return (
        <div className="d-flex justify-content-center align-items-center vh-100"
             style={{background: "linear-gradient(to bottom , #630105, #ffffff)", margin:0, paddingTop: "80px"}}>
            <form className="p-4 border rounded bg-light login-container" onSubmit={handleLogin} >
                <h1>Login</h1>
                <hr/>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input type="name" className="form-control" id="exampleInputName" aria-describedby="nameHelp"
                           value={name}
                           onChange={e => setName(e.target.value)}/>
                    <div id="emailName" className="form-text">Please enter your name</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                           value={password}
                           onChange={e => setPassword(e.target.value)}/>
                    <div id="emailName" className="form-text">Please enter your password</div>
                </div>
                <button type="submit" className="btn-login">Submit</button>
            </form>
        </div>


    );
}

export default Login;