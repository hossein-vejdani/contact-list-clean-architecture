import { GetLastSeenPassengersController } from '@contact-management/controller'
import type { Passenger } from '@contact-management/core'
import { useEffect, useState } from 'react'

export const useGetLastSeenPassengers = () => {
    const [data, setData] = useState<Passenger[]>([])

    const [loading, setLoading] = useState(false)

    const [controller] = useState(new GetLastSeenPassengersController())

    useEffect(() => {
        const unsubscribe = controller.presenter.subscribe(result => {
            setLoading(false)
            if (result) {
                setData(result)
            }
        })
        getData()
        return unsubscribe
    }, [])

    const getData = (...args: Parameters<typeof controller.getList>) => {
        setLoading(true)
        controller.getList(...args)
    }

    return {
        getData,
        data,
        loading
    }
}
