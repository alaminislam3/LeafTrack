import { Link } from "react-router"; 
import errorimg from "../assets/error.jpg";

const Error = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-start text-center px-4 md:p-40"
      style={{ backgroundImage: `url(${errorimg})` }}
    >
      <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-md max-w-md">
        <h1 className="text-7xl font-bold text-green-700">404</h1>
        <p className="text-2xl mt-4 text-gray-700 font-semibold">
          Oops! Page Not Found
        </p>
        <p className="mt-2 text-gray-500">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
