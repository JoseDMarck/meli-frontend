/* eslint-disable no-unused-vars */

import React, { useReducer, useState } from "react";
import ProductContext from "../context/productContext";

const ProductState = ({ children }) => {
	const [productState, setProductState] = useState({
		products: [],
		searchWords: "",
		emptyMessage: "Realiza una busqueda del producto soñado",
		productsUpdate: false,
		productsList: [],
		offset: 0,
		limit: 4,
		displayNav: false,
	});

	return (
		<ProductContext.Provider
			value={{
				...productState,
				productState,
				setProductState,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductState;
