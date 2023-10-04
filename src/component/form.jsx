import React from "react";
import "./form.css";
function Form() {
  return (
    <div className="container">
      <form action="">
        <h2>TEAM 2 /SIGN UP FORM</h2>
        <h2>#RAJ#</h2>
        <br />
        <br />
        <div className="raj">
          <div>
            <label htmlFor="">Username</label>
            <input type="text" placeholder="username" />
          </div>
          <br />
          <div>
            <label htmlFor="">Email</label>
            <input type="email" name="email" placeholder="info@abc.com" />
          </div>
          <br />
          <div>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="password" />
          </div>
          <br />
          <div>
            <label htmlFor="">Re-Enter Password</label>
            <input type="password" placeholder="re-enter password" />
          </div>{" "}
          <br />
          <br />
          <div className="btnDiv">
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
