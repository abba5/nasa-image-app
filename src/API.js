import {
  NASA_AUTH_API
} from './config';

const apiSettings = {
  fetchNasaTimelineImage: async ({ startDate, endDate }) => {
    const endpoint = `${NASA_AUTH_API}&start_date=${startDate}&end_date=${endDate}`;
    return await (await fetch(endpoint)).json();
  },
  fetchNasaOneDayImage: async (date) => {
    const endpoint = `${NASA_AUTH_API}&date=${date}`;
    return await (await fetch(endpoint)).json();
  },
  fetchNasaRandomImage: async (count) => {
    const endpoint = `${NASA_AUTH_API}&count=${count}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
