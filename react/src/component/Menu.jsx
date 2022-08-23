import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { SAGA_LOGOUT } from '../store/saga/typeSaga'
import './menu.scss'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
;

export const Menu = () => {
    const location = useLocation()
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const data = useSelector(st => st.userReducer.profile)

	useEffect(()=>{
		AOS.init();
		AOS.refresh()
	})

    return (
		<header >
				<div className='head' data-aos="fade-down" data-aos-duration="2000">
					
					<nav className="nav1">
						<div className='phone_email'>
							<span>
								<p>Phone:</p>&nbsp; <a href="#">+374-96-73-57-35</a>&nbsp;&nbsp;&nbsp;&nbsp;
							</span>
							<span>
								<p>E-mail:</p>&nbsp; <a href="#">dosamigos@yahoo.com</a>
							</span>
						</div>
						<div className='icon'>
							<a className="h-facebook" target="blanc" href="https://www.facebook.com/dosamigosevn"><i class="fa fa-facebook-f"></i></a>
							<a className="h-instagram" target="blanc" href="https://instagram.com/dosamigos_n1?igshid=YmMyMTA2M2Y="><i class="fa fa-instagram"></i></a>
							{data.name?
							<button onClick={()=>{
                                    dispatch({
                                      type:SAGA_LOGOUT,
                                      navigate
                                               })
                                                 }}>
                                      logout
                                  </button>
								  :
							<Link to="/login">Login</Link>
							}
						</div>
					</nav>

  

					<nav className='nav2'>
						<div className='logo'>
							<div className='dosamigos'>
								<a href="/">
									<span>DOS</span>
									<span>AMIGOS</span>
								</a>
							</div>
						</div>
						<div className='nav2_div2'>
							<Link to="/event">Events</Link>
							<Link to="/category">Category</Link>
							{
								location.pathname == '/' ?
									<>
										<a href="#location">Contacts</a>
									</> : <></>
							}
						</div>
					</nav>
				</div>


		</header>
			

    )
} 