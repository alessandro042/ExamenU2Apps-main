import React from 'react';
import { Link } from 'react-router-dom';
import { FiAlertTriangle } from 'react-icons/fi'; 

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <div className="max-w-lg px-6 py-8 bg-white shadow-md rounded-lg text-center">
      <div className="flex items-center justify-center mb-6">
        <FiAlertTriangle className="text-red-500 text-6xl mr-4" />
        <h1 className="text-4xl font-bold text-red-600">401 - Unauthorized</h1>
      </div>
      <p className="text-lg text-gray-700 mb-4">
        Parece que no tienes permisos para acceder a esta página.
      </p>
      <p className="text-gray-700 mb-6">
        Si crees que esto es un error, por favor contacta al administrador.
      </p>
      <div className="flex justify-center">
        <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-blue-600">
          Volver al inicio
        </Link>
      </div>
    </div>
  </div>
);
};

export default NotFoundPage;
