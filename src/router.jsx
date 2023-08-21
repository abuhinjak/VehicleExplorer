import { createBrowserRouter } from "react-router-dom";

import App from './App'
import Makes from './pages/Makes/Makes'
import Make from './pages/Make/Make'
import Models from './pages/Models/Models'
import Model from './pages/Model/Model'
import NotFound from './pages/NotFound/NotFound'
import ShowCase from "./pages/Showcase/ShowCase";

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
                element: <Make key="makeUpdate"/>
            },
            {
                path: '/makes/new',
                element: <Make key="makeCreate"/>
            },
            {
                path: 'makes/:makeId/models',
                element: <Models />
            },
            {
                path: 'makes/:makeId/models/:modelId',
                element: <Model />
            },
            {
                path: 'makes/:makeId/models/new',
                element: <Model key="modelCreate"/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default router;