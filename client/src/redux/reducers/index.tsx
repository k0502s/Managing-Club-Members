import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer';
import memberReducer from './memberReducer';
import { History } from 'history';

const createRootReducer = (history: History) =>
    combineReducers({
        router: connectRouter(history),
        auth: authReducer,
        member: memberReducer,
    });

export default createRootReducer;

export type RootState = ReturnType<typeof createRootReducer>;