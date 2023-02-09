/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import "../../assets/css/components/productDetails.css";
import { Skeleton } from "antd";
import { Service } from "../../services/api";
import { useParams } from "react-router-dom";
import Renderif from "../Renderif";
import RenderLoader from "../RenderLoader";
import GeneralButton from "../buttons/GeneralButton";
import ProductNav from "../productNav/ProductNav";
import ProductContext from "../../context/productContext";
import ProductInfo from "./ProductInfo";
import ProductDescription from "./ProductDescription";
import ProductImages from "./ProductImages";

function ProductDetail() {
	const { productState, setProductState } = useContext(ProductContext);
	const params = useParams();

	useEffect(() => {
		const data = async () => {
			let _product = await Service("GET", `items/${params?.id}`);
			console.log("===PRODUCT ITEM====", _product.data.response.item);

			setProductState({
				...productState,
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
					<ProductImages />

					<div className="productDetails">
						<ProductInfo />
					</div>

					<div className="clear" />

					<div className="productDescription ">
						<ProductDescription />
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductDetail;
