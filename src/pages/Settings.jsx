import { useNavigate } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChangePassword } from '../API/AdminApi';
const validateSchema = Yup.object().shape({
  OldPassword: Yup.string().required('Old Password is required.'),
  NewPassword: Yup.string().required('New Password is required.'),
});
const Settings = () => {
  const sessiondata = sessionStorage.getItem('teacherlogindata');
  const parsedSessionData = sessiondata ? JSON.parse(sessiondata) : null;
  const Id = parsedSessionData ? parsedSessionData.Id : null;
  const formik = useFormik({
    initialValues: {
      Id: Id,
      OldPassword: '',
      NewPassword: '',
    },
    validationSchema: validateSchema,
    onSubmit: async (values, actions) => {
      try {
        await ChangePassword(values);
        actions.resetForm();
      } catch (error) {
        console.error('Error updating Password:', error);
      }
    },
  });

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/dashboard');
  };
  return (
    <>
      <div className="mx-auto max-w-270">
        <Breadcrumb pageName="Settings" />

        <div className=" ">
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Change Password
                </h3>
              </div>
              <div className="p-7">
                <form onSubmit={formik.handleSubmit}>
                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="Old Password"
                    >
                      Old Password
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="password"
                      name="OldPassword"
                      id="Old Password"
                      value={formik.values.OldPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Old Password"
                    />
                    {formik.touched.OldPassword &&
                      formik.errors.OldPassword && (
                        <div className="text-red-500">
                          {formik.errors.OldPassword}
                        </div>
                      )}
                  </div>

                  <div className="mb-5.5">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="NewPassword"
                    >
                      New Password
                    </label>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="password"
                      name="NewPassword"
                      id="NewPassword"
                      value={formik.values.NewPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="New Password"
                    />
                    {formik.touched.NewPassword &&
                      formik.errors.NewPassword && (
                        <div className="text-red-500">
                          {formik.errors.NewPassword}
                        </div>
                      )}
                  </div>

                  <div className="flex   gap-5.5 py-3.5 ">
                    <button
                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
                      type="submit"
                    >
                      Submit
                    </button>
                    <button
                      className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                      onClick={handleGoBack}
                      type="button"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
