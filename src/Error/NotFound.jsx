import { Link } from "react-router-dom";
const NotFound=()=>{
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
      <div className="text-center text-white space-y-4">
        <h1 className="text-7xl font-extrabold text-blue-500">404</h1>

        <p className="text-xl font-semibold">
          Page not found
        </p>

        <p className="text-sm text-slate-400">
          The page you are looking for doesn’t exist or was moved.
        </p>

        <Link
          to="/dashboard"
          className="inline-block mt-4 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700 transition"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}

export default NotFound;