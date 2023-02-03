/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import "../../assets/css/dashboard.css";

import {
	GiBattleship,
	GiStrong,
	GiBookCover,
	GiCrownedHeart,
	GiCheckMark,
	GiConqueror,
} from "react-icons/gi";
import moment from "moment";
import { Select } from "antd";
import AnimatedNumber from "animated-number-react";
const { Option } = Select;
function DashboardInfoBlocks() {
	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};

	const formatValue = (value) => value.toFixed(0);

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<div className="home__section_data">
				<div className="header_section">
					<div className="btn__icon_date text-white ">
						Fecha: {moment(Date.now()).format("DD/MM/YYYY")}
					</div>

					<div className="select_filer_dates">
						<Select
							defaultValue="1"
							style={{
								width: 160,
							}}
							onChange={handleChange}
						>
							<Option value="1">Últimos 30 días</Option>
							<Option value="2">Hoy</Option>
						</Select>
					</div>
					<div className="clear"></div>
				</div>

				<div className="info_blocks">
					<div className="block">
						<div className="data bg-gray">
							<div className="info .sf__center_grid_full text-gray">
								<div className="icon">
									<div className="icon bg-red">
										<GiConqueror />
									</div>
								</div>
								<div className="numbers">
									<div className="number text-white">
										<AnimatedNumber
											value={32}
											formatValue={formatValue}
										/>
									</div>
									<div className="description">Usuarios</div>
								</div>

								<div className="clear"></div>
							</div>
						</div>
					</div>
					<div className="block">
						<div className="data bg-gray">
							<div className="info .sf__center_grid_full text-gray">
								<div className="icon bg-red">
									<GiBookCover />
								</div>

								<div className="numbers">
									<div className="number text-white">
										<AnimatedNumber
											value={80}
											formatValue={formatValue}
										/>
									</div>
									<div className="description">Programas</div>
								</div>

								<div className="clear"></div>
							</div>
						</div>
					</div>
					<div className="block">
						<div className="data bg-gray">
							<div className="info .sf__center_grid_full text-gray">
								<div className="icon bg-red">
									<GiCrownedHeart />
								</div>

								<div className="numbers">
									<div className="number text-white">
										<AnimatedNumber
											value={60}
											formatValue={formatValue}
										/>
									</div>
									<div className="description">Activos</div>
								</div>

								<div className="clear"></div>
							</div>
						</div>
					</div>
					<div className="block">
						<div className="data bg-gray">
							<div className="info .sf__center_grid_full text-gray">
								<div className="icon bg-red">
									<GiCheckMark />
								</div>
								<div className="numbers">
									<div className="number text-white">
										<AnimatedNumber
											value={820}
											formatValue={formatValue}
										/>
									</div>
									<div className="description">
										Completados
									</div>
								</div>

								<div className="clear"></div>
							</div>
						</div>
					</div>
					<div className="clear"></div>
				</div>
			</div>
		</>
	);
}

export default DashboardInfoBlocks;
