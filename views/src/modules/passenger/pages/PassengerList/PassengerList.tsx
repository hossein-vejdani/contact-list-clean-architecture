import './PassengerList.scss'
import PassengerCard from '../../common/components/PassengerCard/PassengerCard'
import { useGetAllPassengers } from '../../common/hooks/useGetAllPassengers.hook'
import BasePagination from '../../../../common/components/BasePagination/BasePagination'
import PassengersFilter, { type PassengersFilterDataType } from '../../common/components/PassengersFilter/PassengersFilter'
import { useState } from 'react'
import { useGetLastSeenPassengers } from '../../common/hooks/useGetLastSeenPassengers.hook'
import BaseLoading from '../../../../common/components/BaseLoading/BaseLoading'

const PAGE_LIMIT = 7
const PassengerList = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [currentFilters, setCurrentFilters] = useState<PassengersFilterDataType>({} as PassengersFilterDataType)
    const { data, loading, getData } = useGetAllPassengers()
    const { data: lastSeenData } = useGetLastSeenPassengers()

    const handleGetData = ({ page = currentPage, filters = currentFilters }: { page?: number, filters?: PassengersFilterDataType }) => {
        const where = Object.entries(filters).reduce((prev, [key, value]) => ({
            ...prev,
            [key]: {
                contains: value
            }
        }), {})
        getData({ limit: PAGE_LIMIT, skip: PAGE_LIMIT * (page - 1), where })
        setCurrentPage(page)
        setCurrentFilters(filters)
    }
    return (
        <div className="passenger-list">
            {lastSeenData.length &&
                <div className="passenger-list__last-seen">

                    {lastSeenData.map(passenger => <PassengerCard passenger={passenger} key={passenger.id} />)}
                </div>
            }
            <PassengersFilter onChange={(filters) => handleGetData({ filters })} />
            <div className="passenger-list__passengers">
                {
                    loading ?
                        <BaseLoading /> :
                        data.items.map(passenger => <PassengerCard passenger={passenger} key={passenger.id} />)
                }
            </div>
            <div className="passenger-list__footer">
                <BasePagination totalPages={data.meta.total && data.meta.limit ? Math.ceil(data.meta.total / data.meta.limit) : 1} onChange={(page) => handleGetData({ page })} />
            </div>
        </div>
    )
}

export default PassengerList