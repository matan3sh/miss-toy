import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardList = ({ toys, onDelete }) => {
  return (
    <>
      {toys.map((toy) => (
        <div key={toy._id} className='card grid-3'>
          <div>
            <img src={toy.img} alt='toy-thumb' className='toy-img-dashboard' />
            {toy.inStock ? (
              <span
                className='badge badge-success'
                style={{
                  display: 'block',
                  width: '40%',
                  fontSize: '16px',
                }}
              >
                Item In Stock
              </span>
            ) : (
              <span
                className='badge badge-danger'
                style={{
                  display: 'block',
                  width: '40%',
                  fontSize: '16px',
                }}
              >
                Out Of Stock
              </span>
            )}
          </div>
          <div>
            <h5 style={{ fontSize: '18px' }}>
              <span className='badge badge-light'>Name:</span> {toy.name}
            </h5>
          </div>
          <div>
            <Link to={`/${toy._id}`}>
              <button className='btn btn-primary'>View</button>
            </Link>
            <Link to={`/edit/${toy._id}`}>
              <button className='btn btn-dark'>Edit</button>
            </Link>
            <button
              className='btn btn-danger'
              onClick={() => onDelete(toy._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
