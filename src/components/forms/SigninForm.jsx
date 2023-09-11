import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { SignupFormValidation } from "~/validations/FormValidation";

export const SigninForm = () => {
  return (
    <Formik
      validationSchema={SignupFormValidation}
      initialValues={{
        name: "",
        email: "",
        password: "",
        isRememberMe: false,
      }}
      onSubmit={(values) => {
        if (values.isAccepted === false) {
          alert("kabul et");
        } else {
          console.log(values);
        }
      }}
    >
      {({ values, isValid, dirty }) => {
        return (
          <Form className="mt-10">
            <div className="flex flex-col gap-y-8">
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
                <div className="w-full flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">
                    Password
                  </label>
                  <span className="text-xs text-dark-blue font-semibold ml-auto">
                    forgot password
                  </span>
                </div>
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
              <div className="flex items-center">
                <Field
                  id="checkbox"
                  type="checkbox"
                  name="isAccepted"
                  className="mr-2"
                />
                <label htmlFor="checkbox" className="text-sm font-semibold">
                  Remember me
                </label>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={!isValid || !dirty || !values.isAccepted}
                  className={`bg-dark-green w-full py-2 rounded-lg text-white font-semibold ${
                    !isValid || !dirty || !values.isAccepted
                      ? "opacity-60 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Signup
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
