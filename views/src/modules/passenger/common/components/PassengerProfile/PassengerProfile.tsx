import './PassengerProfile.scss'
import { Passenger } from "@contact-management/core"
import { useState } from "react"
import BaseImage from "../../../../../common/components/BaseImage/BaseImage"

export type PassengerProfilePropsType = {
    passenger: Passenger
}

const PassengerProfile = ({ passenger }: PassengerProfilePropsType) => {
    const [details] = useState<(keyof Passenger)[]>(['company', 'gender', 'phone', 'email', 'telegram', 'note'])
    return (
        <article className="passenger-profile">
            <div className="passenger-profile__avatar">
                <BaseImage src={passenger.avatar} alt={`${passenger.firstName}-${passenger.lastName}`} className="passenger-profile__avatar-image" />
            </div>
            <div className="passenger-profile__title">{passenger.firstName} {passenger.lastName}</div>
            <div className="passenger-profile__details">
                {details.map(key =>
                    <p key={key}><b>{key}</b>: {passenger[key] || '---'}</p>
                )}
            </div>
        </article>
    )
}

export default PassengerProfile