import axios from 'axios';

export const accessToken = `pk.eyJ1IjoidmlubnljYW5jb2RlIiwiYSI6ImNrNjBhN2I4cDA1eTIza3NjMDhmc3prdnEifQ._6AKRg7gimHhIbM5pfBTXA`;

export default axios.create({
  baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/`
});
