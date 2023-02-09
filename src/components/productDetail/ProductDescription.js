/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import Renderif from "../Renderif";
import RenderLoader from "../RenderLoader";
import GeneralButton from "../buttons/GeneralButton";
import ProductContext from "../../context/productContext";

function ProductDescription() {
	const { productState, setProductState } = useContext(ProductContext);

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<div className="descriptionTitle text-3nd-gray">
				Descripción del producto
			</div>

			<RenderLoader isTrue={productState?.isLoader}>
				<div
					className="descriptionInfo text-2nd-gray"
					dangerouslySetInnerHTML={{
						__html: productState?.product.description,
					}}
				/>
			</RenderLoader>
		</>
	);
}

export default ProductDescription;
