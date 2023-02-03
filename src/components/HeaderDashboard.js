/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useState } from "react";
import "antd/dist/antd.css";
import "../assets/css/headerSearch.css";
import "../assets/css/seals.css";
import { BiBell } from "react-icons/bi";
import profile from "../assets/images/generals/profilep.png";
import DataContext from "../context/dataContext";
import SearchForm from "./SearchForm";

function HeaderDashboard() {
	const userName = localStorage.getItem("userName");
	const userRol = localStorage.getItem("userRol");

	return (
		<>
			<div className="sf__header">
				<div className="InputSearch">
					<SearchForm
						width="90%"
						height="50px"
						placeholder="Buscar programa..."
						color="#FFF"
						background="#211d1d"
						borderColor="#211d1d"
					/>
				</div>

				<div className="Profile">
					<div className="profilePicture">
						<div className="info">
							<div className="title">{userName}</div>
							<div className="role">{userRol}</div>
						</div>
						<div className="photo">
							<img src={profile} alt="foto" />
						</div>

						<div className="notify bg-gray">
							<BiBell />
						</div>
						<div className="clear"></div>
					</div>
				</div>

				<div className="clear"></div>
			</div>
		</>
	);
}

export default HeaderDashboard;
