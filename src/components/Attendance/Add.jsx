// import React, { useEffect, useState } from 'react';
// import Breadcrumb from '../Breadcrumb';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import { useNavigate } from 'react-router-dom';
// import { getStudentByTeacherId } from '../../API/PTMApi';

// const validationSchema = yup.object().shape({
//   Title: yup.string().required('Student Name is required'),
//   Date: yup.string().required('Date is required'),
// });

// const AttendanceAdd = () => {
//   // ------------Student DATA-------------------
//   const [student, setstudent] = useState([]);

//   useEffect(() => {
//     const fetchStudent = async () => {
//       try {
//         const StudentData = await getStudentByTeacherId();
//         setstudent(StudentData);
//       } catch (error) {
//         console.error('Error fetching Student:', error);
//       }
//     };
//     fetchStudent();
//   }, []);
//   const formik = useFormik({
//     initialValues: {
//       Title: '',
//       Date: '',
//       Status: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: async (values, actions) => {
//       try {
//         const formData = new FormData();
//         Object.entries(values).forEach(([key, value]) => {
//           formData.append(key, value);
//         });
//         navigate('/attendance/listing');
//       } catch (error) {
//         console.error('Error adding Attendance:', error);
//       }
//     },
//   });

//   const navigate = useNavigate();

//   const handleGoBack = () => {
//     navigate('/attendance/listing');
//   };
//   return (
//     <div>
//       <Breadcrumb pageName="Attendance Add " />

//       <div className="grid grid-cols-1 gap-9 ">
//         <div className="flex flex-col gap-9">
//           {/* <!-- Input Fields --> */}
//           <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
//             <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
//               <h3 className="font-medium text-black dark:text-white">
//                 Attendance Add
//               </h3>
//               <p>
//                 Please fill all detail and add new Attendance in your Attendance
//                 directory
//               </p>
//             </div>

//             <form onSubmit={formik.handleSubmit}>
//               <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5.5 py-3.5 px-5.5">
//                 {student.map((val, index) => {
//                   return (
//                     <div key={index}>
//                       <p>{val.StudentName}</p>
//                     </div>
//                   );
//                 })}
//                 <div>
//                   <label className="mb-3 block text-black dark:text-white">
//                     Student Name <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="Title"
//                     value={formik.values.Title}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     placeholder="Select Student"
//                     className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                   />

//                   {formik.touched.Title && formik.errors.Title && (
//                     <small className="text-red-500">
//                       {formik.errors.Title}
//                     </small>
//                   )}
//                 </div>
//                 <div>
//                   <label className="mb-3 block text-black dark:text-white">
//                     Date <span className="text-danger">*</span>
//                   </label>
//                   <input
//                     type="date"
//                     name="Date"
//                     value={formik.values.Date}
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     placeholder="Enter Attendance Name"
//                     className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
//                   />

//                   {formik.touched.Date && formik.errors.Date && (
//                     <small className="text-red-500">{formik.errors.Date}</small>
//                   )}
//                 </div>
//               </div>

//               <div className="flex flex-col gap-2.5 py-3.5 px-5.5">
//                 <label className="mb-3 block text-black dark:text-white">
//                   Attendance <span className="text-danger">*</span>
//                 </label>
//                 <div className="relative">
//                   <div>
//                     <input
//                       type="radio"
//                       onChange={formik.handleChange}
//                       name="Status"
//                       className="mx-2"
//                       value="1"
//                       checked={formik.values.Status == '1'}
//                     />
//                     Present
//                   </div>
//                   <div>
//                     <input
//                       type="radio"
//                       onChange={formik.handleChange}
//                       name="Status"
//                       className="mx-2"
//                       value="0"
//                       checked={formik.values.Status == '0'}
//                     />
//                     Absent
//                   </div>
//                 </div>
//                 <p>Please select an a one status by default is inactive.</p>
//               </div>

//               <div className="flex   gap-5.5 py-3.5 px-5.5">
//                 <button
//                   className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:shadow-1"
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//                 <button
//                   className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
//                   onClick={handleGoBack}
//                   type="button"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AttendanceAdd;

import React, { useEffect, useState } from 'react';
import Breadcrumb from '../Breadcrumb';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { getStudentByTeacherId } from '../../API/PTMApi';

const validationSchema = yup.object().shape({
  Title: yup.string().required('Student Name is required'),
  Date: yup.string().required('Date is required'),
  students: yup.array().of(
    yup.object({
      StudentId: yup.number().required(),
      Status: yup.string().oneOf(['1', '0'], 'Required').required('Required'),
    }),
  ),
});

const AttendanceAdd = () => {
  const [student, setStudent] = useState([]);
  const [initialValues, setInitialValues] = useState({
    Date: new Date().toISOString().substring(0, 10),
    students: [],
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const studentData = await getStudentByTeacherId();
        setStudent(studentData);
        setInitialValues({
          Date: new Date().toISOString().substring(0, 10),
          students: studentData.map((s) => ({
            StudentId: s.StudentId,
            Status: '1',
          })),
        });
      } catch (error) {
        console.error('Error fetching Student:', error);
      }
    };
    fetchStudent();
  }, []);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        console.log('Form Data', values);
      } catch (error) {
        console.error('Error adding Attendance:', error);
      }
    },
  });

  const handleGoBack = () => {
    navigate('/attendance/listing');
  };

  return (
    <div>
      <Breadcrumb pageName="Attendance Add " />

      <div className="grid grid-cols-1 gap-9 ">
        <div className="flex flex-col gap-9">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Attendance Add
              </h3>
              <p>
                Please fill all detail and add new Attendance in your Attendance
                directory
              </p>
            </div>

            <form onSubmit={formik.handleSubmit}>
              <div className="gap-5.5 py-3.5 px-5.5">
                <label className="mb-3 block text-black dark:text-white">
                  Date <span className="text-danger">*</span>
                </label>
                <input
                  type="date"
                  name="Date"
                  value={formik.values.Date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Enter Attendance Date"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-1.5 px-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
                {formik.touched.Date && formik.errors.Date && (
                  <small className="text-red-500">{formik.errors.Date}</small>
                )}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-5.5 py-3.5 px-5.5">
                {student.map((val, index) => (
                  <div key={index} className="flex items-center">
                    <b>{val.StudentName}:</b>
                    <div className="relative flex items-center">
                      <div>
                        <input
                          type="radio"
                          onChange={formik.handleChange}
                          name={`students[${index}].Status`}
                          className="mx-2"
                          value="1"
                          checked={
                            formik.values.students[index]?.Status === '1'
                          }
                        />
                        Present
                      </div>
                      <div>
                        <input
                          type="radio"
                          onChange={formik.handleChange}
                          name={`students[${index}].Status`}
                          className="mx-2"
                          value="0"
                          checked={
                            formik.values.students[index]?.Status === '0'
                          }
                        />
                        Absent
                      </div>
                      {formik.errors.students &&
                        formik.errors.students[index] &&
                        formik.errors.students[index].Status && (
                          <small className="text-red-500">
                            {formik.errors.students[index].Status}
                          </small>
                        )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-5.5 py-3.5 px-5.5">
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
  );
};

export default AttendanceAdd;
