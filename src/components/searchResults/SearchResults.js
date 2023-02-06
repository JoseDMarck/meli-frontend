/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import "../../assets/css/components/searchResults.css";
import { BsHeart } from "react-icons/bs";
import defaultImg from "../../assets/images/generals/default.png";
import Renderif from "../Renderif";
import ProductNav from "../productNav/ProductNav";

function SearchResults() {
	return (
		<>
			<div className="ml__mainContent bg-3rd-gray">
				<ProductNav />
				<div className="fullContent bg-white ">
					<div className="itemsResultscontent transition pointer">
						<div
							className="picture"
							style={{
								backgroundImage: `url(${defaultImg})`,
							}}
						>
							<div className="likeIcon transition">
								<BsHeart />
							</div>
						</div>

						<div className="productDetails">
							<div className="price">$1.980</div>
							<div className="title">
								Apple iPod Touch 5g 16gb Negro igual a Nuevo
							</div>
							<div className="other_info">Completo único!</div>
						</div>

						<div className="seller_info text-2nd-gray">
							Capital Federal
						</div>

						<div className="clear" />
					</div>

					<div className="itemsResultscontent transition pointer">
						<div
							className="picture"
							style={{
								backgroundImage: `url(${defaultImg})`,
							}}
						>
							<div className="likeIcon transition">
								<BsHeart />
							</div>
						</div>

						<div className="productDetails">
							<div className="price">$1.980</div>
							<div className="title">
								Apple iPod Touch 5g 16gb Negro igual a Nuevo
							</div>
							<div className="other_info">Completo único!</div>
						</div>

						<div className="seller_info text-2nd-gray">
							Capital Federal
						</div>

						<div className="clear" />
					</div>
				</div>
			</div>
		</>
	);
}

export default SearchResults;
