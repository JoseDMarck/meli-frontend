/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import "../../assets/css/components/searchBox.css";
import { Badge } from "antd";
import { AiFillHeart } from "react-icons/ai";
import Renderif from "../Renderif";
import ProductContext from "../../context/productContext";

function WishtListBadge() {
	const { productState, setProductState } = useContext(ProductContext);

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<span
				className="whislistIcon pointer"
				onClick={() =>
					setProductState({
						...productState,
						showWishList: true,
					})
				}
			>
				<Badge count={productState?.wishListItems?.length}>
					<AiFillHeart />
				</Badge>
			</span>
		</>
	);
}

export default WishtListBadge;
