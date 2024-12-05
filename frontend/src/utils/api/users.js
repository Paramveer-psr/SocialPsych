import axios from "axios";
import { getUsersRoute } from "../ApiRoutes";

export const fetchUsers = async () => {
  try {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)accessToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    const response = await axios.get(getUsersRoute, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
