const liveHost = 'https://us-central1-mealsapp-585b8.cloudfunctions.net';
const localHost = 'http://localhost:5001/mealsapp-585b8/us-central1';

export const isDevelopment = process.env.NODE_ENV === 'development';
export const host = liveHost;
// export const host = isDevelopment ? localHost : liveHost;
