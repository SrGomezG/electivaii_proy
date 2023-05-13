import React from "react";

export const Register = () => {
  return (
    <div>
      <form action="/action_page.php">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" value="John" />
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" value="Doe" />
        <label for="lname">Email:</label>
        <input type="text" id="email" name="email" value="Email" />
        <input type="submit" value="Submit" />
        <label for="lname">password:</label>
        <input type="password" id="password" name="password" value="password" />
        <label for="lname">Municipio:</label>
        <input type="text" id="mun" name="mun" value="Municipio" />
        <label for="lname">Departamento:</label>
        <input
          type="text"
          id="departamento"
          name="departamento"
          value="departamento"
        />
      </form>
    </div>
  );
};
