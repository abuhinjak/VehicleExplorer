import { createBrowserRouter } from "react-router-dom";

import App from './App'
import Makes from './pages/Makes/Makes'
import Make from './pages/Make/Make'
import Models from './pages/Models/Models'
import Model from './pages/Model/Model'
import NotFound from './pages/NotFound/NotFound'
import ShowCase from "./pages/Showcase/ShowCase";
import MakeForm from "./components/Forms/MakeForm";
import ModelForm from "./components/Forms/ModelForm";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <ShowCase />
            },
            {
                path: '/makes',
                element: <Makes />
            },
            {
                path: '/makes/:makeId',
                element: <Make key={'make'} />
            },
            {
                path: '/makes/:makeId/edit',
                element: <MakeForm key={'makeUpdate'} />
            },
            {
                path: '/makes/new',
                element: <MakeForm key={'makeCreate'} />
            },
            {
                path: 'makes/:makeId/models',
                element: <Models />
            },
            {
                path: 'makes/:makeId/models/:modelId',
                element: <Model key={'model'} />
            },
            {
                path: 'makes/:makeId/models/:modelId/edit',
                element: <ModelForm key={'modelUpdate'} />
            },
            {
                path: 'makes/:makeId/models/new',
                element: <ModelForm key={'modelCreate'}/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;