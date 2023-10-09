import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { useContext } from "react";


const SignUp = () => {

  const authInfo = useContext(AuthContext);

  const{createUser} = authInfo;

  const handleSignUp = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password,name);

    createUser(email, password)
    .then(result =>{
      console.log(result.user)
    })
    .catch(error => {
      console.error(error);
    })

  }



    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold"> <span className="text-[#66FCF1]">Sign </span>Up now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={(handleSignUp)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mx-auto">
         <p className="mt-4">Already a member? <Link to='/signIn'><span className="text-[#66FCF1]">Sign In</span></Link></p> 
        </div>
        <div className="form-control mt-6">
          <button className="btn outline outline-[#66FCF1] text-[#66FCF1]">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div> 
        </div>
    );
};

export default SignUp;