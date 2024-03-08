import './App.css'
import Concept from './concept/Concept'
import PureCounterComponent from './components/PureCounterComponent'
import SimpleCounterComponent from './components/SimpleCounterComponent'


function App() {

  return (
    <>
    <SimpleCounterComponent />
    <PureCounterComponent />
    </>
  )
}

export default App