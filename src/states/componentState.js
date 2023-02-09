/* eslint-disable no-unused-vars */

import React, { useReducer, useState } from "react";
import ComponentContext from "../context/componentContext";

import axios from "axios";

const ComponentState = ({ children }) => {
	const [stateComp, setStateComp] = useState({});

	return (
		<ComponentContext.Provider
			value={{
				...stateComp,
				stateComp,
				setStateComp,
			}}
		>
			{children}
		</ComponentContext.Provider>
	);
};

export default ComponentState;
