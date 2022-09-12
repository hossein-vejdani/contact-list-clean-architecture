
import { SyntheticEvent, useState } from "react"

export type baseImagePropsType = { src?: string, className?: string, alt?: string }

const DEFAULT_IMAGE_PATH = 'default.png'
const BaseImage = ({ src, alt, className }: baseImagePropsType) => {
    const [changeCount, setChangeCount] = useState(0)
    const handleLoadError = (ev: SyntheticEvent<HTMLImageElement, Event>) => {
        if (changeCount > 2)
            return
        const el = ev.target as HTMLImageElement
        el.src = require(`../../../assets/images/${DEFAULT_IMAGE_PATH}`)
        console.log(ev.target);
        setChangeCount(state => ++state)

    }
    return (
        <img className={className} src={src || require(`../../../assets/images/${DEFAULT_IMAGE_PATH}`)} alt={alt} onError={handleLoadError} />
    )
}

export default BaseImage