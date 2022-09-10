import { GetAllPassengersController } from '@contact-management/controller'
import { useEffect } from 'react'

const controller = new GetAllPassengersController()
export const useGetAllPassengers = () => {
    useEffect(() => {
        controller.presenter.subscribe(result => {
            if (result) {
                console.log(result)
            }
        })
        controller.getAll({})
    }, [])
}
