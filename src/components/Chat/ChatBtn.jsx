import React from 'react';
import '../../style/ChatBtn.css';

export const ChatBtn = ({ onToggle }) => {
  return (
    <div className='gotopbtn pointer' onClick={() => onToggle()}>
      {' '}
      <i className='fas fa-comments'></i>{' '}
    </div>
  );
};
