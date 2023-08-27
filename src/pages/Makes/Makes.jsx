import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../lib/axiosClient";

import './makes.scss'

function Makes() {
    const [makes, setMakes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const makesPerPage = 8;

    useEffect(() => {
        axiosClient.get(`/makes`)
            .then(res => {
                setMakes(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    const handleMakeSearch = (e) => {
        const searchQuery = e.target.value;

        axiosClient.get(`/makes?search=${searchQuery}`)
            .then(res => {
                setMakes(res.data)
            })
            .catch(err => console.log(err))
    }

    const lastMakeIndex = currentPage * makesPerPage;
    const firstMakeIndex = lastMakeIndex - makesPerPage;
    const currentMakes = makes.slice(firstMakeIndex, lastMakeIndex);

    const totalPages = Math.ceil(makes.length / makesPerPage);

    const handlePageClick = (page) => {
        setCurrentPage(page);
    }

    return (
        <main className="makes--container animated fadeInDown">
            <h1 className="makes--title text-center">Find Your <span className="makes--title-bold">Favorite </span>Makes</h1>
            <div className="makes--list-header mb-5 container">
                <div className="search--input">
                    <input type="text" placeholder="Search..." onChange={handleMakeSearch}/>
                </div>
                <Link to="/makes/new" className="btn btn--primary">
                  Add New Make
                </Link>
            </div>
            <div className="makes--list-wrap">
                <div className="container makes--list">
                    {
                        currentMakes.length > 0 ?
                        currentMakes.map((make) => (
                            <Link key={make.id} to={`/makes/${make.id}`}>
                                <div className="makes--item">
                                    <div className="make--img-wrap">
                                        <img
                                            src={make.image}
                                            alt={make.name}
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                    <div className="make--text-wrap">
                                        <h2 className="make--name text-center">{make.name}</h2>
                                        <p className="make--desc">
                                        {make.desc && make.desc.split(' ').slice(0, 16).join(' ')}...
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        )) : (
                            <div className="no-makes--wrap">
                                <h2 className="no-makes--title text-center">No Makes Found</h2>
                            </div>
                        )
                    }
                </div>

                <div className="pagination--wrap container">
                    {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageClick(page)}
                            className={currentPage === page ? 'active' : ''}
                            disabled={currentPage === page}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default Makes;