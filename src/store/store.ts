import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import rootReducer from './root.reducer';

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		const defaultMiddleware = getDefaultMiddleware();
		return defaultMiddleware.concat([]);
	}
});

// Listen browser event to dispatch store action
setupListeners(store.dispatch);

export default store;
