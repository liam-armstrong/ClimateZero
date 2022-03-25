import Modal from 'react-bootstrap/Modal'
import { useEffect } from 'react'
import { Firestore } from 'firebase/firestore';
import { collection, addDoc } from "firebase/firestore"; 

interface IProps {
  dataExport: Record<string, any>
  isOpen: boolean
  firestore: Firestore
}

const EndModal = ({dataExport, isOpen, firestore}: IProps) => {
  useEffect(() => {
    const uploadResults = async () => {
      try {
        const docRef = await addDoc(collection(firestore, "results"), dataExport);
        console.log("Document saved with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
    if(isOpen) {
      uploadResults()
    }
  }, [firestore, dataExport, isOpen])

  return (
    <Modal show={isOpen} centered>
      <Modal.Header closeButton>
        <Modal.Title>Thank you!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You've now completed the active portion of the experiment. Thank you for your help!
        Please return to the qualtrics survey to answer a few quick questions about your experience.
        You may now close this window. 
      </Modal.Body>
    </Modal>
    )
  }
  
  export default EndModal