/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import Renderif from "../Renderif";
import RenderLoader from "../RenderLoader";
import GeneralButton from "../buttons/GeneralButton";
import ProductContext from "../../context/productContext";

function ProductInfo() {
	const { productState, setProductState } = useContext(ProductContext);

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<RenderLoader isTrue={productState?.isLoader}>
				<div className="aditionalInfo text-3nd-gray">
					{productState?.product.condition}{" "}
					<Renderif isTrue={productState?.product.sold_quantity > 0}>
						- {productState?.product.sold_quantity} Vendidos
					</Renderif>
				</div>
				<div className="productTitle text-3nd-gray">
					{productState?.product.title}
				</div>

				<div className="producPrice">
					${" "}
					{productState?.product?.price?.amount.toLocaleString(
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
			</RenderLoader>
		</>
	);
}

export default ProductInfo;
