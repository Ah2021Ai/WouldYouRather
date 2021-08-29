import { getPolls } from "../../utils/api"

export const handleFetchProducts = () => {
    return new Promise((resolve, reject) => {
       getPolls().then((res) => {
           resolve(res)
       }).catch((err) => {
           reject(err)
       })   
    })
}