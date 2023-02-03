import userEvent from "@testing-library/user-event";
import { useEffect, useState } from "react";
import AuthContext from "../context/authContext";
import { Service } from "../services/api";

const AuthState = ({ children }) => {
	const [state, setState] = useState({
		user: null,
	});

	useEffect(() => {
		let _user = localStorage.getItem("user");
		let user = JSON.parse(_user);
		if (_user) {
			state.user = user;
			setState({ ...state });
		}
	}, []);

	const setUser = (user) => {
		setState({ ...state, user });
	};

	return (
		<AuthContext.Provider
			value={{
				...state,
				setUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
export default AuthState;
