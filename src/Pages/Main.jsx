import { useContext } from "react"
import AuthContext from "../components/contexts/hooks/contextAuth"

export default function Main () {
    const {phone, setPhone} = useContext (AuthContext)
    return (
        <div>
            <input value ={phone} onchange = {(e) => setPhone(e.target.value)} />
            </div>
    )
}