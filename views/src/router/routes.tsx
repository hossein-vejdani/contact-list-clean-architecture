import { RouteObject } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout/MainLayout'
import { importerAll } from '../common/utils/importAll.util';

const modulesRoutes = importerAll<{ default: RouteObject }[]>(require.context('../modules', true, /\**\/routes.tsx/));



export const routes: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: modulesRoutes.flatMap(item => item.default)
    }
]
console.log(routes);
