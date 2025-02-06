import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const RoundCompleteModal = ({ show, onHide, onNewGame, score }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Round Completed</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Congratulations! You have completed the round.</p>
        <p className="text-danger bold">
          <span className="bold">Total: </span>
          {score + '/20 points'}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={onNewGame}>
          Start New Game
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RoundCompleteModal;
