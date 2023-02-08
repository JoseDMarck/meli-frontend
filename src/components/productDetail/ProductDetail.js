/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import { Skeleton } from "antd";

import "../../assets/css/components/productDetails.css";
import { BsHeart } from "react-icons/bs";
import { Service } from "../../services/api";
import defaultImg from "../../assets/images/generals/default.png";
import Renderif from "../Renderif";

import GeneralButton from "../buttons/GeneralButton";
import ProductNav from "../productNav/ProductNav";
import ProductContext from "../../context/productContext";

function ProductDetail() {
	const { productState, setProductState } = useContext(ProductContext);

	const [state, setState] = useState({
		product: [],
		isLoader: false,
	});

	useEffect(() => {
		const data = async () => {
			let _product = await Service(
				"GET",
				`items/${productState?.productsID}`
			);
			console.log("===PRODUCT ITEM====", _product.data.response.item);

			setState({
				...state,
				product: _product.data.response.item,
				isLoader: true,
			});
		};
		data();

		return () => {};
	}, []);

	return (
		<>
			<div className="ml__mainContent ml__details bg-3rd-gray">
				<ProductNav />
				<div className="fullContent bg-white ">
					{state?.product.pictures?.map((img, index) => {
						return (
							<>
								<Renderif isTrue={index === 0}>
									<div
										className="pictureContainer"
										// style={{
										// 	backgroundImage: `url(${img.secure_url})`,
										// }}
									>
										<Renderif isTrue={!state.isLoader}>
											<Skeleton active={true} />
											<Skeleton active={true} />
										</Renderif>

										<Renderif isTrue={state.isLoader}>
											<div className="contentImage">
												<img
													src={img.secure_url}
													alt={img.id}
												/>
											</div>
										</Renderif>
									</div>
								</Renderif>
							</>
						);
					})}

					<div className="productDetails">
						<Renderif isTrue={state.isLoader}>
							<div className="aditionalInfo text-3nd-gray">
								{state?.product.condition}{" "}
								<Renderif
									isTrue={state?.product.sold_quantity > 0}
								>
									- {state?.product.sold_quantity} Vendidos
								</Renderif>
							</div>

							<div className="productTitle text-3nd-gray">
								{state?.product.title}
							</div>

							<div className="producPrice">
								${" "}
								{state?.product?.price?.amount.toLocaleString(
									"es-AR"
								)}
							</div>
							<div className="btn">
								<GeneralButton
									className="btn__normal btn__blue transition mr-10"
									title="Comprar"
									onClick={() => console.log("comprar...")}
								/>
							</div>
						</Renderif>

						<Renderif isTrue={!state.isLoader}>
							<Skeleton active={true} />
							<Skeleton active={true} />
						</Renderif>
					</div>

					<div className="clear" />

					<div className="productDescription ">
						<div className="descriptionTitle text-3nd-gray">
							Descripción del producto
						</div>

						<Renderif isTrue={state.isLoader}>
							<div className="descriptionInfo text-2nd-gray">
								{state?.product.description}
							</div>
						</Renderif>

						<Renderif isTrue={!state.isLoader}>
							<Skeleton active={true} />
							<Skeleton active={true} />
						</Renderif>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductDetail;
