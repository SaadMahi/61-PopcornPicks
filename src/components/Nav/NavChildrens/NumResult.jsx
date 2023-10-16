import React from 'react';

function NumResult({ movies }) {
  return (
    <p className='num-results hideOnSm'>
      Found <strong>{movies.length}</strong> results
    </p>
  );
}

export default NumResult;
