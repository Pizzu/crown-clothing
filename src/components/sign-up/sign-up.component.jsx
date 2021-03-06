import React from 'react';
import './sign-up.styles.scss'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-bottom/custom-button.component';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) { 
            alert("Passwords don't match"); 
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });
            this.setState({displayName: '', email: '', password: '', confirmPassword: ''});
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        return (
            <div className='sign-up'>
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password.</span> 
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName' 
                        type="text" 
                        label="Display Name"
                        value={this.state.displayName}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='email' 
                        type="email" 
                        label="Email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='password' 
                        type="password" 
                        label="Password" 
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        required       
                    />
                    <FormInput 
                        name='confirmPassword' 
                        type="password" 
                        label="Confirm Password" 
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange} 
                        required       
                    />

                    <CustomButton type='submit'>
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;

