import axios from 'axios';

const api = axios.create({
  baseURL: 'https://publisher.assetstore.unity3d.com/api',
});

api.defaults.headers = {
  Cookie: `kharma_session=sqerdWKVxeWtMSg_riP4mpHB8ccQqoZbsB6hKtos4In-qbWpYFylxjjTD9miqFGya_LYO4yK1jVWq77XEtoPag; kharma_token=%2Fqm1qWBcpcY40w%2FZoqhRsmvy2DuMitY1Vqu%2B1xLaD2o`,
};

export default api;
