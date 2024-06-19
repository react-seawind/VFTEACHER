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

// ---------------------------Ptm------------------------
// ----------------------getStudentByTeacherId----------------
export const getStudentByTeacherId = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/student/${SchoolId}/${TeacherId}`,
    );

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

// =========================Get All Ptm=========================
export const getAllPtm = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/ptm`, {
      headers,
    });
    return response.data.responsedata;
  } catch (error) {
    toast.error(response.data.message);
  }
};

// ----------------------getPtmbyId----------------
export const getPtmById = async (Id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/ptm/${Id}`, {
      headers,
    });

    if (response.data.status === true) {
      return response.data.responsedata[0];
    } else {
      toast.error(response.data.message);
      throw new Error(response.data.message); // Throw error with API message
    }
  } catch (error) {
    throw error; // Rethrow the error for further handling
  }
};
// ===================Edit Ptm================D
export const updatePtmById = async (formData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/ptm`, formData, {
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

// ------------------------Add Ptm---------------------
export const AddPtm = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/ptm`, formData, {
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
// ------------------------delete Ptm---------------------
export const deletePtm = async (Id) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/ptm/${Id}`, {
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
