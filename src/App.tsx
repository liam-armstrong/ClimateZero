import { useState } from "react"
import Cart from "./CartScreen"
import WelcomeModal from "./components/welcome_modal"
import { carts } from "./cart"
import EndModal from "./components/end_modal"
import { Firestore } from "firebase/firestore"

interface IProps {
  firestore: Firestore,
}

export const App = ({firestore}: IProps) => {
  const [dataExport, setDataExport] = useState({})
  const [endScreen, setEndScreen] = useState(false)
  const [welcomeScreen, setWelcomeScreen] = useState(true)
  const [stage, setStage] = useState(0)
  const [randomNumber] = useState(Math.floor(Math.random() * 2))
  const [stageToPrototype] = useState([randomNumber, randomNumber ? 0 : 1])

  const closeWelcomeModal = (data: Record<string, any>) => {
    saveResultsDataToState(data)
    setWelcomeScreen(false) 
  }

  const saveResultsDataToState = (data: Record<string, any>) => {
    setDataExport(prevData => {
      return {...data, ...prevData}
    })
  }

  const completePrototype = (results: Record<string, any>) => { 
    saveResultsDataToState(results)
    if(stage === 1) {
      setEndScreen(true)
    } else {
      setStage(1);
    }
  }

  const prototypes = [
    <Cart p1={true} p2={false} start={!welcomeScreen} onComplete={completePrototype.bind(this)} initialCart={carts[0]}></Cart>,
    <Cart p1={false} p2={true} start={!welcomeScreen} onComplete={completePrototype.bind(this)} initialCart={carts[1]}></Cart>
  ]

  return <div>
    <WelcomeModal isOpen={welcomeScreen} onClose={closeWelcomeModal} />
    {!welcomeScreen && !endScreen && prototypes[stageToPrototype[stage]]}
    <EndModal isOpen={endScreen} dataExport={dataExport} firestore={firestore}/>
  </div>
}