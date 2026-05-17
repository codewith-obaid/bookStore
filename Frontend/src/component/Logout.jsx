import React from 'react'
import { useAuth } from '../context/AuthProvider';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
function Logout() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"

    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
      try {
        setAuthUser({
          ...authUser,
          user: null
        })
        localStorage.removeItem("users");
        toast.success("Logout Successfully");
        navigate(from, {replace: true});
        setTimeout(()=>{
           window.location.reload();
        }, 2000);
      } catch (error) {
        toast.error("Error: " +error.message);
        setTimeout(() => {}, 2000);
      }
    }
  
  return (
    <div>
      <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout