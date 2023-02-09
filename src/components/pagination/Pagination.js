/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import { Pagination } from "antd";
import ProductContext from "../../context/productContext";
import { Service } from "../../services/api";

function PaginationComp() {
	const { productState, setProductState } = useContext(ProductContext);

	const selectPage = async (page) => {
		console.log("selectPage", page);
		let offset = page * 4; // solo para mostrar de 4 3n 4 segun el requirimeinto

		let _products = await Service(
			"GET",
			`items/search/pagination/${productState?.searchWords}/${productState?.limit}/${offset}`
		);

		setProductState({
			...productState,
			products: _products.data.response,
		});
	};
	return (
		<>
			<div className="ml__pagination">
				<Pagination
					className=""
					pageSize={4}
					defaultCurrent={1}
					onChange={selectPage}
					total={productState.products.pagination.total}
				/>
			</div>
		</>
	);
}

export default PaginationComp;
