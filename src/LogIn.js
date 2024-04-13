import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import './bootstrap.css';
import './LogIn.css';



function LogIn() {
  return (
        <div>
            <Header />
            <div className='login-container'>
            <h1 className='text-center'>Login</h1>
            <form action="">
                <table>
                    <tr>
                   <td> <label htmlFor="Email"className='label' >Email  </label></td>
                    <td><input type="text" id="Email" name="Email" className='form-control' /></td>
                    </tr>
                 <br></br>

                <tr>
                    <td><label className='label' htmlFor="Password">Password  </label></td>
                   <td> <input type="Password" id="Password" name="Password" className='form-control' /></td>
                </tr>
                <br></br>
                <tr className='text-center'>
                   <td className='text-center'></td>
                   
                    <td className='text-center'> <button className='btn btn-success' type="submit">Login</button> <button className='btn btn-danger' type="Reset">Reset</button></td> 

                    </tr>
                </table>

            </form>
            </div>
        </div>
    );
}

export default LogIn;