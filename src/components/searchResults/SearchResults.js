/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import { Empty } from "antd";
import "../../assets/css/components/searchResults.css";
import { useNavigate } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { HiOutlineTruck } from "react-icons/hi";
import defaultImg from "../../assets/images/generals/default.png";
import Renderif from "../Renderif";
import { Service } from "../../services/api";
import ProductNav from "../productNav/ProductNav";
import ProductContext from "../../context/productContext";

function SearchResults() {
	const navigate = useNavigate();

	const { productState, setProductState } = useContext(ProductContext);
	const [state, setState] = useState({
		products: [],
	});

	useEffect(() => {
		const data = async () => {
			let _products = await Service("GET", `items/search/${"iphone"}`);
			console.log("===PRODUCTS====", _products.data.response);

			setProductState({
				...productState,
				products: _products.data.response,
			});
		};
		//data();

		return () => {};
	}, []);

	return (
		<>
			<div className="ml__mainContent bg-3rd-gray">
				<ProductNav />

				<div className="fullContent bg-white ">
					<Renderif isTrue={productState.products?.items?.length > 0}>
						{productState.products?.items?.map((product, index) => {
							return (
								<div
									className="itemsResultscontent transition pointer"
									key={product.id}
									onClick={() => navigate(`/product`)}
								>
									<div
										className="picture"
										style={{
											backgroundImage: `url(${product.picture})`,
										}}
									>
										<div className="likeIcon transition">
											<BsHeart />
										</div>
									</div>

									<div className="productDetails">
										<div className="price">
											${" "}
											{product.price.amount.toLocaleString(
												"es-AR"
											)}{" "}
											<Renderif
												isTrue={
													product.free_shipping ===
													true
												}
											>
												<span className="freeshiping pulse">
													<HiOutlineTruck />
												</span>
											</Renderif>
										</div>
										<div className="title">
											{product.title}
										</div>
										<div className="other_info">
											Estado: {product.condition}
										</div>
									</div>

									<div className="seller_info text-2nd-gray">
										Capital Federal
									</div>

									<div className="clear" />
								</div>
							);
						})}
					</Renderif>

					<Renderif isTrue={productState.products?.length === 0}>
						<Empty description={productState.emptyMessage}></Empty>
					</Renderif>
				</div>
			</div>
		</>
	);
}

export default SearchResults;
