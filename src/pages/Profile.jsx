import { BsEnvelope, BsImage } from 'react-icons/bs';
import Breadcrumb from '../components/Breadcrumb';
import { FaRegUser } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UpdateAdminById, getAdmindataById } from '../API/AdminApi';
const validationSchema = yup.object().shape({
  Name: yup.string().required('Name is required'),
});

const Profile = () => {
  const { adminId } = useParams();
  const [adminData, setAdminData] = useState({});
  const [imagePreview, setImagePreview] = useState();
  // ================GetData==============
  const fetchData = async () => {
    try {
      const response = await getAdmindataById(adminId);
      setAdminData(response.responsedata[0]);
      formik.setValues(response.responsedata[0]);
      if (response.responsedata[0].Image) {
        setImagePreview(response.responsedata[0].Image); // Update image preview if image exists
      }
    } catch (error) {
      console.log('Error fetching admin data');
    }
  };
  useEffect(() => {
    fetchData();
  }, [adminId]);
  const formik = useFormik({
    initialValues: {
      Name: '',
      Email: '',
      Image: null,
      Id: '',
      Hid_Image: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        Object.entries(values).forEach(([key, value]) => {
          formData.append(key, value);
        });
        await UpdateAdminById(formData);
        fetchData();
      } catch (error) {
        console.error('Error updating admin:', error);
      }
    },
  });
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/dashboard');
  };
  return (
    <div>
      <Breadcrumb pageName="Profile" />

      <div className="">
        <form className="grid grid-cols-5 gap-8" onSubmit={formik.handleSubmit}>
          <input
            type="hidden"
            name="Hid_Image"
            value={formik.values.Hid_Image}
          />

          <div className="col-span-5 xl:col-span-2">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  <img src={imagePreview} alt="" className="w-35 mx-auto" />
                </h3>
              </div>
              <div className="p-7">
                <div
                  id="FileUpload"
                  className="relative cursor-pointer appearance-none rounded border-2 border-dashed border-primary bg-gray   dark:bg-meta-4 sm:py-7.5"
                >
                  <input
                    type="file"
                    onChange={(event) =>
                      formik.setFieldValue(
                        'Image',
                        event.currentTarget.files[0],
                      )
                    }
                    name="Image"
                    accept="image/*"
                    className="absolute inset-0 z-50 m-0   cursor-pointer p-0 opacity-0 outline-none"
                  />

                  <div className="flex flex-col items-center justify-center space-y-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                      <BsImage />
                    </span>
                    <p>
                      <span className="text-primary">Click to upload</span>
                    </p>
                  </div>
                </div>
                {formik.touched.Image && formik.errors.Image && (
                  <small className="text-red-500">{formik.errors.Image}</small>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-5 xl:col-span-3">
            <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
              <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                <h3 className="font-medium text-black dark:text-white">
                  Personal Information
                </h3>
              </div>
              <div className="p-7">
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full  ">
                    <label
                      className="mb-3 block text-sm font-medium text-black dark:text-white"
                      htmlFor="fullName"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <span className="absolute left-4.5 top-4">
                        <FaRegUser />
                      </span>
                      <input
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        onChange={formik.handleChange}
                        name="Name"
                        value={formik.values.Name}
                        placeholder="User name"
                      />

                      {formik.touched.Name && formik.errors.Name && (
                        <small className="text-red-500">
                          {formik.errors.Name}
                        </small>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-5.5">
                  <label
                    className="mb-3 block text-sm font-medium text-black dark:text-white"
                    htmlFor="emailAddress"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <span className="absolute left-4.5 top-4">
                      <BsEnvelope />
                    </span>
                    <input
                      className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                      type="email"
                      onChange={formik.handleChange}
                      name="Email"
                      readOnly
                      value={formik.values.Email}
                      placeholder="Enter email"
                    />

                    {formik.touched.Email && formik.errors.Email && (
                      <small className="text-red-500">
                        {formik.errors.Email}
                      </small>
                    )}
                  </div>
                </div>

                <div className="flex justify-end gap-4.5">
                  <button
                    className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                    onClick={handleGoBack}
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
