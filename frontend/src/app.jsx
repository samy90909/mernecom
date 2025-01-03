import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './pages/Home'
import Header from './components/Header';

export function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='navbar' element={<Navbar />} />
      </Routes>

    </BrowserRouter>
  )
}
