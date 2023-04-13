import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3000/projects/create';

export const createProject = async (project) => {
    try {
      const response = await axios.post(API_ENDPOINT, project);
      return response.data.token;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
}