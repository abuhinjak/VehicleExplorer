import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import DeleteModal from "../../components/Modal/DeleteModal";

import axiosClient from "../../lib/axiosClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import "./make.scss";

function Make() {
    const [make, setMake] = useState({});
    const [models, setModels] = useState([]);
    const { makeId, modelId } = useParams();
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    useEffect(() => {
        axiosClient
            .get(`/makes/${makeId}`)
            .then((res) => {
                setMake(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        axiosClient
            .get(`/makes/${makeId}/models`)
            .then((res) => {
                setModels(res.data);
            })
            .catch((err) => console.log(err));
    }, [make]);

    return (
        <main className="make--info-wrap">
            <h1 className="make--title text-center container">
                {make.name}
                <span className="make--title-bg">{make.name}</span>
            </h1>

            <div className="make--info-content container">
                <div className="make--info-img-wrap">
                    <img
                        src={make.logo}
                        alt={make.name}
                        referrerPolicy="no-referrer"
                    />
                </div>
                <div className="make--info-desc">
                    <p className="mb-4">{make.desc}</p>
                    <div className="model--info-btn-wrap">
                        <Link
                            to={`/makes/${makeId}/edit`}
                            className="btn btn--primary me-4"
                        >
                            Edit data
                        </Link>
                        <button
                            className="btn btn--secondary"
                            onClick={handleShowModal}
                        >
                            Delete
                        </button>
                    </div>
                </div>
                <DeleteModal
                    show={showModal}
                    onClose={handleCloseModal}
                    onSave={handleCloseModal}
                    link={`/makes/${makeId}`}
                    name={make.name}
                    modelId={modelId}
                    makeId={makeId}
                />
            </div>

            {models.length > 0 ? (
                <div className="models--wrap container">
                    <div className="models--wrap-header">
                        <h2 className="main--title">
                            Check Out Our{" "}
                            <span className="main--title-bold">Models</span>
                        </h2>
                        <Link
                            to={`/makes/${makeId}/models/new`}
                            className="btn btn--primary"
                        >
                            Add New Model
                        </Link>
                    </div>

                    <div className="models--list">
                        {models.map((model) => (
                            <Link
                                key={model.id}
                                to={`/makes/${makeId}/models/${model.id}`}
                            >
                                <div className="model--item">
                                    <div className="model--img-wrap">
                                        <img
                                            src={model.image}
                                            alt={model.name}
                                            referrerPolicy="no-referrer"
                                        />
                                    </div>
                                    <div className="model--text-wrap">
                                        <h2 className="model--name text-center">
                                            {model.name}
                                        </h2>
                                        <p className="model--desc text-end">
                                            Read More{" "}
                                            <FontAwesomeIcon
                                                icon={faArrowUpRightFromSquare}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="models--wrap container">
                    <div className="models--wrap-header">
                        <h2 className="main--title">
                            No <span className="main--title-bold">Models</span>{" "}
                            Available
                        </h2>
                        <Link
                            to={`/makes/${makeId}/models/new`}
                            className="btn btn--primary"
                        >
                            Add New Model
                        </Link>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Make;
