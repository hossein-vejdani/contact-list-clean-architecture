import { RouteObject } from 'react-router-dom'
import MainLayout from '../layouts/PassengerLayout/PassengerLayout'
import PassengerInfo from '../pages/PassengerInfo/PassengerInfo'
import PassengerList from '../pages/PassengerList/PassengerList'

const routes: RouteObject[] = [
    {
        path: 'passenger',
        element: <MainLayout />,
        children: [
            {
                index: true,
                path: 'list',
                element: <PassengerList />,
            },
            {
                path: 'info/:id',
                element: <PassengerInfo />,
            },
        ]
    }
]

export default routes
