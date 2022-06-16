import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userRedux from "./userRedux";
import inputActualRedux from "./inputActualRedux";
import outputActualRedux from "./outputActualRedux";
import {

    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist"

import storage from "redux-persist/lib/storage";
import expensePlanRedux from "./expensePlanRedux";

const persistConfig={
    key:"root",
    version:1,
    storage,
}

const rootRouter = combineReducers({user:userRedux,
                                    inputActual:inputActualRedux,
                                    outputActual:outputActualRedux,
                                    expensePlan:expensePlanRedux})

const persistedReducer  = persistReducer(persistConfig,rootRouter)

export const store = configureStore({

    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:{
            ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
        }
    })
})

export let persistor = persistStore(store)