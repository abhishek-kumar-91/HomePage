import Header from "./components/Header"
import LeftSide from "./components/LeftSide"
import RightSide from "./components/RightSide"
import "./App.css"


function App() {
  

  return (
    <>

      <Header />
      <div className = "outerContainer">
      <LeftSide />
      <RightSide />
      </div>
    </>
  )
}

export default App
