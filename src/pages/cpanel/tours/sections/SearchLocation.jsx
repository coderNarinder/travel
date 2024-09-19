import React, { useEffect } from 'react';

const SearchLocation = ({
  setLocation,
  setAddress,
  setError, 
  setSearchLocation,
  setValue,
  register,
  errors,
}) => {
  const apiKey = 'AIzaSyAMYBMtmVO65WtPcEY8yk89U04iUm8HY-E';

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
          )
            .then((response) => response.json())
            .then((data) => {
              if (data.status === 'OK' && data.results.length > 0) {
                
              } else {
                setError('Unable to retrieve address.');
              }
            })
            .catch((error) => {
              setError('Error fetching address: ' + error.message);
            });
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
    }
  }, [apiKey, setLocation, setError]);

  const handleAddressSearch = (e) => {
    const inputValue = e.currentTarget.value.trim();
    if (!inputValue) return;

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        inputValue
      )}&key=${apiKey}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'OK' && data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry.location;
          setSearchLocation({ latitude: lat, longitude: lng });
          setAddress(data.results[0].formatted_address);
        } else {
          alert('Unable to find address.');
        }
      })
      .catch((error) => {
        alert('Error fetching location: ' + error.message);
      });
  };

  return (
    <>
      <fieldset>
        <label htmlFor="business">Business Address</label>
        <input
          {...register('address', { required: 'This field is required' })}
          type="text"
          onChange={handleAddressSearch}
          placeholder="Enter Business Address"
        />
        {errors.address && <span className="error">{errors.address.message}</span>}
      </fieldset>
    </>
  );
};

export default SearchLocation; 