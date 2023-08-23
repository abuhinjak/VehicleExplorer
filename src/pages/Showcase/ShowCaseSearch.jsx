import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import axiosClient from '../../lib/axiosClient'
import { useStateContext } from '../../contexts/ContextProvider'

import Select from 'react-select'

function ShowCaseSearch() {
  const { makes, models, selectedMake, selectedModel, setMakes, setModels, setSelectedMake, setSelectedModel } = useStateContext()
  const navigate = useNavigate()
  
  const [makesOptions, setMakesOptions] = useState([])
  const [modelsOptions, setModelsOptions] = useState([])

  useEffect(() => {
    axiosClient.get('/makes')
      .then(res => {
        setMakes(res.data)
        console.log(res.data)
        setMakesOptions(res.data.map(make => ({ value: make.id, label: make.name })))
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    if (selectedMake) {
      axiosClient.get(`/makes/${selectedMake.value}/models`)
        .then(res => {
          setModels(res.data)
          setModelsOptions(res.data.map(model => ({ value: model.id, label: model.name })))
        })
        .catch(err => console.log(err))
    }
  }, [selectedMake])

  const handleViewModel = () => {
      if (selectedMake && selectedModel) {
          navigate(`/makes/${selectedMake.value}/models/${selectedModel.value}`)
      }
  }

  return (
      <div className="showcase--search-container">

          <Select onChange={setSelectedMake} className='makes--select' options={makesOptions} />
          <Select onChange={setSelectedModel} className='models--select' options={modelsOptions} />

          <button onClick={handleViewModel} className="btn btn-primary">View Model</button>

      </div>
  )
}

export default ShowCaseSearch
