import React from 'react';

const Message = ({ message }) => {
  const isSuccess = message === 'Correct!';
  const emoji = isSuccess ? '🎉' : '❌';

  return (
    <div
      data-testid="gameStatus"
      className={`alert ${
        isSuccess ? 'alert-success' : 'alert-danger'
      } position-absolute`}
      role="alert"
      style={{
        maxWidth: '20%',
        top: 'calc(2em + 10vh)',
        left: '50%',
        transform: 'translateX(-50%)',
        visibility: message ? 'visible' : 'hidden',
        backgroundColor: isSuccess ? '#d4edda' : '#f8d7da',
        color: isSuccess ? '#155724' : '#721c24',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        animation: 'fadeInOut 3s ease-in-out',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5em',
      }}
    >
      <span style={{ fontSize: '.6em', marginRight: '0.3em' }}>{emoji}</span>
      <span style={{ fontSize: '0.6em' }}>{message}</span>{' '}
    </div>
  );
};

export default Message;
