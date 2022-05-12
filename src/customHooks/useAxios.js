import axios from "axios";
import { useAuth } from "../Context/loginContext";

export function useAxios() {
  const { token } = useAuth();
  let response = "";
  let err = "";
  async function customAxios({ method, url, data = {} }) {
    try {
      const res = await axios({
        method,
        url,
        data,
        headers: { authorization: token },
      });
      if (res.status === 200 || res.status === 201) {
        response = res.data;
      }
      
    } catch (error) {
      console.log(error);
      err = error;
    }

    return { response, err };
  }

  return { customAxios };
}
