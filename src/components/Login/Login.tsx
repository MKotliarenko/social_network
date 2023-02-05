import React from 'react';
import {Form, Field} from 'react-final-form'
import {connect} from "react-redux";
import {LoginDataType, postLoginThunkCreator} from "../../Redux/auth-reducer";
import {Navigate, useNavigate} from "react-router-dom";
import {RootStateTypeForConnect} from "../../Redux/redux-store";


export const LoginForm = (props: LoginPropsType) => {
    return (
        <Form
            initialValues={{
                login: "",
                password: "",
                rememberMe: false
            }}
            onSubmit={values => {
                props.setLogin({
                    email: values.email,
                    password: values.password,
                    rememberMe: values.rememberMe
                })
            }}
            // validate={values => {}}

        >
            {({handleSubmit, pristine, form, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name={'email'} placeholder={'email'} component={'input'}/>
                    </div>
                    <div>
                        <Field type="password" name={'password'} placeholder={'password'} component={'input'}/>
                    </div>
                    <div>
                        <Field name={'rememberMe'} type={"checkbox"} component={'input'}/>remember me
                    </div>
                    <div>
                        <button type="submit" disabled={pristine || submitting} onClick={() => {
                            form.submit();
                            form.reset();
                        }}>Sing in
                        </button>
                    </div>
                </form>
            )}
        </Form>
    )
};

type LoginPropsType = {
    setLogin: (loginData: LoginDataType) => void,
    isAuth: boolean,
    id: number | null
}

export const Login = (props: LoginPropsType) => {
    const navigate = useNavigate()

    if (props.isAuth) {
        navigate('/profile/' + props.id)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginForm {...props} />
        </div>
    );
};
const mapStateToProps = (state: RootStateTypeForConnect) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id
    }
}

export const LoginContainer = connect(mapStateToProps, {
    setLogin: postLoginThunkCreator
})(Login)

