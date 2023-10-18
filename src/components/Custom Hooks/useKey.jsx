import React, { useEffect } from 'react';

const useKey = (key, action) => {
  useEffect(() => {
    const esc = (e) => {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
        // //console.log('escaped');
      }
    };

    document.addEventListener('keydown', esc);

    return function () {
      document.removeEventListener('keydown', esc); // ! as soon as the movie details compo unmounts the event listener will be removed from the document
    };
  }, [key, action]);
};

export default useKey;
