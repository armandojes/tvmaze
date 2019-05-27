import axios from 'axios';

const api = {
  get_list: async () => {
    const response = await axios({
        method: 'get',
        url: 'http://api.tvmaze.com/schedule',
    });
    return response.data;
  },
  get_single: async (id) => {
    const response = await axios({
        method: 'get',
        url: `http://api.tvmaze.com/shows/${id}`,
    });
    return response.data;
  },
}

export default api;
