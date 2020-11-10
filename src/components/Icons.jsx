import React from 'react';

export const ArrowLeft = () => (
  <>
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
    </svg>
  </>
);

export const ArrowRight = () => (
  <>
    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
    </svg>
  </>
);

export const Loading = () => (
  <>
    <div className="flex justify-center items-center"
      style={{ position: 'absolute', width: '100vw', height: '100vh', zIndex: '9999', background: 'rgba(0, 0, 0, 0.1)' }}>
      <div className="spinner-grow" role="status" style={{ width: '5rem', height: '5rem' }}>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </>
);
