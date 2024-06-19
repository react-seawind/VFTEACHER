import axios from 'axios';
import Config from './Config';
import { toast } from 'react-toastify';

const { API_BASE_URL } = Config; // Destructure the values from the config file

const TOKEN = Config.getToken();
const Id = Config.getId();

const headers = {
  Authorization: `Bearer ${TOKEN}`, // Corrected typo from "Bareer" to "Bearer"
};

// =========================AdminLogin==============D
export const AdminLogin = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, data);
    if (response.data.status === true) {
      const { Id, Role, SchoolId } = response.data.responseData;
      const teacherlogindata = { Id, Role, SchoolId };
      const token = response.data.token;
      sessionStorage.setItem(
        'teacherlogindata',
        JSON.stringify(teacherlogindata),
      );
      sessionStorage.setItem('token', JSON.stringify(token));
      toast('Login Successfully');
      return response;
    } else {
      toast.error(response.data.message);
      throw new Error(response.data.message); // Throw error with API message
    }
  } catch (error) {
    throw error; // Rethrow the error for further handling
  }
};

// ======================PROFILE===========================
// =========================getAdmindata=========================D
export const getAdmindataById = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/teacher/${Id}`, {
      headers,
    });

    if (response.data.status === true) {
      return response.data.responseData;
    } else {
      throw new Error(response.data.message); // Throw error with API message
    }
  } catch (error) {
    throw error; // Rethrow the error for further handling
  }
};
