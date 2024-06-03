import './App.sass'
import { NavigationBar } from './components/NavBar/NavigationBar'
import { MainContent } from './components/MainContent/MainContent'

function App() {

  return (
    <div className="App">
      <NavigationBar/>
      <MainContent/>
    </div>
  )
}

export default App
