/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import "../assets/css/dashboard.css";
import "../assets/css/mainMenu.css";
import logo from "../assets/images/logos/SF_Logo_2.png";
import { Link, Redirect, Navigate, useNavigate } from "react-router-dom";
import { FiHome, FiLogOut } from "react-icons/fi";
import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaRegAddressCard } from "react-icons/fa";
import { MdOutlineCollectionsBookmark, MdTimer } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { TbQrcode } from "react-icons/tb";
import { CgAddR } from "react-icons/cg";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { IconName } from "react-icons/io";
import { mainMenu } from "./menuItems";
import DataContext from "../context/dataContext";
import AuthContext from "../context/authContext";

import { Layout } from "antd";
const { Sider } = Layout;

function MainMenu() {
	const [state, setState] = useState({
		page_active: "dashboard",
	});

	const navigate = useNavigate();

	const { user, setUser } = useContext(AuthContext);

	const selectMenu = (page) => {
		setState({
			...state,
			page_active: page === "logout" ? "carga-masiva" : page,
		});

		if (page === "logout") {
			localStorage.clear();
			setUser(null);
			navigate(`/`);
		} else {
			navigate(`/${page}`);
		}
	};

	const getIcon = (icon) => {
		switch (icon) {
			case "FiHome":
				return <FiHome className="M-icon" />;
			case "AiOutlineUser":
				return <AiOutlineUser className="M-icon" />;
			case "FaRegAddressCard":
				return <FaRegAddressCard className="M-icon" />;

			case "MdOutlineCollectionsBookmark":
				return <MdOutlineCollectionsBookmark className="M-icon" />;

			case "AiOutlineUsergroupAdd":
				return <AiOutlineUsergroupAdd className="M-icon" />;

			case "TbQrcode":
				return <TbQrcode className="M-icon" />;
			case "MdTimer":
				return <MdTimer className="M-icon" />;
			case "CgAddR":
				return <CgAddR className="M-icon" />;

			case "FiLogOut":
				return <FiLogOut className="M-icon" />;
			case "CgGym":
				return <CgGym className="M-icon" />;

			case "IoCalendarNumberOutline":
				return <IoCalendarNumberOutline className="M-icon" />;
			default:
				return false;
		}
	};

	return (
		<>
			{user ? (
				<>
					<Sider>
						<section className="sf__MainMenu bg-gray">
							<div className="logo">
								<img
									className="d-none d-lg-block"
									src={logo}
									alt="logo"
								/>
							</div>

							<div className="menuItemsBlock">
								{mainMenu
									.filter((item) => item.rol === user.rol)[0]
									.menu.map((menu_item, i) => {
										return (
											<div key={i}>
												<div
													className={`items transition ${
														state.page_active ===
														menu_item.page
															? "active"
															: ""
													}`}
												>
													<div
														className="mb__menu_item mb__menu_normal"
														onClick={() =>
															selectMenu(
																menu_item.page
															)
														}
													>
														<div className="mb__menu_item_icon">
															{getIcon(
																menu_item.icon
															)}
														</div>
														<div className="mb__menu_item_text">
															{menu_item.item}
														</div>
													</div>
												</div>
											</div>
										);
									})}
							</div>
						</section>
					</Sider>
				</>
			) : (
				""
			)}
		</>
	);
}

export default MainMenu;
