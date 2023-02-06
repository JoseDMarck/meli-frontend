/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import "../../assets/css/components/productDetails.css";
import { BsHeart } from "react-icons/bs";
import defaultImg from "../../assets/images/generals/default.png";
import GeneralButton from "../buttons/GeneralButton";
import ProductNav from "../productNav/ProductNav";

function ProductDetail() {
	return (
		<>
			<div className="ml__mainContent ml__details bg-3rd-gray">
				<ProductNav />
				<div className="fullContent bg-white ">
					<div
						className="pictureContainer"
						style={{
							backgroundImage: `url(${defaultImg})`,
						}}
					></div>

					<div className="productDetails">
						<div className="aditionalInfo text-3nd-gray">
							Nuevo - 234 Vendidos
						</div>

						<div className="productTitle text-3nd-gray">
							Deco Reverse Sombrero Oxford
						</div>

						<div className="producPrice">$1.980</div>
						<div className="btn">
							<GeneralButton
								className="btn__normal btn__blue transition mr-10"
								title="Comprar"
								onClick={() => console.log("comprar...")}
							/>
						</div>
					</div>

					<div className="clear" />

					<div className="productDescription ">
						<div className="descriptionTitle text-3nd-gray">
							Descripción del producto
						</div>

						<div className="descriptionInfo text-2nd-gray">
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua. Ut enim ad minim ven Lorem
							ipsum dolor sit amet, consectetur adipiscing elit,
							sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua. Ut enim ad minim venLorem ipsum dolor
							sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna
							aliqua. Ut enim ad minim ven
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ProductDetail;
