import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ErrorModal({ errorMessage, handleCloseErrorModal }) {
  return (
    <>
      <Modal
        show={!!errorMessage}
        onHide={handleCloseErrorModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ошибка</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span>Извините, возникла ошибка API.</span>
          <br />
          <span style={{ fontWeight: '600' }}> {errorMessage} </span>
          <br />
          <span>
            Мы работаем над исправлением, вы можете попробовать обновить
            страницу. Возможно, это поможет восстановить соединение и загрузить
            данные корректно. <br />
            Спасибо за понимание!
          </span>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="btn btn-outline-primary"
            onClick={() => window.location.reload()}
          >
            Обновить
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ErrorModal;
