/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from "react";
import SearchBox from "../../components/searchBox/SearchBoxComp";
import SearchResults from "../../components/searchResults/SearchResults";
import Seo from "../../components/SEO/Seo";

import { Service } from "../../services/api";

function Dashboard() {
	useEffect(() => {
		const data = async () => {};

		data();

		return () => {};
	}, []);

	return (
		<>
			<Seo
				title="MELI TEST Práctico"
				description="Esta es una descripcion"
				image="https://placekitten.com/1200/630"
			/>
			<SearchBox />
			<SearchResults />
		</>
	);
}

export default Dashboard;
