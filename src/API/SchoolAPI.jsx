import axios from 'axios';
import { toast } from 'react-toastify';
import Config from './Config';

const { API_BASE_URL } = Config; // Destructure the values from the config file

const TOKEN = Config.getToken();
const Id = Config.getId();

const headers = {
  Authorization: `Bearer ${TOKEN}`, // Corrected typo from "Bareer" to "Bearer"
};

// =========================Get All School=========================
export const getAllSchool = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/school`, {
      headers,
    });
    return response.data.responsedata;
  } catch (error) {
    throw error;
  }
};

// ----------------------getSchoolbyId----------------
export const getSchoolById = async (Id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/school/${Id}`, {
      headers,
    });

    if (response.data.status === true) {
      return response.data.responseData;
    } else {
      toast.error(response.data.message);
      throw new Error(response.data.message); // Throw error with API message
    }
  } catch (error) {
    throw error; // Rethrow the error for further handling
  }
};
// ===================Edit School================D
export const updateSchoolById = async (formData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/school`, formData, {
      headers,
    });

    if (response.data.status === true) {
      toast(response.data.message); // Toast success message
      return response.data;
    } else {
      toast.error(response.data.message);
      throw new Error(response.data.message); // Throw error with API message
    }
  } catch (error) {
    throw error; // Rethrow the error for further handling
  }
};

// ------------------------Add School---------------------
export const AddSchool = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/school`, formData, {
      headers,
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
// ------------------------delete School---------------------
export const deleteSchool = async (Id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/school/${Id}`, {
      headers,
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
// ===================ChangePassword================D
export const SchoolChangePassword = async (data) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/school/changePassword`,
      data,
      {
        headers,
      },
    );

    if (response.data.status === true) {
      toast.success(response.data.message);
      return response.data;
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    throw error;
  }
};
