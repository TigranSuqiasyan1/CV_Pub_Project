import { combineReducers} from 'redux'
import { categoryReducer } from './category/reducer'
import { eventReducer } from './event/reducer'
import { productReducer } from './product/reducer'
import { userReducer } from './user/reducer'
import { dancerReducer } from './dancer/reducer'
import { cocktailsReducer } from './cocktails/reducer'
export default combineReducers({
    productReducer,
    userReducer,
    eventReducer,
    categoryReducer,
    dancerReducer,
    cocktailsReducer,
})