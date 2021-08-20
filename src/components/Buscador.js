import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const Buscador = () => {
  let history = useHistory();
  const formik = useFormik({
    initialValues: {
      busqueda: "",
    },

    validationSchema: Yup.object({
      busqueda: Yup.string().required("Escriba un nombre"),
    }),

    onSubmit: (values) => {
      localStorage.setItem("busqueda", values.busqueda);
      history.push("/busqueda");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-8 d-flex">
            <input
              id="busqueda"
              name="busqueda"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.busqueda}
              className="form-control"
              placeholder="search for heroes"
            />

            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
          {formik.touched.busqueda && formik.errors.busqueda ? (
            <div>{formik.errors.busqueda}</div>
          ) : null}
        </div>
      </div>
    </form>
  );
};

export default Buscador;
