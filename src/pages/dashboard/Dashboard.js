/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from "react";
import SearchBox from "../../components/searchBox/searchBox";
import { Service } from "../../services/api";

function Dashboard() {
	useEffect(() => {
		const data = async () => {};

		data();

		return () => {};
	}, []);

	return (
		<>
			<SearchBox />
		</>
	);
}

export default Dashboard;
