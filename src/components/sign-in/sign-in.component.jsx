import React from 'react';
import './sign-in.styles.scss';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-bottom/custom-button.component';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }
    
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.error(error);
        }
        
    }

    handleSignInWithGoogle = async () => {
        try {
            await signInWithGoogle();
        } catch (error) {
            console.log(error);
        }
    }
    
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password.</span> 
                <form onSubmit={this.handleSubmit}>
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
                    <div className="buttons">
                        <CustomButton type='submit'>
                            Sign In
                        </CustomButton>
                        <CustomButton isGoogleSignIn type='button' onClick={this.handleSignInWithGoogle}>
                            Sign In With Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
