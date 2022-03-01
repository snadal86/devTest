import { combineReducers } from "redux";

import auth from "./auth";
import alert from "./alert";
import expedient from "./expedient";
import substitute from "./substitute";

export default combineReducers({ alert, auth, expedient, substitute });

