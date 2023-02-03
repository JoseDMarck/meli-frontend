/* eslint-disable no-unused-vars */

import React, { useReducer, useState } from "react";
import ComponentContext from "../context/componentContext";

import axios from "axios";

const ComponentState = ({ children }) => {
	const [stateComp, setStateComp] = useState({
		programModalCreate: false,
		programModalAdd: false,
		sealModalCreate: false,
		sealModalAssign: false,
		sealModalAction: false,
		sealModalUpdate: false,
		sealModalDetails: false,
		revisionsModalDetails: false,
		incidentsModalDetails: false,
		userModalCreate: false,
		userModalUpdate: false,
		userModalAction: false,
		passwordModalUpdate: false,
		ActionInfo: "",
		modalMessage: false,
		modalMessageDescription: "",
		modalStatus: "success",
		modalMessageTitle: "",
		modalMessageInfo: "",
	});

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
