import { GetAllPassengersController } from '@contact-management/controller'
import type { ListResponseType, Passenger } from '@contact-management/core'
import { useEffect, useState } from 'react'

export const useGetAllPassengers = () => {
    const [data, setData] = useState<ListResponseType<Passenger>>({
        meta: {},
        items: []
    })

    const [loading, setLoading] = useState(false)

    const [controller] = useState(new GetAllPassengersController())

    useEffect(() => {
        const unsubscribe = controller.presenter.subscribe(result => {
            setLoading(false)
            if (result) {
                setData(result)
            }
        })
        return unsubscribe
    }, [])

    const getData = (...args: Parameters<typeof controller.getAll>) => {
        setLoading(true)
        controller.getAll(...args)
    }

    return {
        getData,
        data,
        loading
    }
}
