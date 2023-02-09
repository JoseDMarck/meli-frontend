/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import "../../assets/css/components/searchResults.css";
import { Empty, Tooltip } from "antd";
import { useNavigate } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { HiOutlineTruck } from "react-icons/hi";
import { Service } from "../../services/api";
import { useLocation } from "react-router-dom";

import Renderif from "../Renderif";
import RenderLoader from "../RenderLoader";
import PaginationComp from "../../components/pagination/Pagination";
import ProductNav from "../productNav/ProductNav";
import ProductContext from "../../context/productContext";

function SearchResults() {
	const navigate = useNavigate();
	const search = useLocation().search;
	const querySearch = new URLSearchParams(search).get("search");

	const { productState, setProductState } = useContext(ProductContext);

	const [state, setState] = useState({
		likeEffect: "",
		wishlist: [],
	});

	const [wishlist, setWishlist] = useState([]);

	useEffect(() => {
		const data = async () => {
			let _search = await Service(
				"GET",
				`items/search/pagination/${querySearch}/${productState?.limit}/${productState?.offset}`
			);
			console.log("search ****", _search);

			setProductState({
				...productState,
				products: _search.data.response,
				isLoader: false,
				displayNav: true,
				searchWords: productState.searchWords,
			});
		};

		if (querySearch) data();

		return () => {};
	}, []);

	const addToWishlist = (e, product) => {
		e.stopPropagation();
		console.log("wishzlist", product);

		setState((state) => ({
			likeEffect: "likeAnimation",
		}));

		//setWishlist([...wishlist, product]);

		setProductState({
			...productState,
			wishListItems: [...productState.wishListItems, product],
		});

		// setWishlist((state) => {
		// 	console.log("setWishlist *** ", state);

		// 	setProductState({
		// 		...productState,
		// 		wishListItems: state,
		// 	});
		// 	return state;
		// });

		setTimeout(() => {
			setState({
				likeEffect: "",
			});
		}, 1000);
	};
	return (
		<>
			<div className="ml__mainContent bg-3rd-gray">
				<ProductNav />

				<div className="fullContent bg-white ">
					<Renderif isTrue={productState.products?.items?.length > 0}>
						{productState.products?.items?.map((product, index) => {
							return (
								<>
									<div
										className="itemsResultscontent transition pointer"
										key={product.id}
										onClick={() => {
											setProductState({
												...productState,
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
										>
											<div
												className={`likeIcon transition ${state.likeEffect}`}
												onClick={(e) => {
													addToWishlist(e, product);
												}}
											>
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
													<Tooltip
														placement="topLeft"
														title="Envío Gratis"
													>
														<span className="freeshiping pulse">
															<HiOutlineTruck />
														</span>
													</Tooltip>
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
								</>
							);
						})}

						<PaginationComp />
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
