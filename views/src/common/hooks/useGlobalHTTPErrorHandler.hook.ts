import { GlobalHTTPErrorController } from '@contact-management/controller'
import { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const useGlobalHTTPErrorHandler = () => {
    const [controller] = useState(new GlobalHTTPErrorController())

    useEffect(() => {
        const unsubscribe = controller.presenter.subscribe(err => {
            if (typeof err === 'object') {
                toast((err as AxiosError).message || 'Error', {
                    type: 'error'
                })
            }
        })
        return unsubscribe
    }, [])
}
