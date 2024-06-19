import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoDark from '../../images/logo.jpg';
import Logo from '../../images/logo.jpg';
import { FaEnvelope, FaKey } from 'react-icons/fa';
import * as yup from 'yup';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { AdminLogin } from '../../API/AdminApi';
import FormLoader from '../../common/FormLoader';
const validationSchema = yup.object().shape({
  UserName: yup.string().required('UserName is required'),
  Password: yup.string().required('Password is required'),
});
const SignIn = () => {
  const [loginbutton, setloginbutton] = useState(false);
  const navigate = useNavigate();

  const [isFormLoading, setIsFormLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      UserName: '',
      Password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsFormLoading(true);
      try {
        setloginbutton(true);
        await AdminLogin(values);

        const token = sessionStorage.getItem('token');

        if (token) {
          navigate('/dashboard');
          window.location.reload();
        } else {
          navigate('/login');
          setloginbutton(false);
        }
      } catch (error) {
        console.error('Error :', error);
      } finally {
        setIsFormLoading(false); // Set loading state to false when submission ends
      }
    },
  });

  return (
    <div>
      {isFormLoading && <FormLoader loading={isFormLoading} />}
      <div className="rounded-sm border my-[9%] border-stroke  container mx-auto  bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center ">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5   text-center">
              <Link className="mb-5.5 inline-block" to="/dashboard">
                <img
                  className="hidden dark:block w-[50%] mx-auto"
                  src={Logo}
                  alt="Logo"
                />
                <img
                  className="dark:hidden w-[50%] mx-auto"
                  src={LogoDark}
                  alt="Logo"
                />
              </Link>

              <p className="2xl:px-20 py-10 text-5xl">
                Virtual Filaments Teacher
              </p>
            </div>
          </div>

          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white text-center sm:text-title-xl2">
                Sign In
              </h2>

              <form onSubmit={formik.handleSubmit}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="UserName"
                      onChange={formik.handleChange}
                      placeholder="Enter your UserName"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4 fill-current">
                      <FaEnvelope />
                    </span>

                    {formik.touched.UserName && formik.errors.UserName && (
                      <small className="text-red-500">
                        {formik.errors.UserName}
                      </small>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="Password"
                      onChange={formik.handleChange}
                      placeholder="Enter Password"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <FaKey />
                    </span>
                    {formik.touched.Password && formik.errors.Password && (
                      <small className="text-red-500">
                        {formik.errors.Password}
                      </small>
                    )}
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value={loginbutton ? 'Loding...' : 'Sign In'}
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
