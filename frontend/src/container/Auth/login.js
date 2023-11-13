import { Field, Form, Formik } from "formik";
import React from "react";
import styled from "styled-components";
import useAPI from "../../hooks/useApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, signInUserAsync } from "../../redux/userInfoSlice";

const Login = () => {
  const navigate = useNavigate();
  const [makeRequest, { data, loading }] = useAPI();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user);
  const handleSignIn = async (values) => {
    // if (values) {
    //   dispatch(signInUserAsync(values));
    // }
    try {
      const res = await makeRequest({
        url: "api/signin",
        method: "POST",
        data: values,
      });
      if (res.success) {
        toast.success(res.message);
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch(addUser(res.data));
        navigate("/");
      }
      if (!res.success) {
        toast.error(res.message);
      }
    } catch (error) {
      console.log("the error=====", error);
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
          }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            console.log("the is submitted", values);
            await handleSignIn(values);
            await resetForm();
          }}
        >
          {({ values, isSubmitting }) => {
            return (
              <FormStyle>
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
                <button
                  className="signup"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Sign in
                </button>
              </FormStyle>
            );
          }}
        </Formik>
      </div>
    </RegisterWrapper>
  );
};

export default Login;
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
