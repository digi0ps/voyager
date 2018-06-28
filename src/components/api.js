import Axios from 'axios';

const host = 'https://juno.jrmyphlmn.me/api';

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
  login: (username, password) => {
    return Axios.post(`${host}/auth-token/`, {
      username: username,
      password: password
    })
      .then(res => {
        localStorage.AuthToken = res.data.token;
        localStorage.Username = username;
        return true;
      });
  },
  fetchPlaylist: () => {
    return Axios({
      url: `${host}/playlist/`,
      method: 'get',
      headers: {'Authorization': `Token ${localStorage.AuthToken}`}
    })
      .then(function(response) {
        return response;
      });
  },
  fetchSong: (id) => {
    return Axios({
      url: `${host}/playlist/${id}/`,
      method: 'get',
      headers: {'Authorization': `Token ${localStorage.AuthToken}`}
    })
      .then(function(response) {
        return response;
      });
  },
};

export default api;