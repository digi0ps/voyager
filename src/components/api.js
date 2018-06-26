import Axios from 'axios';

const host = 'http://localhost:8000/api';

const api = {
  story: (id) => {
    return Axios({
      url: `${host}/stories/${id}/`,
      method: 'get',
    })
      .then(function(response) {
        return response;
      });
  },
  stories: () => {
    return Axios({
      url: `${host}/stories/`,
      method: 'get',
    })
      .then(function(response) {
        return response;
      });
  },
  changelogs: () => {
    return Axios({
      url: `${host}/stats/changelogs/`,
      method: 'get',
    })
      .then(function(response) {
        return response;
      });
  },
};

export default api;