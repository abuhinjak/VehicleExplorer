import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import axiosClient from "../../lib/axiosClient";
import "./model.scss";
import { useStateContext } from "../../contexts/ContextProvider";
import DeleteModal from '../../components/Modal/DeleteModal';

function Model() {
    const [model, setModel] = useState({});
    const { makeId, modelId } = useParams();
    const [showModal, setShowModal] = useState(false);

    const { makes } = useStateContext();
    const makeName = makes.find(make => make.id === makeId)?.name;

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    useEffect(() => {
        axiosClient
            .get(`/makes/${makeId}/models/${modelId}`)
            .then((res) => {
                setModel(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <main className="model--info-wrap">
            <div className="btn--return container">
              <Link className="btn btn--secondary" to={`/makes/${makeId}`}>
                Return {makeName ? `to ${makeName}` : ''}
              </Link>
            </div>

            <h1 className="model--title text-center container">
                {model.name}
                <span className="model--title-bg">{model.name}</span>
            </h1>

            <div className="model--info-content container">
                <div className="model--info-img-wrap">
                    <img src={model.image} alt={model.name} />
                </div>
                <div className="model--info-desc">
                    <p className="mb-4">
                        {model.desc}
                    </p>
                    <div className="model--info-btn-wrap">
                      <Link
                          to={`/makes/${makeId}/models/${modelId}/edit`}
                          className="btn btn--primary me-4"
                      >
                          Edit data
                      </Link>
                      <button className="btn btn--secondary"  onClick={handleShowModal}>
                        Delete
                      </button>
                    </div>
                </div>
            </div>
            <DeleteModal
              show={showModal}
              onClose={handleCloseModal}
              link={`/makes/${makeId}/models/${modelId}`}
              name={model.name}
              modelId={modelId}
              makeId={makeId}
            />
        </main>
    );
}

export default Model;
