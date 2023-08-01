import React, { useEffect, useState } from "react";
import { HiAcademicCap } from "react-icons/hi2";
import axios from "axios";
import Card from "../Components/Card";
import Input from "../Components/Input";
import Button from "../Components/Button";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {}, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/auth/signup", formData);
    console.log(`122 res`, res);
  };
console.log(`122 formData`,formData);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Card>
      <div className="space-y-5 p-5">
        <div>
          <HiAcademicCap className="mx-auto text-5xl text-teal-600" />
          <h4 className="text-center">Register User</h4>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <Input
            label="First Name"
            inputProps={{
              value: formData.firstName,
              name: "firstName",
              onChange: handleChange,
            }}
          />
          <Input
            label="Last Name"
            inputProps={{
              value: formData.lastName,
              name: "lastName",
              onChange: handleChange,
            }}
          />
          <Input
            label="Email"
            inputProps={{
              value: formData.email,
              name: "email",
              onChange: handleChange,
            }}
          />
          <Input
            label="Password"
            inputProps={{
              type: "password",
              name: "password",
              onChange: handleChange,
            }}
            value={formData.password}
          />
          <Button label="Submit" buttonProps={{ type: "submit" }} />
        </form>
      </div>
    </Card>
  );
};

export default SignUp;
