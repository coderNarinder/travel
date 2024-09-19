import React, { useEffect, useRef } from 'react';

export default function LocationSearchInput({
  setLocation, register, errors, setValue, setError
}) {
  const apiKey = 'AIzaSyAMYBMtmVO65WtPcEY8yk89U04iUm8HY-E';
  const inputRef = useRef(null); // Reference to the input field

  useEffect(() => {
    // Load Google Maps Places API script
    const loadScript = (url) => {
      const script = document.createElement('script');
      script.src = url;
      script.async = true;
      document.body.appendChild(script);
    };

    loadScript(`https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`);

    const initAutocomplete = () => {
      if (window.google && window.google.maps) {
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
          types: ['geocode'],
        });

        autocomplete.addListener('place_changed', () => {
          const place = autocomplete.getPlace();
          if (place.geometry) {
            const { lat, lng } = place.geometry.location;
            setValue('address', place.formatted_address);
            setValue('latitude', lat());
            setValue('longitude', lng());
            setLocation({ latitude: lat(), longitude: lng() });
          } else {
            setError('address', {
              type: 'manual',
              message: 'Unable to retrieve location details.',
            });
          }
        });
      }
    };

    // Initialize autocomplete when the script is loaded
    window.initMap = initAutocomplete;

    // Wait for Google Maps API to load
    const intervalId = setInterval(() => {
      if (window.google && window.google.maps) {
        clearInterval(intervalId);
        initAutocomplete();
      }
    }, 500);

    return () => clearInterval(intervalId); // Cleanup
  }, [apiKey, setValue, setError, setLocation]);

  return (
    <>
      <fieldset>
        <label htmlFor="business">Search Location</label>
        <input
          type="text"
          ref={inputRef}
          {...register('address', { required: 'This field is required' })}
          placeholder="Enter Business Address"
        />
        {errors.address && <span className="error">{errors.address.message}</span>}
      </fieldset>
    </>
  );
}
