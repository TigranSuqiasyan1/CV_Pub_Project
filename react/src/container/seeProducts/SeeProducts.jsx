import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SAGA_SEE_PRODUCTS_BY_CATEGORY_ID } from '../../store/saga/typeSaga'

import './seeProducts.scss'
export const SeeProducts = () => {
	const dispatch = useDispatch()
	const params = useParams()
	useEffect(() => {
		dispatch({ type: SAGA_SEE_PRODUCTS_BY_CATEGORY_ID, data: { catName: params.catName } })
	}, [])
	const data = useSelector(st => st.productReducer.arr)
	return (
		<section >
			<div className="main_seeProduct_box">
				<div>
					{
						data?.map(e => {
							return (<div>

								<div className='img_product_div'>
									<img className="img_seeProduct_responsive"
										src={"http://localhost:8080/images/product/" + e.picUrl}
										alt=""
									/>
								</div>

								<div className="seeProduct_description" >
									<span>{e.name}</span>
									<span>{e.description}</span>
									<span>{e.price} AMD</span>
								</div>
							</div>)
						})
					}
				</div>
			</div>
		</section>
	)
} 