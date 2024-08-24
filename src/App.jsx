
import './App.css';
import{
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

 import Home from './components/Home'
 import About from './components/About'
 import Foods from './components/Foods'
 import Contact from './components/Contact'

export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Foods' element={<Foods />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}


