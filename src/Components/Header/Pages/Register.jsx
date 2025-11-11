import { Link, useNavigate } from 'react-router';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import { Eye, EyeOff } from 'lucide-react';


const Register = () => {
    const { createUser, setUser,updateUser } = useContext(AuthContext);
    const navigate = useNavigate()
    const [showPassword,setShowPassword]=useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // ✅ PASSWORD VALIDATION
        const upperCaseRegex = /[A-Z]/;
        const lowerCaseRegex = /[a-z]/;

        if (!upperCaseRegex.test(password)) {
            alert("Password must contain at least ONE uppercase letter!");
            return;
        }
        if (!lowerCaseRegex.test(password)) {
            alert("Password must contain at least ONE lowercase letter!");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }

        // ✅ If validation passed
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({diaplayName:name,photoURL:photo})
                .then(()=>{
                 setUser({...user,diaplayName:name,photoURL:photo});
                alert("Registration successful 🎉");
                navigate('/')
                })
                .catch((error)=>{
                    console.log(error)
                    setUser(user)
                })
            })
            .catch((error) => {
                console.log(error.code, error.message);
                alert(error.message);
            });
    };
const handlepassword=(e)=>{
       e.preventDefault()
       setShowPassword(!showPassword)   
}
    return (
        <div className='flex justify-center min-h-screen'>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <h1 className='text-2xl'>Register your account</h1>
                            <fieldset className="fieldset">

                                <label className="label">Your Name</label>
                                <input type="text" name='name' className="input" placeholder="Your name" required />

                                <label className="label">Photo URL</label>
                                <input type="text" name='photo' className="input"  placeholder="Photo URL" required />

                                <label className="label">Email</label>
                                <input type="email" name='email' className="input"   placeholder="Email" required />
                                <div className='relative'>
                                    
                                <label className="label">Password</label>
                                <input type={showPassword ? 'text': 'password'} name='password' className="input"  placeholder="Password" required />
                                <button onClick={handlepassword} className='btn btn-xs absolute top-7 right-5'>{showPassword ? <EyeOff size={18}  />:<Eye size={18}  />}
                                    </button>
                                </div>


                                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            </fieldset>

                            <p>Have an account? 
                                <Link className='text-red-400' to={'/login'}> Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
