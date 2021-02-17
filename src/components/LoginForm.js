import React, { useState } from 'react'

function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", passord: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
            <form onSubmit={submitHandler}> 
                <div className="form-inner">
                    <h2>Logg inn</h2>
                    {(error != "" )? ( <div classname="error">{error}</div> ) : ""}
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passord">Passord: </label>
                        <input type="passord" name="passord" id="passord" onChange={e => setDetails({...details, passord: e.target.value})} value={details.passord} />
                    </div>
                    <input type="submit" value="Loggin"/>
                </div>
            </form>
    )
}

export default LoginForm
