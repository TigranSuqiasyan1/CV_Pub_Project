import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Category } from '../container/category/Category'
import { Error } from '../container/error/Error'
import { Home } from '../container/home/Home'
import { Event } from '../container/event/Event'
import { SeeProducts } from '../container/seeProducts/SeeProducts'
import { useContext } from 'react'
import { MyContext1 } from '../MyContext'
import { Login } from '../container/login/login'
import { Profile } from '../container/profile/profile'
import { AddNewCategory } from '../container/profile/work/AddNewCategory'
import { AddNewProduct } from '../container/profile/work/AddNewProduct'
import { AddNewEvent } from '../container/profile/work/AddNewEvent'
import { AddNewUser } from '../container/profile/work/AddNewUser'
import { AllCategory } from '../container/profile/work/AllCategory'
import { AllProduct } from '../container/profile/work/AllProduct'
import { AllEvent } from '../container/profile/work/AllEvent'
import { AllUser } from '../container/profile/work/AllUser'
import { AddNewDancer } from '../container/profile/work/AddNewDancer'
import { AllDancer } from '../container/profile/work/AllDancer'
import { Layout } from '../component/Layout'


export const MyRouter = () => {
    const data = useContext(MyContext1)
    return (<div style={data.state.bool ? data.state.light : data.state.dark}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<Home />} />
                    <Route path='/category' element={<Category />} />
                    <Route path='/event' element={<Event />} />
                    <Route path='/seeProducts/:catName' element={<SeeProducts />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/profile' element={<Profile />} >
                        <Route path='addNewCategory' element={<AddNewCategory />} />
                        <Route path='addNewProduct' element={<AddNewProduct />} />
                        <Route path='addNewEvent' element={<AddNewEvent />} />
                        <Route path='addNewDancer' element={<AddNewDancer />} />
                        <Route path='addNewUser' element={<AddNewUser />} />
                        <Route path='allDancer' element={<AllDancer />} />
                        <Route path='allCategory' element={<AllCategory />} />
                        <Route path='allProduct' element={<AllProduct />} />
                        <Route path='allEvent' element={<AllEvent />} />
                        <Route path='allUser' element={<AllUser />} />
                    </Route>
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </div>)
} 