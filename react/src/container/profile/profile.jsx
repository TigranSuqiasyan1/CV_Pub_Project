import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useNavigate, useNavigationType } from "react-router-dom"
import { SAGA_GET_USER, SAGA_LOGOUT } from "../../store/saga/typeSaga"
import { Manager } from "./Manager"
import { Admin } from "./Admin"
import { MenuLogin } from "../../component/MenuLogin"
import "./profile.scss"
export const Profile = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch({ type: SAGA_GET_USER, navigate })
    }, [])
    const data = useSelector(st => st.userReducer.profile)

    return (
        <div className="div">
            <div className="center_page">
                {data.type ?
                    <Manager />
                    :
                    <Admin />}
            </div>
            <div className="menu">
                <MenuLogin />
                <Outlet />
            </div>

         
        </div>

    )


    
}




