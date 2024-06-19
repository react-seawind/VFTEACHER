import axios from 'axios';
import { toast } from 'react-toastify';
import Config from './Config';

const { API_BASE_URL } = Config; // Destructure the values from the config file

const TOKEN = Config.getToken();
const TeacherId = Config.getId();
const SchoolId = Config.getSchoolId();

const headers = {
  Authorization: `Bearer ${TOKEN}`, // Corrected typo from "Bareer" to "Bearer"
};

// ---------------------------HomeWork------------------------
// ----------------------getStandardByTeacherId----------------
export const getStandardByTeacherId = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/homework/${SchoolId}/${TeacherId}`,
    );

    if (response.data.status === true) {
      return response.data.responseData;
    } else {
      throw new Error(response.data.message); // Throw error with API message
    }
  } catch (error) {
    throw error; // Rethrow the error for further handling
  }
};

// ----------------------getDivisionByStandardId----------------
export const getDivisionByStandardId = async (StandardId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/division/${SchoolId}/${TeacherId}/${StandardId}`,
    );

    if (response.data.status === true) {
      return response.data.responseData;
    } else {
      throw new Error(response.data.message); // Throw error with API message
    }
  } catch (error) {
    throw error; // Rethrow the error for further handling
  }
};
// ----------------------getSubjectByDivisionId----------------
export const getSubjectByDivisionId = async (StandardId, DivisionId) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/subject/${SchoolId}/${TeacherId}/${StandardId}/${DivisionId}`,
    );

    if (response.data.status === true) {
      return response.data.responseData;
    } else {
      throw new Error(response.data.message); // Throw error with API message
    }
  } catch (error) {
    throw error; // Rethrow the error for further handling
  }
};

// =========================Get All HomeWork=========================
export const getAllHomeWork = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/homework`, {
      headers,
    });
    return response.data.responseData;
  } catch (error) {
    toast.error(response.data.message);
  }
};

// ----------------------getHomeWorkbyId----------------
export const getHomeWorkById = async (Id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/homework/${Id}`, {
      headers,
    });

    if (response.data.status === true) {
      return response.data.responseData[0];
    } else {
      toast.error(response.data.message);
      throw new Error(response.data.message); // Throw error with API message
    }
  } catch (error) {
    throw error; // Rethrow the error for further handling
  }
};
// ===================Edit HomeWork================D
export const updateHomeWorkById = async (formData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/homework`, formData, {
      headers,
      'Content-Type': 'multipart/form-data',
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

// ------------------------Add HomeWork---------------------
export const AddHomeWork = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/homework`, formData, {
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
// ------------------------delete HomeWork---------------------
export const deleteHomeWork = async (Id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/homework/${Id}`, {
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
