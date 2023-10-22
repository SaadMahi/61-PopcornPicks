import React, { useEffect, useState } from 'react';

/**
 * ? we need to create this hook similar to useState
 * * therefore it should return an array of the state and a setter function
 *
 * ? lets get started by the following steps
 * * pass in paramters which will comes from useLocalStorageState() <----
 * * paste in the state which we commented in App.jsx
 * * give some generic names to our pasted data as we want to make this hook reusable
 * * now get the useEffect in here which we used in App.jsx
 *
 * ? now the problem is we also need to pass in the key of data to save in local and for
 * ? that also should be user preferred we gona use a second parameter for that as key
 *
 * * so after we do that we set the key and value accordingly
 */

const useLocaleStorageState = (initialState, key) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : [];
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocaleStorageState;
