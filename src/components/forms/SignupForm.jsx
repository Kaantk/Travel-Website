import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "~/redux/authentication/actionCreator";
import { SignupFormValidation } from "~/validations/FormValidation";
import ClipLoader from "react-spinners/ClipLoader";

export const SignupForm = () => {
  const isLoading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    (values) => {
      debugger;
      dispatch(login(values, () => history("/admin")));
    },
    [history, dispatch]
  );

  return (
    <Formik
      validationSchema={SignupFormValidation}
      initialValues={{
        name: "",
        email: "",
        password: "",
        isAccepted: false,
      }}
      onSubmit={(values) => handleSubmit(values)}
    >
      {({ values, isValid, dirty }) => {
        return (
          <Form className="mt-14">
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Field
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="border-gray-light border outline-none rounded-xl p-3 text-xs"
                />
                <ErrorMessage
                  name="name"
                  component="small"
                  className="text-red-600"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium">
                  Email address
                </label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="border-gray-light border outline-none rounded-xl p-3 text-xs"
                />
                <ErrorMessage
                  name="email"
                  component="small"
                  className="text-red-600"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="border-gray-light border outline-none rounded-xl p-3 text-xs"
                />
                <ErrorMessage
                  name="password"
                  component="small"
                  className="text-red-600"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <Field
                    id="checkbox"
                    type="checkbox"
                    name="isAccepted"
                    className="mr-2"
                  />
                  <label htmlFor="checkbox" className="text-sm font-semibold">
                    I agree to the{" "}
                    <a href="#" className="underline text-sm">
                      terms & policy
                    </a>
                  </label>
                </div>
                <div className="ml-5">
                  <ErrorMessage
                    name="isAccepted"
                    component="small"
                    className="text-red-600"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={!isValid || !dirty || !values.isAccepted}
                  className={`bg-dark-green w-full flex items-center justify-center py-2 rounded-lg text-white font-semibold ${
                    !isValid || !dirty || !values.isAccepted
                      ? "opacity-60 cursor-not-allowed"
                      : ""
                  }`}
                >
                  {isLoading ? (
                    <ClipLoader
                      color="#ffffff"
                      size={25}
                      aria-label="Loading Spinner"
                      data-testid="loader"
                    />
                  ) : (
                    "Signup"
                  )}
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
