/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from "react";
import SearchBox from "../../components/searchBox/SearchBoxComp";
import ProductDetail from "../../components/productDetail/ProductDetail";
import { Service } from "../../services/api";

function Product() {
	useEffect(() => {
		const data = async () => {};

		data();

		return () => {};
	}, []);

	return (
		<>
			<SearchBox />
			<ProductDetail />
		</>
	);
}

export default Product;
