import React, { useState } from "react";
import Card from "../Components/Card";
import Input from "../Components/Input";
import { HiMiniUserGroup } from "react-icons/hi2";
import Button from "../Components/Button";

const Login = () => {
  const [formData, setformData] = useState({ email: "", password: "" });
  const handleChange = () => {};
  const handleSubmit = () => {};
  return (
    <Card>
      <div className="space-y-5 p-5">
        <div>
          <HiMiniUserGroup className="mx-auto text-5xl text-teal-600" />
          <h4 className="text-center">Login</h4>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
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

export default Login;
