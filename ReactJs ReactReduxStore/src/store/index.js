import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {expenseSlice} from './expense/expense-slice';
import storage from 'redux-persist/lib/storage';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'



//Combine the Reducers {slices content} into the Single Reducers
const rootReducer= combineReducers({
    EXPENSE:expenseSlice.reducer,
    
})
//Combine the Basic Configuration to tell the redux to use the Local Storage.
const persistConfig={
    key:'root',
    version: 1,
    storage: storage,
// blacklist basically allowed the data to be refreshed
    blacklist:[],
    whiteList:['EXPENSE']
    
}

// Persist the Reducers
const persistedReducers=persistReducer(persistConfig,rootReducer)

// Send the persisted reducers to the store
const store=configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
      }),
});

// Create the persisted version of the store
const persistor=persistStore(store);


//Export the persisted version of the store


//Use the persistGate Component to give your App
//access to the persisted store.



export { store, persistor}