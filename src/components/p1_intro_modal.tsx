import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { goalLevel } from '../CartScreen'
import { useState } from 'react'

interface IProps {
  isOpen: boolean,
  onClose: (goal: goalLevel) => void,
}

const P1IntroModal = ({isOpen, onClose}: IProps) => {
  const [selectedGoalLevel, setSelectedGoalLevel] = useState(goalLevel.Easy)
  const onHide = () => {
    onClose(selectedGoalLevel)
  }
  return (
    <Modal show={isOpen} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>"Goal" Prototype Instructions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Each item in this shopping cart has a score (out of 100) based on its GHG emissions <br />
          We're first going to have you choose a goal level for your cart. The options for this are:
        </p>
        <ul>
          <li><b className='blue'>Easy</b></li>
          <li><b className='red'>Hard</b></li>
        </ul>
        <p>
          This goal is the <b>average cart score</b> you want to achieve while shopping with ClimateZero
        </p>
        <Form.Select onChange={(e) => setSelectedGoalLevel(parseInt(e.target.value))}>
          <option value={goalLevel.Easy}>Easy</option>
          <option value={goalLevel.Hard}>Hard</option>
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Begin Task
        </Button>
      </Modal.Footer>
    </Modal>
    )
  }
  
  export default P1IntroModal