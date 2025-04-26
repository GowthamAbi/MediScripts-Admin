import { Link } from 'react-router-dom';

const InventoryHomePage = () => {
  const auth = [
    { label: "Sign Up", href: "/api/v1/auth/inventory/register" },
    { label: "Sign In", href: "/api/v1/auth/inventory/login" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-100"> 
      <h1 className="text-black text-8xl font-bold mb-6 text-center">Welcome to CustomerHome</h1>
      <div className="space-x-4">
        {auth.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="w-full sm:w-auto bg-blue-600 shadow-md px-6 py-3 text-center text-lg text-black font-medium rounded-md hover:bg-green-400 transition-all duration-200"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default InventoryHomePage;
