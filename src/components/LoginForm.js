import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../css/login.css";
import { useDispatch } from "react-redux";
import { verificarLoginAction } from "../actions/loginActions";

const LoginForm = () => {
  const dispatch = useDispatch();

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
      dispatch(verificarLoginAction(values));
      /* if (
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
      } else {
        Swal.fire({
          icon: "error",
          title: "Acceso denegado",
          text: "Email o contrasena incorrectos",
        });
        return;
      } */
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
