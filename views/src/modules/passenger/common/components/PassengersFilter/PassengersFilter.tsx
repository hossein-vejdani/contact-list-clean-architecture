import './PassengersFilter.scss'
import type { Passenger } from "@contact-management/core"
import { FormEvent, useEffect, useState } from "react"
import { useDebounce } from '../../../../../common/hooks/useDebounce.hook'

type UnNeededFields = 'id' | 'createdAt' | 'updatedAt' | 'avatar' | 'note' | 'telegram' | 'address'
export type PassengersFilterDataType = Omit<Passenger, UnNeededFields>
export type PassengersFilterPropsType = {
    onChange: (data: PassengersFilterDataType) => void
}

const PassengersFilter = ({ onChange }: PassengersFilterPropsType) => {
    const [fromData, setFormData] = useState<PassengersFilterDataType>({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        phone: '',
        company: ''
    })

    const { debounceHandler } = useDebounce<PassengersFilterDataType>(onChange, 700)
    useEffect(() => {
        debounceHandler(fromData)
    }, [fromData])

    const handleChangeValue = (ev: FormEvent<HTMLInputElement>) => {
        const el = ev.target as HTMLInputElement
        setFormData(state => ({ ...state, [el.name]: el.value }))
    }

    return (
        <div className="passengers-filter">
            {Object.entries(fromData).map(([name, value]) =>
                <label key={name}>
                    <div>{name}</div>
                    <input value={value} name={name} onInput={handleChangeValue} type="text" className="passengers-filter__field" />
                </label>
            )}
        </div>
    )
}

export default PassengersFilter