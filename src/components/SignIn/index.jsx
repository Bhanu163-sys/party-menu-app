import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import { Navigate } from 'react';
import {useAuth} from '../../context/AuthContext'
import {GiKnifeFork} from 'react-icons/gi'

import './index.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showSubmitError, setShowSubmitError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {login} = useAuth()

  const onSubmitSuccess = data => {
    login(data.token, data.user)
    navigate('/', { replace: true });
  }

  const onSubmitFailure = errorMessage => {
    setShowSubmitError(true);
    setError(errorMessage);
  }

  const onChangeMail = event => {
    setEmail(event.target.value);
  }

  const onChangePassword = event => {
    setPassword(event.target.value);
  }

  const onSubmitForm = async event => {
    event.preventDefault();
    setLoading(true);

    const userDetails = {email, password};

    const url = 'https://serverless-api-teal.vercel.app/api/auth/signin'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(userDetails),
    }

    try{
        const response = await fetch(url, options);
        const data = await response.json();

        if (response.ok === true) {
            onSubmitSuccess(data.data);
        }

        else{
            onSubmitFailure(data.message);
        }
    }
    catch(error){
        showSubmitError(true);
        setError('An error occurred. Please try again later.');
    }
    finally{
        setLoading(false);
    }
    
  }
  
  const token = localStorage.getItem('party_menu_token');
  if (token !== null) {
    return <Navigate to="/" replace />;
  }
  
  return(
    <div className='sign-in-main-con'>
        <div className='sign-in-card'>
            <div className='sign-in-header'>
                <GiKnifeFork className="logo-icon" />
                <h1 className='sign-in-head'>Party Menu</h1>
                <p className='sign-in-para'>Sign in to explore our delicious menu</p>
            </div>
            <div className='sign-in-error-con'>
                {showSubmitError && <p className='sign-in-error-message'>{error}</p>}
            </div>
            <form onSubmit={onSubmitForm} className='sign-in-form'>
                <div className='email-input'>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        placeholder='admin@example.com'
                        onChange={onChangeMail}
                    />
                </div>
                <div className='password-input'>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        placeholder='Enter your password'
                        onChange={onChangePassword}
                    />
                </div>
                <button type="submit" className='sign-in-btn' disabled={loading}>
                    {loading ? 'Signing in...' : 'Sign in'}
                </button>
            </form>
        </div>
    </div>
  )

}

export default SignIn;