import geolocator from 'geolocator';

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumWait: 10000, // max wait time for desired accuracy
  maximumAge: 0, // disable cache
  desiredAccuracy: 30, // meters
  fallbackToIP: true, // fallback to IP if Geolocation fails or rejected
};

export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    geolocator.locate(options, (err, location) => {
      if (err) reject(err);
      else resolve(location.coords);
    });
  });
};
