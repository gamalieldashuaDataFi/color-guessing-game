import React from 'react';

const Message = ({ message }) => (
  <div className="text-center my-3">
    {message && (
      <div
        data-testid="gameStatus"
        className={`alert ${
          message === 'Correct!' ? 'alert-success' : 'alert-danger'
        }`}
        role="alert"
        style={{
          maxWidth: '50%',
          position: 'absolute',
          top: 'calc(2rem + 8vh)',
          left: '50%',
          transform: 'translateX(-50%) !important',
          borderRadius: '0',
          border: '0',
          color: message === 'Correct!' ? '#28a745' : '#dc3545',
          animation: 'fadeInOut 3s ease-in-out',
        }}
      >
        {message}
      </div>
    )}
  </div>
);

export default Message;
