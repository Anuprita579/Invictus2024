import React, { useState, useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { app } from './Firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";
import '../style.css';
import ProfileForm1 from './ProfileForm1';


export default function Registration() {



    const auth = getAuth(app);

    const [username, setUsername] = useState('')
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const [loginstate, setloginstate] = useState(true);
    const [isLogin, setIsLogin] = useState(false);

    const navigate = useNavigate();


    // useEffect(() => {
    //     // Enable the sign-up button only if the checkbox is checked and passwords match
    //     const agreeCheck = document.getElementById('agreeCheck');
    //     const signupBtn = document.querySelector('.signup-btn');

    //     agreeCheck.addEventListener('change', function () {
    //         const passwordsMatch = checkPasswordsMatch();
    //         signupBtn.disabled = !agreeCheck.checked || !passwordsMatch;
    //     });

    //     function checkPasswordsMatch() {
    //         const password = document.getElementsByName('password')[0].value;
    //         const confirmPassword = document.getElementsByName('confirmPassword')[0].value;
    //         return password === confirmPassword;
    //     }
    // }, []);

    function signup() {
        console.log('click');
        const Username = document.getElementById('username').value;
        setUsername(Username);
    
        const Email = document.getElementById('email').value;
        setemail(Email);
        const Password = document.getElementById('password').value;
        setPassword(Password);
    
        // Create user with email and password
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                alert('success')
                
               
                // setloginstate(true);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error('Signup error:', errorCode, errorMessage);
                // ...
            });
    }
    





    function login() {
        // const username = document.getElementById('username').value;
        const Email = document.getElementById('email').value;
        setemail(Email)

        const Password = document.getElementById('password').value;
        setPassword(Password)



        // // Create user with email and password
        const auth = getAuth();
        signInWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('Login succesfull');
                navigate("/dashboard");
                

                console.log(username)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Login fail')
            });


    }

    return (

        <>
            {!loginstate && <div className="container">
                <div className="left-container">
                    <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1705536000&semt=ais" alt="loginimg" />
                    <div className="text-boxes">
                        <h1>SkillSpire</h1>
                        <h5 style={{ marginTop: '0' }}>Navigating Internship Horizons, Right at Your Fingertips</h5>
                    </div>
                </div>
                <div className="right-container">
                    <h1>Sign Up</h1>
                    <form className="signup-form">
                        <div className="inputBox">
                            <input id="username" type="text" name="name" required="required" />
                            <label htmlFor="username">Name</label>
                        </div>
                        <div className="inputBox">
                            <input id="email" type="email" name="email" required="required" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="inputBox">
                            <input id="password" type="password" name="password" required="required" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="inputBox">
                            <input type="password" name="confirmPassword" required="required" />
                            <label>Confirm Password</label>
                        </div>
                        <div className="signup-agree">
                            <input type="checkbox" className="agree-checkbox" id="agreeCheck" required />
                            <label htmlFor="agreeCheck">I agree to terms and policy</label>
                        </div>
                        <div className="inputBox">

                            <button className="signup-btn" onClick={signup}>Sign Up</button>
                        </div>
                    </form>
                    <div className="signup-options">
                        <p className="register-now">Already a member?
                            <button onClick={() => setloginstate(true)} className='login-btn'>
                                Login Now
                            </button>

                        </p>
                    </div>
                </div>
            </div>
            }

            {/* // <div>
            //     <h2>Signup Form</h2>

            //     <form id="signupForm">
            //         <label htmlFor="username">Username:</label>
            //         <input type="text" id="username" required />

            //         <label htmlFor="email">Email:</label>
            //         <input type="email" id="email" required />

            //         <label htmlFor="password">Password:</label>
            //         <input type="password" id="password" required />

            //         <button type="button" id="signupButton" onClick={signup}>Signup</button>
            //          <button><a href="login.html">go to login</a></button>
            // </form> 


            // </div >} */}

            {
                loginstate &&

                < div className="container">
                    <div className="left-container">
                        <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg" alt="img" />
                        <div className="text-boxes">
                            <h1>SkillSpire</h1>
                            <h5>Navigating Internship Horizons, Right at Your Fingertips</h5>
                        </div>
                    </div>
                    <div className="right-container">
                        <h1>Login</h1>
                        <form id="login-form" action="your_server_side_script.php" method="post" className="login-form">
                            <div className="inputBox">
                                <input type="email" id="email" name="email" required />
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="inputBox">
                                <input type="password" id="password" name="password" required />
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="inputBox">
                                <button className="login-btn" type="button" value={isLogin} onClick={login}>Login</button>
                            </div>
                        </form>
                        <div className="login-options">
                       
                            <p className="login-otp" style={{ color: "black" }}>Login with <Link to="/otp">OTP</Link> </p>
                            <p className="register-now" style={{ color: "black" }}>Not a member?<span> <button  onClick={() => setloginstate(false)} className='login-btn'>RegisterNow
                                </button></span></p>
                        </div>
                    </div>
                </div >


                // < div className="login-container">
                //     <h2>Login</h2>
                //     <form id="login-form" action="your_server_side_script.php" method="post">
                //         <label htmlFor="email">Email:</label>
                //         <input type="email" id="email" name="email" required />

                //         <label htmlFor="password">Password:</label>
                //         <input type="password" id="password" name="password" required />
                //         <button type="button" onClick={login}>Login</button>
                //     </form>
                // </div>
            }
        </>

    );
}