import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../css/loginForm.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },

    validationSchema: Yup.object({
      password: Yup.string()

        .max(20, "Must be 20 characters or less")

        .required("Escriba la contrasena"),

      email: Yup.string()
        .email("correo inválido")
        .required("Escriba su correo"),
    }),

    onSubmit: (values) => {
      if (
        values.email === "challenge@alkemy.org" &&
        values.password === "react"
      ) {
        try {
          const fetchData = async () => {
            const res = await axios.post("http://challenge-react.alkemy.org/", {
              email: values.email,
              password: values.password,
            });
            localStorage.setItem("token", res.data.token);
            history.push("/home");
          };
          fetchData();
        } catch (error) {
          console.log(error);
        }
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="loginForm">
      <h1>Logueate</h1>

      <div className="form-group">
        <label htmlFor="email">Email Address</label>

        <input
          id="email"
          type="email"
          {...formik.getFieldProps("email")}
          className="form-control mb-3"
        />

        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="form-group">
        <label htmlFor="password">Contrasena</label>

        <input
          id="password"
          type="password"
          {...formik.getFieldProps("password")}
          className="form-control mb-3"
        />

        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          Ingresar
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
