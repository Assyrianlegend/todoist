import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3000/auth/signup';

export const signup = async (email, password) => {
    try {
      const response = await axios.post(API_ENDPOINT, { email, password });
      return response.data.token;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
}