import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { Form } from 'react-bootstrap'

interface IProps {
  isOpen: boolean,
  onClose: (data: Record<string, any>) => void,
}

const WelcomeModal = ({isOpen, onClose}: IProps) => {
  const [name, setName] = useState('')
  const onHide = () => {
    onClose({
      'name': name
    })
  }
  return (
    <Modal show={isOpen} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Climate Zero Prototype Test</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Hi! Thank you for agreeing to test the prototype of our CPSC 444 group! <br/>
        Climate Zero is an online shopping browser extension designed to help you make more informed climate decisions while you shop. 
        For this test, we're going to show you an online grocery store checkout page. 
        We would like you to assemble a cart which simulates the weekly shopping you may do for yourself or your household. 
        Not all the items you usually buy may be here; please choose the next best substitute for your usual shopping items.
        There will be two prototypes, so we're going to ask you to complete this shopping task twice, 
        while taking into account the different presentation of climate information available. Instructions for each 
        prototype will be available as they appear. <br/>
        To start, enter your name:
        <Form.Control type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Get Started! 
        </Button>
      </Modal.Footer>
    </Modal>
    )
  }
  
  export default WelcomeModal