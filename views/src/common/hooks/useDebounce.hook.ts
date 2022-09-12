import { useState } from 'react'

export const useDebounce = <T>(callback: (args: T) => void, delay: number) => {
    const [debounceTimeout, setDebounceTimeout] = useState<NodeJS.Timeout>()

    const debounceHandler = (args: T) => {
        clearTimeout(debounceTimeout)

        setDebounceTimeout(
            setTimeout(() => {
                console.log(args)

                callback(args)
            }, delay)
        )
    }

    return {
        debounceHandler
    }
}
