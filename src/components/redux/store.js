import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import api from "./middleware/api"
import reducer from "./reducers"

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose

const enhancer = composeEnhancers(applyMiddleware(thunk, api))

const store = createStore(reducer, enhancer)

window.store = store

export default store
