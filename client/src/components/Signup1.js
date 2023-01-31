import React, { useState } from "react";
import "react-router-dom";
const Signup = () => {
  // const history = useHistory();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    pin: "",
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { fname, lname, email, password, address, city, state, pin } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        lname,
        email,
        password,
        address,
        city,
        state,
        pin,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      alert("Registration Successful");
      console.log("Registration Successful");

      // history.push('/login');
    }
  };

  return (
    <div className="container">
      <br />
      <br />
      <form className="register-form">
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">First Name</label>
            <input
              type="text"
              name="fname"
              value={user.fname}
              onChange={handleInputs}
              className="form-control"
              placeholder="First Name"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputEmail4">Last Name</label>
            <input
              type="text"
              name="lname"
              value={user.lname}
              onChange={handleInputs}
              className="form-control"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleInputs}
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>

        <div className="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleInputs}
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        {/* <div className="form-group">
          <label for="inputAddress2">Address 2</label>
          <input
            type="text"
            name="address2"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div> */}
        <div className="form-row">
          <div className="form-group col-md-6">
            <label for="inputCity">City</label>
            <input
              type="text"
              name="city"
              value={user.city}
              onChange={handleInputs}
              className="form-control"
              id="inputCity"
            />
          </div>

          <div className="form-group col-md-4">
            <label for="inputState">State</label>
            <select
              id="inputState"
              value={user.state}
              onChange={handleInputs}
              name="state"
              className="form-control"
            >
              <option selected>Choose...</option>
              <option>Bihar</option>
              <option>Gujarat</option>
              <option>Maharashtra</option>
            </select>
          </div>

          <div className="form-group col-md-2">
            <label for="inputZip">Pin</label>
            <input
              type="text"
              name="pin"
              value={user.pin}
              onChange={handleInputs}
              maxLength="6"
              className="form-control"
              id="inputZip"
            />
          </div>
        </div>

        {/* <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div> */}
        {/* <button type="submit" className="btn btn-primary">
          Sign in
        </button> */}
        <input
          type="submit"
          className="btn btn-primary"
          name="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Signup;
