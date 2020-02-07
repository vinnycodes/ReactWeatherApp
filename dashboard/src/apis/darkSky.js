import axios from 'axios';

const darkKey = `14087dfbaafa09516688998dfadf5c73`;

export default axios.create({
  baseURL: `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/`,
  params: {
    key: `${darkKey}`
  }
});
