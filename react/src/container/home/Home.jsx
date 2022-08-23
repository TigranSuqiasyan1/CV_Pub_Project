import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MyContext } from "../../MyContext";
import { SAGA_ALL_COCKTAILS, SAGA_DANCER, SAGA_EVENT_TODAY, SAGA_HOME, } from "../../store/saga/typeSaga";
import "./home.scss";
import "./media.scss";
import Moment from "moment";
import { Link} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Carousel from "nuka-carousel"



export const Home = () => {
	const dispatch = useDispatch();
	const data = useSelector((st) => st.cocktailsReducer.arr);
	const dataEvent = useSelector((st) => st.eventReducer.arr);
	const dataDancer = useSelector((st) => st.dancerReducer.arr)
	const arr = useContext(MyContext);

	useEffect(() => {
		dispatch({ type: SAGA_HOME });
		dispatch({ type: SAGA_ALL_COCKTAILS })
		dispatch({ type: SAGA_EVENT_TODAY });
		dispatch({ type: SAGA_DANCER });
		AOS.init();
		AOS.refresh();
	}, []);



	return (
		<div >
			<div className='bar'></div>
			<div className='coc_title'>
				<div data-aos="fade-up" data-aos-duration="3000">
					<span >ENJOY DELICIOUS COCKTAILS, <br></br> THAT WILL WARM YOUR SOUL.</span>
				</div>
			</div>
			<div className='main_marquee_div' >
				<div className='cocktails_div' >
					<div className='carousel' data-aos="fade-up" data-aos-duration="3000">
						<Carousel
						    width={"100px"}
							height={"100px"}
							wrapAround={false}
							slidesToShow={1}
							defaultControlsConfig={{
								nextButtonText: '>',
								prevButtonText: '<',
								pagingDotsStyle: {
								fill: 'white',
								},
	
								nextButtonStyle: {
									fontSize:"20px",
									border: "2px solid #E1D0B6FF",
									backgroundColor: "#ace31600",
									color: "white"
								},
								prevButtonStyle: {
									fontSize:"20px",
									border: "2px solid #E1D0B6FF",
									backgroundColor: "#ace31600",
									color: "white"
								}

							}}
						>
							{data?.map((e) => {
								return (
									<div className="div_img">
										<img width="100px" height="100px"
											src={
												"http://localhost:8080/images/product/" + e.picUrl
											}

										/>
									</div>
								);
							})}
						</Carousel>

					</div>
				</div>

				<div className='marquee_text_div' data-aos="fade-up" data-aos-duration="3000">
					<div className='marquee_text' >
						<span>
							Text TYext	Text TYext Text Text Text
							Text TextText TYext Text Text Text
						</span>
						<div className='marquee_all_cocktails_div'>
							<Link to="/seeProducts/COCKTAILS" className='all_cock_link' >More...</Link>
						</div>
					</div>
				</div>
			</div>
			<div className='dos_best' >
				<div  data-aos="fade-up" data-aos-duration="3000">
					<p>DOS AMIGOS</p>
					<span>BEST CHOICE</span>
				</div>
			</div>


			{/**event */}

			<section>
				<div className='to_day_event_text' >
					<div  data-aos="fade-up" data-aos-duration="3000">
						<span>IF YOU LIKE TO DANCE LATINO DANCES,<br></br>THEN OUR EVENTS ARE JUST FOR YOU.</span>
					</div>
				</div>
				<div className="main_event_box">
					<div  data-aos="fade-up" data-aos-duration="3000">
						{dataEvent.map((e) => {
							const form = Moment(e.date);
							return (
								<div className="event_item" key={e.id}>
									<div>
										<div className="event_date" >
											{form.date()}{" "}
											<span >
												{arr[form.month()]} |{" "}
												<sub> {form.year().toString().substring(2)}</sub>
											</span>
											<span >
												{form.hour()}:{form.minute()} pm
											</span>
										</div>
									</div>
									<div>
										<img
											className="img_responsive"
											src={"http://localhost:8080/images/event/" + e.picUrl}
											alt=""
										/>
									</div>
									<div className="event_description" >
										<span>{e.name}</span>
										<hr />
										<span>{e.description}</span>
										<hr />
										{e.bool == 1 ? <p >Free entrance</p> : <span> Ticket price: {e.price} AMD</span>}
									</div>
								</div>
							)
						})}

					</div>
				</div>
				<div className='event_bottom'>
					<div data-aos="fade-up" data-aos-duration="3000">
						<Link className="event_link" to="/event"><span>CLICK ON ME AND YOU WILL SEE <span className="see_all_event"> ALL DOS EVENTS.</span></span></Link>
					</div>
				</div>
			</section>


			{/**dancer */}
			<section className="section_dance">
				<div className="section_dance_div1" data-aos="fade-up" data-aos-duration="3000">
					<span>HERE YOU CAN GET ACQUAINTED WITH </span><br></br>
					<span>THE CHOREOGRAPHERS OF OUR TEAM</span>
				</div>
				<div className="section_dance_half1">
					<div className="section_dance_half1_box1">
						{
							dataDancer.map((e) => {
								return (
									<div key={e.id} className="section_dance_half1_box1_img1" data-aos="fade-up" data-aos-duration="3000">
										<div className="dancers_img_div" >
											<img src={"http://localhost:8080/images/dancer/" + e.picUrl}
												alt="" />


											<div className="section_dance_half1_box1_txt1">
												<h2>Im {e.description}</h2>
											</div>
										</div>
										<div className="dancers_img_text_div">
											<span>{e.name}</span>
											<span>{e.surname}</span>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</section>


			{/**location */}

			<section id="location" className='location'>
				<div className="contacts_title" data-aos="fade-up" data-aos-duration="2000">
					<span>CONTACT US</span>
				</div>
				<div className="contacts_div">
					<div className="iframe_div">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.2047420356002!2d44.50601071488684!3d40.18225677779107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcfda13d1a95%3A0x97b547d4977deb7a!2zMTUgTWVzcm9wIE1hc2h0b2MgcG9raG90YSwgWWVyZXZhbiwg0JDRgNC80LXQvdC40Y8!5e0!3m2!1sru!2s!4v1658854397443!5m2!1sru!2s" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>					</div>
					<div className="icons_div">
						<div className="icon_phone" data-aos="zoom-in" data-aos-duration="3000">
							<div className="phoneImg">
							</div>
							<div className="phone">
								<span >+374-96-73-57-35</span>
							</div>
						</div>
						<div className="icon_email" data-aos="zoom-in" data-aos-duration="3000">
							<div className="email_img">
								<svg preserveAspectRatio="xMidYMid meet"
									data-bbox="20 50.968 160 98.064"
									viewBox="20 50.968 160 98.064"
									xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true" aria-labelledby="svgcid-bm5z5v-qmy25p"><defs></defs><title id="svgcid-bm5z5v-qmy25p"></title>
									<g>
										<path d="M180 149.032H20V50.968h160v98.064zm-154.839-5.161h149.677V56.129H25.161v87.742z" fill="#9A8A78" data-color="1"></path>
										<path fill="#9A8A78" d="M100 118.79L20.968 55.565l3.226-4.033L100 112.177l75.806-60.645 3.226 4.033L100 118.79z" data-color="1"></path>
									</g>
								</svg>
							</div>
							<div className="email" data-aos="zoom-in" data-aos-duration="3000">
								<Link to="/">dosamigos@yahoo.com</Link>
							</div>
						</div>
						<div className='icon_FbIn' data-aos="zoom-in" data-aos-duration="3000">
							<a className="h-facebook" target="blanc" href="https://www.facebook.com/dosamigosevn"><i class="fa fa-facebook" aria-hidden="true"></i></a>
							<a className="h-instagram" target="blanc" href="https://instagram.com/dosamigos_n1?igshid=YmMyMTA2M2Y="><i class="fa fa-instagram"></i></a>
						</div>

					</div>
				</div>
			</section>
			<section>
				<div className="page_bottom" >
					<div className="dos">
						<span data-aos="fade-right" data-aos-duration="3000">DOS</span>
					</div>
					<div className="amigos">
						<span data-aos="fade-left" data-aos-duration="3000">AMIGOS</span>
					</div>
				</div>
			</section>
		</div>
	);
};
