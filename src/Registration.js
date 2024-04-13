import react from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import './Registration.css';
import './bootstrap.css';

const Registration = () => {
    return (
        <div>
          
            <Header />
            <div className='registration-container'>
            <h2>Registration</h2>
        <form>
            <table>
            <tr>
                <td><label htmlFor="username">Fullname</label></td>
                <td> <input type="text" id="username" name="username" /></td>
            </tr>
            <br></br>
            <tr>
            <td> <label htmlFor="Email">Email</label></td>
                <td> <input type="text" id="Email" name="Email" /></td>
            </tr>
            <br></br>

            <tr>
              <td>  <label htmlFor="Phone">Phone</label></td>
              <td>  <input type="number" id="Phone" name="Phone" /></td>
            </tr>
            <br></br>

            <tr>
              <td>  <label htmlFor="Address">Address</label></td>
              <td>  <input type="text" id="Address" name="Address" /></td>
            </tr>
            <br></br>
 
        
            <tr>
               <td> <label htmlFor="Password">Password</label></td>
               <td> <input type="password" id="Password" name="Password" /></td>
            </tr>
            <br></br>
            <tr>
                <td></td>
         <td className='text-center'><button className='btn btn-success' type="submit">Register</button></td>
         </tr>
         </table>
        
   
        </form>
        </div>
        </div>

    );
}
 export default Registration;