import React from 'react';
import { ArrowLeft, ArrowRight } from './Icons';

export const MoviesListHeader = ({ page, setPage }) => (
  <>
    <header className="pa3 flex justify-center">
      <button className="btn btn-outline-dark" onClick={() => setPage(page - 1)}>
        <ArrowLeft />
      </button>
      <input type="text" className="form-control" disabled value={page} style={{ width: '3rem', textAlign: 'center' }} />
      <button className="btn btn-outline-dark" onClick={() => setPage(page + 1)}>
        <ArrowRight />
      </button>
    </header>
  </>
);
