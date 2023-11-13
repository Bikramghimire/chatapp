import React, { useEffect } from "react";
import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import useAPI from "../../hooks/useApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [makeRequest, { data, loading }] = useAPI();
  const navigate = useNavigate();

  const callJsonPlaceholderApi = async (data) => {
    const { email, password, username } = data;
    try {
      const res = await makeRequest({
        method: "POST",
        url: "api/signup",
        data: {
          email,
          password,
          username,
        },
      });
      if (res.success) {
        toast.success(res.message);
        navigate("/auth/login");
      }
    } catch (error) {
      console.log("the error", error);
    }
  };
  return (
    <RegisterWrapper>
      <div className="user signupBx">
        <h2>Create an account</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
            username: "",
            confirmPassword: "",
          }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            console.log("the is submitted", values);
            await callJsonPlaceholderApi(values);
            await resetForm();
          }}
        >
          {({ values, isSubmitting }) => {
            return (
              <FormStyle>
                <FieldStyle
                  type="text"
                  name="username"
                  placeholder="Username"
                />

                <FieldStyle
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />

                <FieldStyle
                  type="password"
                  name="password"
                  placeholder="Create Password"
                />

                <FieldStyle
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
                <button
                  className="signup"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign Up
                </button>
              </FormStyle>
            );
          }}
        </Formik>
      </div>
    </RegisterWrapper>
  );
};

export default Register;
const RegisterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  .user {
    width: 30%;
  }
  .user > h2 {
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
    width: 100%;
    margin-bottom: 10px;
    color: #555;
  }
  .signup {
    font-weight: 600;
    text-decoration: none;
    color: #677eff;
    width: 200px;
    height: 40px;
    margin-top: 10px;
    border: none;
    &:hover {
      background-color: #677eff;
      color: #fff;
      cursor: pointer;
    }
  }
`;

const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
`;

const FieldWrapperStyle = styled.div``;

const FieldStyle = styled(Field)`
  width: 100%;
  padding: 10px;
  background: #f5f5f5;
  color: #333;
  border: none;
  outline: none;
  box-shadow: none;
  margin: 8px 0;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
`;
