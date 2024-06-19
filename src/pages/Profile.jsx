import {
  BsEnvelope,
  BsGlobe,
  BsImage,
  BsPhone,
  BsTwitterX,
} from 'react-icons/bs';
import Breadcrumb from '../components/Breadcrumb';
import { FaRegUser, FaTwitch } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getAdmindataById } from '../API/AdminApi';
import { TbMapPinCode } from 'react-icons/tb';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaTelegram,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa6';
import Config from '../API/Config';

const Profile = () => {
  const adminId = Config.getId;
  const [adminData, setAdminData] = useState([]);
  // ================GetData==============
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAdmindataById(adminId);
        setAdminData(response);
      } catch (error) {
        console.log('Error fetching admin data');
      }
    };
    fetchData();
  }, [adminId]);
  console.log(adminData);

  function getFileExtension(filename) {
    if (typeof filename !== 'string') {
      return 'Invalid filename';
    }
    if (filename.indexOf('.') === -1) {
      return 'No file extension found';
    }
    return filename.split('.').pop().toLowerCase();
  }

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/dashboard');
  };
  return (
    <div>
      <Breadcrumb pageName="Profile" />

      <div className="">
        <div className="">
          {adminData?.map((val) => {
            return (
              <>
                <div className=" ">
                  <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                      <h3 className="font-medium text-black dark:text-white">
                        Personal Information
                      </h3>
                    </div>
                    <div className="p-7">
                      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
                        <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                          <div className="w-full  ">
                            <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                              Teacher Name
                            </label>
                            <div className="relative">
                              <span className="absolute left-4.5 top-4">
                                <FaRegUser />
                              </span>
                              <input
                                value={val.TeacherName}
                                disabled
                                className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="mb-5.5">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Teacher Email
                          </label>
                          <div className="relative">
                            <span className="absolute left-4.5 top-4">
                              <BsEnvelope />
                            </span>
                            <input
                              value={val.TeacherEmail}
                              disabled
                              className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                              type="email"
                            />
                          </div>
                        </div>
                        <div className="mb-5.5">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Teacher Phone
                          </label>
                          <div className="relative">
                            <span className="absolute left-4.5 top-4">
                              <BsPhone />
                            </span>
                            <input
                              value={val.TeacherPhone}
                              disabled
                              className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                              type="email"
                            />
                          </div>
                        </div>

                        <div className="mb-5.5">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Country
                          </label>
                          <div className="relative">
                            <span className="absolute left-4.5 top-4">
                              <BsGlobe />
                            </span>
                            <input
                              value={val.Country}
                              disabled
                              className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                              type="email"
                            />
                          </div>
                        </div>
                        <div className="mb-5.5">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            State
                          </label>
                          <div className="relative">
                            <span className="absolute left-4.5 top-4">
                              <FaLocationDot />
                            </span>
                            <input
                              value={val.State}
                              disabled
                              className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                              type="email"
                            />
                          </div>
                        </div>
                        <div className="mb-5.5">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            City
                          </label>
                          <div className="relative">
                            <span className="absolute left-4.5 top-4">
                              <FaLocationDot />
                            </span>
                            <input
                              value={val.City}
                              disabled
                              className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                              type="email"
                            />
                          </div>
                        </div>
                        <div className="mb-5.5">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Area
                          </label>
                          <div className="relative">
                            <span className="absolute left-4.5 top-4">
                              <FaLocationDot />
                            </span>
                            <input
                              value={val.Area}
                              disabled
                              className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                              type="email"
                            />
                          </div>
                        </div>
                        <div className="mb-5.5">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Pincode
                          </label>
                          <div className="relative">
                            <span className="absolute left-4.5 top-4">
                              <TbMapPinCode />
                            </span>
                            <input
                              value={val.Pincode}
                              disabled
                              className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                              type="email"
                            />
                          </div>
                        </div>
                        <div className="mb-5.5">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Address
                          </label>
                          <div className="relative">
                            <span className="absolute left-4.5 top-4">
                              <FaLocationDot />
                            </span>
                            <input
                              value={val.Address}
                              disabled
                              className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                              type="email"
                            />
                          </div>
                        </div>
                        <div className="mb-5.5">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Photo
                          </label>
                          <div className="relative">
                            {val.Photo ? (
                              getFileExtension(val.Photo) === 'pdf' ? (
                                <button
                                  className="rounded border  p-2"
                                  type="button"
                                >
                                  Download Photo
                                </button>
                              ) : (
                                <img
                                  src={val.Photo}
                                  alt=""
                                  className="rounded border p-2 h-28 w-28"
                                />
                              )
                            ) : (
                              <p>No photo available</p>
                            )}
                          </div>
                        </div>

                        <div className="mb-5.5">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Address Proof
                          </label>
                          <div className="relative">
                            {val.AddressProof ? (
                              getFileExtension(val.AddressProof) === 'pdf' ? (
                                <Link to={val.AddressProof} target="_blank">
                                  <button
                                    type="button"
                                    className="mt-2 bg-blue-600 p-2 rounded border  text-white"
                                  >
                                    Download Address Proof
                                  </button>
                                </Link>
                              ) : (
                                <img
                                  src={val.AddressProof}
                                  alt=""
                                  className="rounded border p-2 h-28 w-28 "
                                />
                              )
                            ) : (
                              <p>No address proof available</p>
                            )}
                          </div>
                        </div>

                        <div className="mb-5.5">
                          <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                            Id Proof
                          </label>
                          <div className="relative">
                            {val.IdProof ? (
                              getFileExtension(val.IdProof) === 'pdf' ? (
                                <Link to={val.IdProof} target="_blank">
                                  <button
                                    type="button"
                                    className="mt-2 bg-blue-600 p-2 rounded border  text-white"
                                  >
                                    Download Address Proof
                                  </button>
                                </Link>
                              ) : (
                                <img
                                  src={val.IdProof}
                                  alt=""
                                  className="rounded border p-2 h-28 w-28 "
                                />
                              )
                            ) : (
                              <p>No address proof available</p>
                            )}
                          </div>
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
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
