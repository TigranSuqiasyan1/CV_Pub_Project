import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './menuLogin.scss'
export const MenuLogin = () => {
    const data = useSelector(st => st.userReducer.profile)
    return (
        <div className="menuLoginDiv">
            <nav className="menuLogin">
                <ul>
                    {!data.type ?
                        <>
                            <li><Link to='/profile/addNewUser'>Add new user</Link></li>
                            <li><Link to='/profile/allUser'>All user</Link></li>
                        </> : ""
                    }
                    <>
                    <li><Link to='/profile/addNewEvent'>Add new event</Link></li>
                    <li><Link to='/profile/allEvent'>All event</Link></li>
                    <li><Link to='/profile/addNewDancer'>Add new dancer</Link></li>
                    <li><Link to='/profile/allDancer'>All dancer</Link></li>
                    <li><Link to='/profile/addNewCategory'>Add new category</Link></li>
                    <li><Link to='/profile/allCategory'>All category</Link></li>
                    <li><Link to='/profile/addNewProduct'>Add new product</Link></li>
                    <li><Link to='/profile/allProduct'>All product</Link></li>
                    </>
                </ul>
            </nav>
        </div>

    )
}