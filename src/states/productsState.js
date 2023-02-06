/* eslint-disable no-unused-vars */

import React, { useReducer, useState } from "react";
import ProductContext from "../context/productContext";

const ProductState = ({ children }) => {
	const [productState, setProductState] = useState({
		programModalCreate: false,
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
