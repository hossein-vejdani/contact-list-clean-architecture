import { useEffect } from 'react'
import { useGetOnePassenger } from '../../common/hooks/useGetOnePassenger.hook'
import { useParams } from 'react-router-dom'
import PassengerProfile from '../../common/components/PassengerProfile/PassengerProfile'
import BaseLoading from '../../../../common/components/BaseLoading/BaseLoading'
const PassengerInfo = () => {
    const { data, loading, getData } = useGetOnePassenger()
    const { id } = useParams<'id'>()
    useEffect(() => {
        if (id)
            getData({ id: +id })
    }, [])
    return (
        <div>
            {loading ? <BaseLoading /> :
                <PassengerProfile passenger={data} />
            }
        </div>
    )
}

export default PassengerInfo