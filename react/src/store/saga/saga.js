import {takeEvery, put, call, select} from 'redux-saga/effects'
import { SAGA_CATEGORY, SAGA_HOME, SAGA_EVENT, SAGA_SEE_PRODUCTS_BY_CATEGORY_ID, SAGA_SEE_PRODUCT_BY_ID, SAGA_EVENT_TODAY, SAGA_LOGIN_USER, SAGA_GET_USER, SAGA_LOGOUT, SAGA_DELETE_CATEGORY, SAGA_EDIT_CATEGORY, SAGA_REGISTER_USER,SAGA_DANCER, SAGA_GET_ALL_USER, SAGA_ADD_NEW_EVENT, SAGA_ADD_NEW_DANCER, SAGA_ADD_CATEGORY, SAGA_GET_ALL_CATEGORY, SAGA_ADD_NEW_PRODUCT, SAGA_EDIT_PRODUCT, SAGA_DELETE_PRODUCT, SAGA_DELETE_DANCER, SAGA_DELETE_EVENT, SAGA_DELETE_USER, SAGA_GET_ALL_PRODUCT, SAGA_ALL_COCKTAILS, SAGA_GET_CATEGORY_BY_ID, SAGA_EDIT_USER } from './typeSaga';
import { LINK_ADD_NEW_CATEGORY, LINK_ADD_NEW_DANCER, LINK_ADD_NEW_PRODUCT, LINK_ALL_COCKTAILS, LINK_DELETE_CATEGORY, LINK_DELETE_DANCER, LINK_DELETE_EVENT, LINK_DELETE_PRODUCT, LINK_DELETE_USER, LINK_EDIT_CATEGORY, LINK_EDIT_PRODUCT, LINK_GET_ADD_NEW_EVENT, LINK_GET_ALL_CATEGORY, LINK_GET_ALL_DANCER, LINK_GET_ALL_EVENT, LINK_GET_ALL_PRODUCT, LINK_GET_ALL_USER, LINK_GET_EVENT_TODAY, LINK_GET_PRODUCT_CATEGORY_BY_ID, LINK_GET_USER, LINK_LOGIN_USER, LINK_LOGOUT, LINK_REGISTER_USER } from './link';
import { productData } from '../product/action';
import { categoryData, allCategory} from '../category/action';
import { eventData } from '../event/action';
import { addNewDancerData, dancerData} from '../dancer/action';
import Axios from 'axios'
import { loginData, setStatus, setUsersArray } from '../user/action';
import { cocktailsData } from '../cocktails/action';
const axios = Axios.create({
    withCredentials:true
})

function* mySaga(){
    console.log('my saga');
    /**get */
    yield takeEvery(SAGA_HOME, getHome)
    yield takeEvery(SAGA_EVENT, getEvent)
    yield takeEvery(SAGA_CATEGORY, getCategory)
    yield takeEvery(SAGA_EVENT_TODAY, getEventToday)
    
    /**params */
    yield takeEvery(SAGA_SEE_PRODUCT_BY_ID, getProductById)
    yield takeEvery(SAGA_SEE_PRODUCTS_BY_CATEGORY_ID, getProductsByCategoryId)

    /**user */
    yield takeEvery(SAGA_LOGIN_USER , userLogin)
    yield takeEvery(SAGA_GET_USER, getUser )
    yield takeEvery(SAGA_LOGOUT, logout )
    yield takeEvery(SAGA_REGISTER_USER, addNewUser)
    yield takeEvery(SAGA_GET_ALL_USER, getAllUser )
    yield takeEvery(SAGA_DELETE_USER, deleteUser )

    /**category */
    yield takeEvery(SAGA_CATEGORY,getAllCategory)
    yield takeEvery(SAGA_GET_ALL_CATEGORY,getAllCategory)
    yield takeEvery(SAGA_ADD_CATEGORY,addNewCategory)
    yield takeEvery(SAGA_DELETE_CATEGORY, deleteCategory )
    yield takeEvery(SAGA_EDIT_CATEGORY, editCategory)
    
    /**dancer */
    yield takeEvery( SAGA_DANCER, getDancer)
    yield takeEvery( SAGA_ADD_NEW_DANCER,addNewDancer)
    yield takeEvery(SAGA_DELETE_DANCER,deleteDancer)
    

    /**event */
    yield takeEvery(SAGA_ADD_NEW_EVENT, addNewEvent)
    yield takeEvery(SAGA_DELETE_EVENT, deleteEvent)
     

    /**product */
    yield takeEvery (SAGA_GET_ALL_PRODUCT,getAllProduct)
    yield takeEvery (SAGA_ADD_NEW_PRODUCT,addNewProducts)
    yield takeEvery(SAGA_EDIT_PRODUCT,editProduct)
    yield takeEvery(SAGA_DELETE_PRODUCT,deleteProduct)

    /**Cocktails */
    yield takeEvery(SAGA_ALL_COCKTAILS,getCocktails)
}

export default mySaga;

/**function saga */


function* getHome(){
    yield call(axiosLink, {link:LINK_GET_ALL_PRODUCT, func:productData})
}


/**params */
function* getProductById(){
    console.log("get product by id");
}
function* getProductsByCategoryId(action){
    console.log("get products by cat id", action);
    yield call(axiosLink, {link:LINK_GET_PRODUCT_CATEGORY_BY_ID, data:action.data, func:productData})
}






/**user */
function* userLogin(action){
    yield call(axiosLink, {link:LINK_LOGIN_USER, data:action.data, func:setStatus})
    const data = yield select(st=>st.userReducer.status)
    if("status" in data){
        action.navigate("/profile")
    }else{
        alert("error")
    }
}
function* addNewUser(action){
    yield call(axiosLinkForm, {link:LINK_REGISTER_USER, data:action.form, func:setStatus})
}

function* getUser(action){
    yield call(axiosLink, {link:LINK_GET_USER, func:loginData})
    const data = yield select(st=>st.userReducer.profile)
    if("error" in data){
        action.navigate('/')
    }    
}


function* getAllUser(){
    yield call(axiosLink, {link:LINK_GET_ALL_USER, func:setUsersArray})
}


function* logout(action){
    yield call(axiosLink, {link:LINK_LOGOUT, func:setStatus})
    yield put(loginData({}))
    action.navigate('/')
}
function* deleteUser(action){
    yield call(axiosLink, {link:LINK_DELETE_USER,data:action.data,func:setStatus})
    yield getAllUser()
}




/**category */
function* getCategory(){
    yield call(axiosLink, {link:LINK_GET_ALL_CATEGORY, func:categoryData})
}
function* getAllCategory(){
    yield call(axiosLink,{link:LINK_GET_ALL_CATEGORY,func:allCategory})
}
function* addNewCategory(action){
    console.log(action);
    yield call(axiosLinkForm,{link:LINK_ADD_NEW_CATEGORY,data:action.form,func:setStatus})
}
function* deleteCategory(action){
    yield call(axiosLink, {link:LINK_DELETE_CATEGORY,data:action.data,func:setStatus})
    yield getAllCategory()
}
function* editCategory(action){
    console.log("edit ok");
    yield call(axiosLinkForm, {link:LINK_EDIT_CATEGORY,data:action.form,func:setStatus})
    yield getAllCategory()
}



/**Cocktails */

function* getCocktails(){
    yield call(axiosLink,{link:LINK_ALL_COCKTAILS,func:cocktailsData})
} 


/**dancer */
function* getDancer(){
    yield call(axiosLink, {link:LINK_GET_ALL_DANCER, func:dancerData})
}
function* addNewDancer(action){
    console.log("add dancer", action);
    yield call(axiosLinkForm,{link:LINK_ADD_NEW_DANCER,data:action.form,func:addNewDancerData})
}
function* deleteDancer(action){
    yield call(axiosLink, {link:LINK_DELETE_DANCER,data:action.data,func:setStatus})
    yield getDancer()
}


/**event */

function* getEvent(){
    console.log("get event");
    yield call(axiosLink, {link:LINK_GET_ALL_EVENT, func:eventData})
}
function* getEventToday(){
    console.log("get event");
    yield call(axiosLink, {link:LINK_GET_EVENT_TODAY, func:eventData})
}

function* addNewEvent(action){
    console.log(action);
    yield call(axiosLinkForm, {link:LINK_GET_ADD_NEW_EVENT, data:action.form, func:setStatus})
    
}
function* deleteEvent(action){
    yield call(axiosLink,{link:LINK_DELETE_EVENT,data:action.data,func:setStatus})
    yield getEvent()
    
}

/**product */

function* getAllProduct(){
    yield call(axiosLink, {link:LINK_GET_ALL_PRODUCT, func:productData})
}

function* addNewProducts(action){
    console.log("add product saga===>", action)
    yield call(axiosLinkForm,{link:LINK_ADD_NEW_PRODUCT,data:action.form, func:setStatus})
}
function* editProduct(action){
    yield call(axiosLinkForm,{link:LINK_EDIT_PRODUCT,data:action.form,func:setStatus})
    yield getAllProduct()
    
}
function* deleteProduct(action){
    yield call(axiosLink,{link:LINK_DELETE_PRODUCT,data:action.data,func:setStatus})
    yield getAllProduct()
}


/**axios */
function* axiosLink({link, data={}, func}){
    const res = yield axios({
        method:"post",
        url:link,
        data:data
    })
    yield put(func(res.data))
}

function* axiosLinkForm({link, data={}, func}){
    const res = yield axios({
        method:"post",
        url:link,
        data:data,
        headers: { "Content-Type": "multipart/form-data" },
    })
    yield put(func(res.data))
}