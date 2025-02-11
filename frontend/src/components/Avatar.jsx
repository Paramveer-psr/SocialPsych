import { useDispatch, useSelector } from "react-redux";
import { signOutRoute } from "../utils/ApiRoutes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { checkAuth, signOut } from "../store/slices/authSlice";
import { useEffect } from "react";

const Avatar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  // console.log(user);
  // useEffect(() => {
  //   dispatch(checkAuth());
  // }, [dispatch]);
  //console.log(user);

  const handleSignOut = async () => {
    const { data } = await axios.post(
      signOutRoute,
      {},
      { withCredentials: true }
    );
    dispatch(signOut());
    // console.log(data);
    if (data.success) {
      navigate("/sign-in");
    }
  };

  return (
    <div className="relative inline-block group">
      <img
        id="avatarButton"
        type="button"
        data-dropdown-toggle="userDropdown"
        data-dropdown-placement="bottom-start"
        className="w-10 h-10 rounded-full cursor-pointer"
        src={user.avatar}
        alt="User dropdown"
      />

      <div
        id="userDropdown"
        className="absolute right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 group-hover:block"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
          <div>{user.username}</div>
          <div className="font-medium truncate">{user.email}</div>
        </div>
        {/* <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul> */}
        <div className="py-1">
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            onClick={handleSignOut}
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
