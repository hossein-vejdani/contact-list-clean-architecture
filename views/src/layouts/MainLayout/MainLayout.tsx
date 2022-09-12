import { useEffect } from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'

const MainLayout = () => {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/')
            navigate('/passenger/list')
    }, [])

    return <div><Outlet /></div>
}

export default MainLayout
