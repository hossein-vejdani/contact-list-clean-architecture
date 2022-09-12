import { GetOnePassengerController } from '@contact-management/controller'
import type { Passenger, SingleItemResponseType } from '@contact-management/core'
import { useEffect, useState } from 'react'

export const useGetOnePassenger = () => {
    const [data, setData] = useState<SingleItemResponseType<Passenger>>({} as SingleItemResponseType<Passenger>)

    const [loading, setLoading] = useState(false)

    const [controller] = useState(new GetOnePassengerController())

    useEffect(() => {
        const unsubscribe = controller.presenter.subscribe(result => {
            setLoading(false)
            if (result) {
                setData(result)
            }
        })
        return unsubscribe
    }, [])

    const getData = (...args: Parameters<typeof controller.getOne>) => {
        setLoading(true)
        controller.getOne(...args)
    }

    return {
        getData,
        data,
        loading
    }
}
