import { useEffect, useState } from 'react';
import axiosClient from '../../lib/axiosClient';
import { useParams } from 'react-router-dom';

function Model() {
  const { makeId, modelId } = useParams();
  const [modelData, setModelData] = useState(null);

  useEffect(() => {
    axiosClient.get(`/makes/${makeId}/models/${modelId}`)
      .then(res => {
        setModelData(res.data);
        console.log(res.data);
      })
      .catch(err => console.log(err));
  }, [makeId, modelId]);

  if (!modelData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="model-details">
      <h2>{modelData.name}</h2>
      <p>Manufacturer: {modelData.make}</p>
      {/* Prikažite ostale podatke o modelu */}
    </div>
  );
}

export default Model;
