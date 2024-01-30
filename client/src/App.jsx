import './App.css'
import Header from './components/Header/Header'
import SignUp from './components/registration/SignUp'
import SignIn from './components/registration/SignIn';
import Home from './pages/Home/Home';
import Dashboard from './pages/dashboard/Dashboard'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/main.scss';



function App() {

  return (
    <>
   <Router>
				<Header />
				<Routes>
        <Route path='/' element={<Home />} />
					<Route
						path='/signin'
						element={<SignIn />}
					/>
					<Route
						path='/signup'
						element={<SignUp/>}
					/>
					<Route
						path='/dashboard'
						element={<Dashboard/>}
					/>
				</Routes>
			</Router>
    </>
  )
}

export default App
