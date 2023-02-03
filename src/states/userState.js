/* eslint-disable no-unused-vars */

import React, { useReducer, useState } from "react";
import UsersContext from "../context/usersContext";

import axios from "axios";

const UsersState = ({ children }) => {
	const [userState, setUserState] = useState({
		updateState: false,
		updateStateForm: false,
		userData: null,
		actionID: null,
		users: null,
	});

	return (
		<UsersContext.Provider
			value={{
				...userState,
				userState,
				setUserState,
			}}
		>
			{children}
		</UsersContext.Provider>
	);
};

export default UsersState;
