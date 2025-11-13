import React, { useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../../Context/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../../Firbase/Firbase.init';
import { toast } from 'react-toastify';

const Login = () => {
  const { singIn, singInGoogle } = useContext(AuthContext);
  const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    singIn(email, password)
      .then(result => {
        console.log(result.user);
        navigate(location.state ? location.state : '/');
      })
      .catch(error => {
        console.log(error.code, error.message);
        toast(error.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      return toast("Please enter your email first!");
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Password reset email sent! Check your inbox 📩");
      })
      .catch(error => {
        toast(error.message);
      });
  };

  const handlegoogleSing = () => {
    singInGoogle()
      .then(result => {
        console.log(result.user);
        navigate(location.state ? location.state : '/');
        const newUser={
          name:result.user.displayName,
          email:result.user.email,
          image:result.user.photoURL
        }
        fetch('http://localhost:3000/user',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(newUser)
        })
        .then(res=>res.json())
        .then(data=>console.log('data after save',data)
          
        )
      })
      .catch(error => {
        console.log(error.message);
        toast(error.message);
      });
  };

  return (
    <div className='flex justify-center min-h-screen items-center bg-base-200'>

      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">

          <h1 className='text-3xl font-bold text-center mb-4'>Login</h1>

          <label className="label">Email</label>
          <input
            type="email"
            ref={emailRef}
            name='email'
            className="input input-bordered"
            required
            placeholder="Enter your email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            name='password'
            className="input input-bordered"
            required
            placeholder="Enter your password"
          />

          <div className="text-right mt-1">
            <button
              type="button"
              onClick={handleForgetPassword}
              className="link link-hover text-sm"
            >
              Forgot password?
            </button>
          </div>

          <button type='submit' className="btn btn-neutral mt-4">
            Login
          </button>

          <button
            type="button"
            onClick={handlegoogleSing}
            className="btn btn-neutral mt-2"
          >
            Continue with Google
          </button>

          <p className="text-center mt-4 text-sm">
            Don't have an account?
            <Link className='text-red-500 font-semibold ml-1' to='/register'>
              Register
            </Link>
          </p>

        </form>
      </div>

    </div>
  );
};

export default Login;
