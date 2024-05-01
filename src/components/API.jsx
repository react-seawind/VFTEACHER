import axios from 'axios';

const API_BASE_URL = 'https://seawindsolution.ae/VF/api';

const sessiondata = sessionStorage.getItem('teacherlogindata');
const parsedSessionData = sessiondata ? JSON.parse(sessiondata) : null;
const token = parsedSessionData ? parsedSessionData.token : null;
const Id = parsedSessionData ? parsedSessionData.Id : null;

const TOKEN = token;

const headers = {
  Authorization: `Bareer ${TOKEN}`,
  'Content-Type': 'application/json',
};

// // =========================SERVICE=========================
export const getServicedata = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getCategory`, {
      headers,
    });

    if (response.data.status == true) {
      return response.data.ResponseData;
    } else {
      toast.error(response.data.message);
      throw new Error(response.data.message); // Throw error with API message
    }
  } catch (error) {
    throw error; // Rethrow the error for further handling
  }
};

export const AddSchool = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/school`, formData, {
      headers,
      'Content-Type': 'multipart/form-data',
    });
    if (response.data.status === true) {
      toast(response.data.message); // Toast success message
      return response.data; // Return response data
    } else {
      toast.error(response.data.message);
      throw new Error(response.data.message); // Throw error with API message
    }
  } catch (error) {
    throw error; // Rethrow the error for further handling
  }
};
// // =========================BLOG=========================
export const getBlog = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/getBlog`, {
      headers,
    });
    return response.data.responsedata;
  } catch (error) {
    throw error;
  }
};
export const AddBlog = async (formData) => {
  try {
    const headers = {
      'x-api-key': '123456789123456789',
      'Content-Type': 'multipart/form-data',
      authorization: `Bearer ${TOKEN}`,
    };
    const response = await axios.post(`${API_BASE_URL}/addBlog`, formData, {
      headers,
    });
    console.log(response);
    return response;
  } catch (error) {
    throw error;
  }
};

// // =========================AdminLogin==============D
// export const AdminLogin = async (data) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/adminLogin`, data);
//     if (response.data.status === true) {
//       const { Id, token } = response.data.responseData;
//       const teacherlogindata = { Id, token };
//       sessionStorage.setItem('teacherlogindata', JSON.stringify(teacherlogindata));
//       toast('Login Successfully');
//       return response;
//     } else {
//       toast.error(response.data.message);
//       throw new Error(response.data.message); // Throw error with API message
//     }
//   } catch (error) {
//     throw error; // Rethrow the error for further handling
//   }
// };

// // ======================PROFILE===========================
// // =========================getAdmindata=========================D
// export const getAdmindataById = async () => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/admin/${Id}`, {
//       headers,
//     });

//     if (response.data.status === true) {
//       return response.data;
//     } else {
//       toast.error(response.data.message);
//       throw new Error(response.data.message); // Throw error with API message
//     }
//   } catch (error) {
//     throw error; // Rethrow the error for further handling
//   }
// };

// // ===================Edit Admin data================D
// export const UpdateAdminById = async (formData) => {
//   try {
//     const response = await axios.post(`${API_BASE_URL}/admin`, formData, {
//       headers,
//       'Content-Type': 'multipart/form-data',
//     });

//     if (response.data.status === true) {
//       toast.success(response.data.message);
//       return response.data;
//     } else {
//       toast.error(response.data.message);
//       throw new Error(response.data.message); // Throw error with API message
//     }
//   } catch (error) {
//     throw error; // Rethrow the error for further handling
//   }
// };
// // ===================ChangePassword================D
// export const ChangePassword = async (data) => {
//   try {
//     const response = await axios.post(
//       `${API_BASE_URL}/admin/changePassword`,
//       data,
//       {
//         headers,
//       },
//     );

//     if (response.data.status === true) {
//       toast.success(response.data.message);
//       return response.data;
//     } else {
//       toast.error(response.data.message);
//     }
//   } catch (error) {
//     throw error;
//   }
// };
