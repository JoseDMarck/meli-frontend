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
					{productState.products?.categories?.map((cat, index) => {
						return (
							<>
								<span className="categoryITem">{cat}</span>
							</>
						);
					})}
				</Renderif>
			</div>
		</>
	);
}

export default ProductNav;
