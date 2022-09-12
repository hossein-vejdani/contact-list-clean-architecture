import './PassengerCard.scss'
import { Passenger } from '@contact-management/core'
import { useState } from 'react'
import BaseImage from '../../../../../common/components/BaseImage/BaseImage'
import { Link } from 'react-router-dom'
export type PassengerCardPropsType = {
    passenger: Passenger
}

const PassengerCard = ({ passenger }: PassengerCardPropsType) => {
    const [details] = useState<(keyof Passenger)[]>(['gender', 'phone', 'note'])

    return (
        <article className="passenger-card">
            <div className="passenger-card__avatar">
                <BaseImage className="passenger-card__avatar-image" src={passenger.avatar} alt={`${passenger.firstName}-${passenger.lastName}`} />
            </div>
            <div className="passenger-card__fullname-box">
                <h2 className="passenger-card__fullname">{passenger.firstName} {passenger.lastName}</h2>
            </div>

            <div className="passenger-card__details">
                {details.map(item =>
                    <div className="passenger-card__detail-box" key={item}>
                        <h6 className="passenger-card__detail">{passenger[item]}</h6>
                    </div>
                )}
            </div>

            <Link className="passenger-card__link" to={`/passenger/info/${passenger.id}`}>
                <span>Visit</span>
            </Link>
        </article>
    )
}

export default PassengerCard