import { useContext } from "react"
import { JsonContext } from "../../../app/provider/with-json"

export const useJsonContext = () => {
    const {stateExams, innerExams} = useContext(JsonContext)

    return {
        stateExams,
        innerExams
    }
}