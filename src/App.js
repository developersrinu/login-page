import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Axios } from 'axios';

function App() {

      let [userName, setUserName] = useState('')
      let [password, setPassword] = useState('')
      let [error, setError] = useState('Forget your Password')

      function handleClick(e) {
            e.preventDefault();

      



      }

      return (
            <div className='container'>
                  <form onSubmit={handleClick}>
                        <p className='p1'>Welcome Back<span className='s1' >👋</span></p>

                        <h2>Sign in to your account</h2>
                        <label htmlFor='input1' >Your Name</label>
                        <input
                              type='text'
                              id='input1'
                              onChange={(e) => setUserName(e.target.value)}
                              value={userName}
                        />


                        <label htmlFor='input2'>Password</label>
                        <input type='password' id='input2' onChange={(e) => setPassword(e.target.value) } value={password} />

                        <input type='submit' placeholder='CONTINUE' id='btn' />
                        <p id='pp'>{error}</p>
                  </form>

                  <p id='pr'>Don't have an account?<span>Sign Up</span></p>




            </div>
      );
}

export default App;




