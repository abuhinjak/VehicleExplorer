import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    makes: [],
    models: [],
    selectedMake: null,
    selectedModel: null,
    setMakes: () => {},
    setModels: () => {},
    setSelectedMake: () => {},
    setSelectedModel: () => {},
});

export const ContextProvider = ({ children }) => {
    const [makes, _setMakes] = useState([]);
    const [models, _setModels] = useState([]);
    const [selectedMake, _setSelectedMake] = useState(null);
    const [selectedModel, _setSelectedModel] = useState(null);

    const setMakes = (makes) => {
        _setMakes(makes);
    };

    const setModels = (models) => {
        _setModels(models);
    }

    const setSelectedMake = (selectedMake) => {
        _setSelectedMake(selectedMake);
    }

    const setSelectedModel = (selectedModel) => {
        _setSelectedModel(selectedModel);
    }

    return (
        <StateContext.Provider
            value={{
                makes,
                models,
                selectedMake,
                selectedModel,
                setMakes,
                setModels,
                setSelectedMake,
                setSelectedModel,
            }}>
                {children}
            </StateContext.Provider>
    )
};

export const useStateContext = () => useContext(StateContext);