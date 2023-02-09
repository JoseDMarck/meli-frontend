/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import "../../assets/css/components/searchBox.css";
import { useNavigate } from "react-router-dom";

import { Drawer } from "antd";
import { AiFillHeart } from "react-icons/ai";
import Renderif from "../Renderif";
import ProductContext from "../../context/productContext";

function WishtListDrawer() {
	const navigate = useNavigate();
	const { productState, setProductState } = useContext(ProductContext);

	useEffect(() => {
		return () => {};
	}, []);

	const onClose = () => {
		setProductState({
			...productState,
			showWishList: false,
		});
	};

	return (
		<>
			<Drawer
				title="Los Productos que te han gustado"
				placement="right"
				onClose={onClose}
				open={productState?.showWishList}
				visible={productState?.showWishList}
			>
				<Renderif isTrue={productState.wishListItems?.length > 0}>
					{productState.wishListItems?.map((product, index) => {
						return (
							<>
								<div
									className="wishListcontent transition pointer"
									key={product.id}
									onClick={() => {
										setProductState({
											...productState,
											isLoader: false,
											showWishList: false,
											productsID: product.id,
										});
										navigate(`/items/${product.id}`);
									}}
								>
									<div
										className="picture"
										style={{
											backgroundImage: `url(${product.picture})`,
										}}
									></div>

									<div className="productDetails">
										<div className="price">
											${" "}
											{product.price.amount.toLocaleString(
												"es-AR"
											)}{" "}
										</div>
										<div className="title">
											{product.title}
										</div>
										<div className="other_info">
											Estado: {product.condition}
										</div>
									</div>

									<div className="clear" />
								</div>
							</>
						);
					})}
				</Renderif>
			</Drawer>
		</>
	);
}

export default WishtListDrawer;
