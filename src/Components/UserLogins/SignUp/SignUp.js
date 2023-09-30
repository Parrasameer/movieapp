import './SignUp.css'

function SignUp() {
    return (
        <div>

            <div className="signUpContainer">
                <div className="signUp">
                    <div className="SignUpHeader" >  <h3 className="wel"> WELCOME</h3>
                        <h3 className="wel_text"> TO BOLETO</h3></div>
                    <div className="SignUpInputs">
                        <div className="mb-3 form-control-group">
                            <label className="form-label">
                                EMAIL
                            </label>
                            <input
                                placeholder="Enter your Email"
                                type="email" name="email" className="form-control">

                            </input> </div>
                        <div className="mb-3 form-control-group">
                            <label className="form-label">
                                PASSWORD
                            </label>
                            <input
                                placeholder="Password"
                                type="password" name="password" className="form-control">

                            </input> </div>
                        <div className="mb-3 form-control-group">
                            <label className="form-label">
                                CONFIRM PASSWORD
                            </label>
                            <input
                                placeholder="Password"
                                type="password" name="password" className="form-control">

                            </input> </div>
                        <p> <input type="radio" /> I Agree To The <a href="#"> Terms, Privacy Policy</a> and <a href="#">Fees</a></p>
                        <div className="btn-wrapper">
                            <button className="btn btn-primary mb-3">
                                Sign Up
                            </button>

                        </div>
                        <div className="line" > <hr /> <p> OR</p> <hr /> </div>
                        <span className="loginText" htmlFor="">
                            Already have an account?
                            <a className="loginLink" href="/signin">
                                Login  </a>
                        </span>
                        <div className="imagesLink">
                            <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                            </svg></a>
                            <a href="#" className="twitter" > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                            </svg></a>
                            <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp