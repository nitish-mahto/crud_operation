import React from 'react'
import { NavLink } from "react-router-dom";
import '../App.css';
const Signup = () => {
  return (
    <>
    {/* <br />
        <form>
            <table  align='center' height="300px">
                <tr>
                    <th>
                        <h1 align="center">Registration Form</h1>
                    </th>
                </tr>

                <tr align='center'>
                    <td>
                        <input type="text" name="name" placeholder="Enter Your Name" />
                    </td>
                </tr>

                <tr align='center'>
                    <td>
                        <input type="text" name="email" placeholder="Enter Your Email Id" />
                    </td>
                </tr>

                <tr align='center'>
                    <td>
                        <input type="text" name="phone" placeholder="Enter Your Phone no" />
                    </td>
                </tr>

                <tr align='center'>
                    <td>
                        <input type="text" name="work" placeholder="Enter Your Work" />
                    </td>
                </tr>

                <tr align='center'>
                    <td>
                        <input type="password" name="password" placeholder="Enter Your password" />
                    </td>
                </tr>
                
                <tr align='center'>
                    <td>
                        <input type="submit" name="btnsubmit"/>
                    </td>
                </tr>
            </table>
        </form> */}
        <h1>Registration Form</h1>
        <div class="form-container">
            <form action="#" method="post">
                <input type="text" name="name" id="" placeholder="Enter Your name" />
                <input type="email" name="email" id="" placeholder="Enter Your Email" />
                <input type="text" name="phone" id="" placeholder="Enter Your Phone no" />
                <input type="text" name="work" id="" placeholder="Enter Your Work" />
                <input type="password" name="password" id="" placeholder="Enter Your Password" />
                <input type="submit" name="submit" id="submit" value="Submit" />
                <NavLink to="/#">
                    Forget Password ?
                </NavLink>

                <NavLink to="/#">
                    Don't have an account ? <font color="red">Login now!</font>
                </NavLink>
            </form>   
        </div>
    </>
  )
}

export default Signup