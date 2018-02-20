import React from 'react'
import Modal from 'react-modal'
import './OptionModal.style.css'

Modal.setAppElement('#root')

const OptionModal = (props) => {

  const selectedOption = props.selectedOption
  const handleCloseModal = props.handleCloseModal

  return (
    <div id="modal-container">
      <Modal
        className="modal"
        closeTimeoutMS={200}
        isOpen={!!selectedOption}
        onRequestClose={handleCloseModal}
        contentLabel={'Selected Option'}
      >
        <h3 className="modal__title">Selected Option</h3>
        {
          selectedOption &&
          <p className="modal__body">{selectedOption}</p>
        }
        <button
          className="modal__button"
          onClick={handleCloseModal}
        >
        Okay
        </button>
      </Modal>
    </div>
  )

}

export default OptionModal