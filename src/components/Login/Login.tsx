import React from 'react';

export const LoginForm = () =>{
    return (
        <form>
            <div>
                <input placeholder={'login'}/>
            </div>
            <div>
                <input placeholder={'password'}/>
            </div>
            <div>
                <input type={"checkbox"}/>remember me
            </div>
            <div>
                <button>Sing in</button>
            </div>
        </form>
    )
};


export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm />
        </div>
    );
};

