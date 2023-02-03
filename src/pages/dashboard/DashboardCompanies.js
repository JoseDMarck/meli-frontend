/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "../../assets/css/dashboard.css";
import { HiOutlineTicket } from "react-icons/hi";
import { GiBattleship } from "react-icons/gi";
import { BsCheck2Circle } from "react-icons/bs";
import { BiBuilding } from "react-icons/bi";
import moment from "moment";
import { Select } from "antd";
import profile from "../../assets/images/generals/profilep.png";
const { Option } = Select;

function DashboardCompanies() {
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};

	useEffect(() => {
		const IsLoggin = localStorage.getItem("setLogin");
		return () => {};
	}, []);

	return (
		<>
			<div className="companies_section text-gray">
				<div className="header_company">
					<div className="title_company text-white sf__section_title">
						Programas
					</div>
					<div className="select_filer_companies">
						<Select
							placeholder="Filtrar por"
							style={{
								width: 160,
							}}
							onChange={handleChange}
						>
							<Option value="0">Últimos 30 días</Option>
						</Select>
					</div>
					<div className="clear"></div>
				</div>
				<div className="header_company">
					<div className="subtitle_company text-white sf__text_normal">
						Nombre
					</div>
					<div className="subtitle_company text-white text-right sf__text_normal mb-10">
						Número de sellos
					</div>

					<div className="clear"></div>
					<div className="line"></div>
				</div>

				<div className="company_list_Section">
					<div className="list_company bg-gray">
						<div className="icon">
							<img src={profile} alt="icon" />
						</div>
						<div className="data_seals  sf__text_normal">
							<div className="company_name text-white">
								Programa para: Jose D. Saramago
							</div>
							<div className="company_seals text-red">
								16 Ejercicios
							</div>

							<span className=""></span>
						</div>
						<div className="clear"></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default DashboardCompanies;
