import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ErrorModal({
  showErrorModal,
  handleShowErrorModal,
  handleCloseErrorModal,
}) {
  return (
    <>
      <Button variant="primary" onClick={handleShowErrorModal}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={showErrorModal}
        onHide={handleCloseErrorModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Ошибка</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Извините, возникла ошибка API. Мы работаем над исправлением, вы можете
          попробовать обновить страницу. Возможно, это поможет восстановить
          соединение и загрузить данные корректно. Спасибо за понимание!
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
