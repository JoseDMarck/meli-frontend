/* eslint-disable no-unused-vars */

import React, { useReducer, useState, useEffect } from "react";
import ProductContext from "../context/productContext";

const ProductState = ({ children }) => {
	const [productState, setProductState] = useState({
		products: [],
		product: [],
		wishListItems: [],
		isLoader: false,
		isLoaderResults: false,
		productsID: "",
		searchWords: "",
		emptyMessage: "Realiza una busqueda del producto soñado",
		productsUpdate: false,
		productsList: [],
		offset: 0,
		limit: 4,
		displayNav: false,
		udpateState: false,
		showWishList: false,
	});

	useEffect(() => {
		let _wishlist = localStorage.getItem("whislist");
		let wishlist = JSON.parse(_wishlist);
		if (_wishlist) {
			productState.user = wishlist;
			setProductState({ ...productState });
		}
	}, []);

	const setWishList = (wishListItems) => {
		setProductState({ ...productState, wishListItems: wishListItems });
	};

	return (
		<ProductContext.Provider
			value={{
				...productState,
				productState,
				setWishList,
				setProductState,
			}}
		>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductState;
