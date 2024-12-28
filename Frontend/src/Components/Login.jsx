import React from 'react';
import styles from './Login.module.css'; // Importing CSS Module

export default function Login({ showLogin, setShowLogin }) {

  const container = React.useRef(null);

  const handleSignIn = () => {
    container.current.classList.remove(styles['right-panel-active']);

  }


  const handleSignUp = () => {
    container.current.classList.add(styles['right-panel-active']);

  }

  return (
    showLogin && (
      <div className={`${styles['login-container']} fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-50`}>
        <div className={styles.container} id="container" ref={container}>
          <div className={`${styles['form-container']} ${styles['sign-up-container']}`}>
            <form action="#">
              <h1>Create Account</h1>
              <div className={styles['social-container']}>
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form> 
          </div>

          <div className={`${styles['form-container']} ${styles['sign-in-container']}`}>
            <form action="#">
              <h1>Sign in</h1>
              <div className={styles['social-container']}>
                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>

          <div className={styles['overlay-container']}>
            <div className={styles.overlay}>
              <div className={`${styles['overlay-panel']} ${styles['overlay-left']}`}>
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className={`${styles.ghost}`} id="signIn" onClick={handleSignIn}>Sign In</button>
              </div>
              <div className={`${styles['overlay-panel']} ${styles['overlay-right']}`}>
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start your journey with us</p>
                <button className={`${styles.ghost}`} id="signUp" onClick={handleSignUp}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
