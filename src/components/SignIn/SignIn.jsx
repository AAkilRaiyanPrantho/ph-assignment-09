import { Link } from "react-router-dom";


const SignIn = () => {

  const handleSignIn = e =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password);
  }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold"><span className="text-[#66FCF1]">Sign</span> In now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={(handleSignIn)} className="card-body">
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
         <p className="mt-4">Not a member yet? <Link to='/signUp'><span className="text-[#66FCF1]">Join Us</span></Link></p> 
        </div>
        <div className="form-control mt-6">
          <button className="btn outline outline-[#66FCF1] text-[#66FCF1]">Sign In</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;