import React from 'react';
import {Form, Field} from 'react-final-form'
import {connect} from "react-redux";
import {LoginDataType, postLoginThunkCreator} from "../../Redux/auth-reducer";
import {Navigate, useNavigate} from "react-router-dom";
import {RootStateTypeForConnect} from "../../Redux/redux-store";
import {ValidationErrors} from "final-form";
import s from './Login.module.css';


export const LoginForm = (props: LoginPropsType) => {
    return (
        <Form
            initialValues={{
                login: "",
                password: "",
                rememberMe: false,
                error: ""
            }}
            onSubmit={values => {
                props.setLogin({
                    email: values.email,
                    password: values.password,
                    rememberMe: values.rememberMe
                })
            }}
            validate={values => {
                const errors: ValidationErrors = {}
                if (!values.email) {
                    errors.email = 'Required'
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address'
                }

                if (!values.password) {
                    errors.password = 'Required'
                } else if (values.password.length < 5) {
                    errors.password = 'Need more symbols'
                }
                return errors
            }}
        >
            {({submitError, handleSubmit, pristine, form, submitting}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name="email">
                            {field => (
                                <div>
                                    <input className={s.inputForm} {...field.input} type="text" placeholder="email"/>
                                    {field.meta.touched && (field.meta.error || field.meta.submitError) && (
                                        <span className={s.error}>{field.meta.error || field.meta.submitError}</span>
                                    )}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name="password">
                            {field => (
                                <div>
                                    <input className={s.inputForm} {...field.input} type="password"
                                           placeholder="password"/>
                                    {field.meta.touched && (field.meta.error || field.meta.submitError) && (
                                        <span className={s.error}>{field.meta.error || field.meta.submitError}</span>
                                    )}
                                </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        <Field name={'rememberMe'} type={"checkbox"} component={'input'}/>remember me
                    </div>
                    <div>
                        <button className={s.but} type="submit" disabled={pristine || submitting} onClick={() => {
                            form.submit();
                            form.reset();
                        }}>
                            Sing in
                        </button>
                    </div>
                    {props.error && <div className={s.errorCommon}>{props.error}</div>}
                </form>
            )}
        </Form>
    )
};

type LoginPropsType = {
    setLogin: (loginData: LoginDataType) => void,
    isAuth: boolean,
    id: number | null
    error: string
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
        id: state.auth.id,
        error: state.auth.error
    }
}

export const LoginContainer = connect(mapStateToProps, {
    setLogin: postLoginThunkCreator
})(Login)

