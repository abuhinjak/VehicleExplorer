import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

import './notFound.scss'

function NotFound() {
  return (
   <>
    <Navbar />
     <div className="not-found-page">
      <h1 className="main--title text-center mb-5">
        404 Not <span className="main--title-bold">Found</span>
      </h1>
    </div>
    <Footer />
   </>
  )
}

export default NotFound
