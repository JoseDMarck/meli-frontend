/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from "react";
import SearchBox from "../../components/searchBox/SearchBoxComp";
import SearchResults from "../../components/searchResults/SearchResults";

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
			<SearchResults />
		</>
	);
}

export default Dashboard;
