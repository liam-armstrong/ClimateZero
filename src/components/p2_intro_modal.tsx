import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
// import { useState } from 'react'

interface IProps {
  isOpen: boolean,
  onClose: () => void,
}

const P2IntroModal = ({isOpen, onClose}: IProps) => {
  // const [selectedGoalLevel, setSelectedGoalLevel] = useState(goalLevel.Easy)
  // const onHide = () => {
  //   onClose(selectedGoalLevel)
  // }
  return (
    <Modal show={isOpen} onHide={() => {onClose()}} centered>
      <Modal.Header closeButton>
        <Modal.Title>"Recommendation" Prototype Instructions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          For this prototype, please complete your simulated shopping as best as possible.<br />
          You may see recommendations for items based on your shopping; feel free to encorporate those as you wish.
          Even though these tasks are simulated shopping, please try to balance your cart based on budget as you usually would while grocery shopping.
          Thank you!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => {onClose()}}>
          Begin Task
        </Button>
      </Modal.Footer>
    </Modal>
    )
  }
  
  export default P2IntroModal