import './PassengerLayout.scss'
import { Outlet } from 'react-router-dom'
const PassengerLayout = () => {
    return (
        <div className="passenger-layout">
            <h1 className="passenger-layout__title">Passenger Management</h1>
            <Outlet />
        </div>
    )
}

export default PassengerLayout