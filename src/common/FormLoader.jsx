import React from 'react';
import ClipLoader from 'react-spinners/PuffLoader'; // Ensure you install react-spinners

const FormLoader = ({ loading }) => {
  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <ClipLoader color={'#00afee'} loading={loading} size={60} />
    </div>
  );
};

export default FormLoader;
