import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './../assets/mainLogo.png';

function SignUp() {
  return (
    <div className="signup">
      <main class="login-body" data-vide-bg="assets/img/login-bg.mp4">
        <form class="form-default" action="login-bg.mp4" method="POST">
          <div class="login-form">
            <div class="logo-login">
              <Link to="/"><img src={Logo} alt="" /></Link>
            </div>
            <h2>Registration Here</h2>

            <div class="form-input">
              <label for="name">First name</label>
              <input  type="text" name="first-name" placeholder="First Name" />
            </div>
            <div class="form-input">
              <label for="name">Last name</label>
              <input type="text" name="last-name" placeholder="Last Name" />
            </div>
            <div class="form-input">
              <label for="name">Mobile Number</label>
              <input type="text" name="mobile-number" placeholder="Mobile Number" />
            </div>
            <div class="form-input">
              <label for="name">Email Address</label>
              <input type="text" name="email" placeholder="Email Address" />
            </div>
            <div class="form-input pt-30">
              <input type="submit" name="submit" value="Registration" />
            </div>
            <Link to="/login" class="registration">login</Link>
          </div>
        </form>
      </main>
    </div>
  )
}

export default SignUp;