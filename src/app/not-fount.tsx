import Link from 'next/link';
const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-700 to-teal-500 text-white">
      <div className="text-center max-w-lg p-10 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-xl">
        <div className="text-9xl font-extrabold mb-4 animate-bounce">404</div>
        <h1 className="text-4xl font-semibold mb-4">Oops! Page Not Found</h1>
        <p className="text-lg font-light mb-6">
          Sorry, the page you &apos; re looking for doesn&apos;t exist or has
          been moved.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 text-xl font-semibold text-indigo-600 bg-white rounded-lg shadow-md transition duration-300 hover:bg-indigo-600 hover:text-white"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;