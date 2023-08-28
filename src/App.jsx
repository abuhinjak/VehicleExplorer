import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer'

import 'react-toastify/dist/ReactToastify.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/scss/main.scss'

function App() {

    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </>
    )
}

export default App