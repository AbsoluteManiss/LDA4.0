import { Route, Routes } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar'
import Announcement from './components/Announcement'
import Home from './pages/Home'
import About from './pages/About'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function App() {
	const user = useSelector((state) => state.user.currentUser)

	const dispatch = useDispatch()
	let navigate = useNavigate()

	// const handleLogOut = (e) => {
	// 	//Reset all auth related state and clear localStorage
	// 	e.preventDefault()
	// 	dispatch(logout())
	// 	navigate('/')
	// }


	return (
		<div className="App">
			<Navbar user={user}/>
			<Announcement user={user}/>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
				</Routes>
			</main>
		</div>
	)
}

export default App
