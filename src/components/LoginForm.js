import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../css/login.css";
import { useDispatch } from "react-redux";
import { VerificarLoginAction } from "../actions/loginActions";
import { useHistory } from "react-router-dom";

const LoginForm = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  console.log(history);
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },

    validationSchema: Yup.object({
      password: Yup.string().required("Escriba la contrasena"),

      email: Yup.string()
        .email("correo inválido")
        .required("Escriba su correo"),
    }),

    onSubmit: (values) => {
      console.log(values);
      dispatch(VerificarLoginAction(values, history));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="loginForm bg-dark">
      <h1>Login</h1>

      <div className="form-group mb-4">
        <label htmlFor="email">Email Address</label>

        <input
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
          className="form-control "
        />

        {formik.touched.email && formik.errors.email ? (
          <div className="errorMessage alert alert-danger text-center ">
            {formik.errors.email}
          </div>
        ) : null}
      </div>
      <div className="form-group mb-4">
        <label htmlFor="password">Password</label>

        <input
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
          className="form-control "
        />

        {formik.touched.password && formik.errors.password ? (
          <div className="errorMessage alert alert-danger text-center">
            {formik.errors.password}
          </div>
        ) : null}
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-primary w-100">
          Enter
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
