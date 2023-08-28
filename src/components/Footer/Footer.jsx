import './footer.scss'

function Footer() {
    const currentYear = new Date().getFullYear();    

    return (
        <footer className='footer--wrap'>
            <div className="footer--container container">
                <p className='footer--container-text'>
                    &copy; {currentYear} <span className='footer--container-text-bold'>Vehica</span> - All rights reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer
