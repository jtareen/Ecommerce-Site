import { useEffect } from "react"
import { useGlobalContext } from "../../Context/Context"
import { capitalizeFirstLetters } from "../../utils/utils"

const Alert = () => {
    const {alert: {visible , message, alertHeader, variant}, hideAlert} = useGlobalContext()

    useEffect(() => {
        if(visible){
            const timer = setTimeout(hideAlert , 3000)

            return () => clearTimeout(timer)
        }
    }, [visible, hideAlert])

    if (!visible) return null

    return (<>
        <div className={`alert ${variant ? variant : ''}`}>
            <p className="font-bold">{alertHeader}</p>
            <p>{capitalizeFirstLetters(message)}</p>
        </div>
    </>)
}

export default Alert