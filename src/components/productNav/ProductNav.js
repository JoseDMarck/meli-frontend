/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import "../../assets/css/components/searchResults.css";
import Renderif from "../Renderif";
import ProductContext from "../../context/productContext";

function ProductNav() {
	const { productState, setProductState } = useContext(ProductContext);

	return (
		<>
			<div className="navDetail text-2nd-gray	">
				<Renderif isTrue={productState.displayNav}>
					{
						"Electronica, audio y video > Pod > Repoductores > iPod Touch > 32Gb "
					}
				</Renderif>
			</div>
		</>
	);
}

export default ProductNav;
