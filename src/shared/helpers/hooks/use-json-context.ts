import { useContext } from "react"
import { JsonContext } from "../../../app/provider/with-json"

export const useJsonContext = () => {
    const {stateExams, innerExams, price} = useContext(JsonContext)

    return {
        stateExams,
        innerExams,
        price
    }
}