import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/main.scss'

function App() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default App