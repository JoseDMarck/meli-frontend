/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FiEdit, FiUnlock } from "react-icons/fi";
import { TbLock } from "react-icons/tb";
import { IoAddCircleOutline } from "react-icons/io5";
import { Space } from "antd";
import Renderif from "../../components/Renderif";
import UsersContext from "../../context/usersContext";
import ComponentContext from "../../context/componentContext";
import DataContext from "../../context/dataContext";

function ProgramActions(props) {
	const {
		setModalActionSeal,
		setModalActionInfo,
		setActionID,
		actionID,
		serUptdateUser,
	} = useContext(DataContext);

	const { stateComp, setStateComp } = useContext(ComponentContext);
	const { userState, setUserState } = useContext(UsersContext);

	const ActionUsers = (type, ID) => {
		console.log("ActionUsers", type, ID);

		//setActionID(ID);

		if (type === 1) {
			setStateComp({
				...stateComp,
				userModalAction: true,
				actionInfo: {
					message: "¿Estás seguro que deseas eliminar este usuario?",
					button: "Eliminar",
					status: 3,
					endpoint: "users/deleteblock",
					endPointRefresh: "users",
				},
			});
		}

		if (type === 2) {
			setStateComp({
				...stateComp,
				userModalUpdate: true,
			});
		}

		if (type === 3) {
			setStateComp({
				...stateComp,
				userModalAction: true,
				actionInfo: {
					message: "¿Estás seguro que deseas bloquear este usuario?",
					button: "Bloquear",
					status: 2,
					endpoint: "users/deleteblock",
					endPointRefresh: "users",
				},
			});
		}

		if (type === 4) {
			console.log("add...");
			setStateComp({
				...stateComp,
				programModalAdd: true,
			});
		}
	};

	return (
		<>
			<Space size="middle">
				<FaTrashAlt
					className="iconA text-purple"
					onClick={() => ActionUsers(1, props.ID)}
				/>
				<FiEdit
					className="iconA text-purple"
					onClick={() => ActionUsers(2, props.ID)}
				/>

				{props.status === "Bloqueado" ? (
					<>
						<FiUnlock
							className="iconA text-purple"
							onClick={() => ActionUsers(4, props.ID)}
						/>
					</>
				) : (
					<>
						<TbLock
							className="iconA text-purple"
							onClick={() => ActionUsers(3, props.ID)}
						/>
					</>
				)}

				<IoAddCircleOutline
					className="iconA text-purple"
					onClick={() => ActionUsers(4, props.ID)}
				/>
			</Space>
		</>
	);
}

export default ProgramActions;

export const ProgramsColumns = [
	{
		title: "Fecha de Inicio",
		dataIndex: "start_date",
		key: "start_date",
		render: (date, row) => (
			<>
				<div className="">{date.slice(0, 10)}</div>
			</>
		),
	},

	{
		title: "Fecha de Fin",
		dataIndex: "end_date",
		key: "end_date",
		render: (date, row) => (
			<>
				<div className="">{date.slice(0, 10)}</div>
			</>
		),
	},

	{
		title: "Usuario",
		dataIndex: "end_date",
		key: ["firstname", "lastname"],
		render: (text, row) => (
			<div className="">
				{row.firstname} {row.lastname}
			</div>
		),
	},
	{
		title: "Correo Electrónico",
		dataIndex: "email",
		key: "email",
		render: (email, row) => (
			<>
				<div className="s_status_b text-blue">{email}</div>
			</>
		),
	},
	{
		title: "Teléfono",
		dataIndex: "phone",
		key: "phone",
		render: (phone, row) => (
			<>
				<div className="s_status text-green">{phone}</div>
			</>
		),
	},

	{
		title: "Estatus",
		dataIndex: "status",
		key: "status",

		render: (status, row) => (
			<>
				<Renderif isTrue={status === 1}>
					<div className="s_status s_type_1">{"Activo"}</div>
				</Renderif>

				<Renderif isTrue={status === 2}>
					<div className="s_status s_type_2">{"Completado"}</div>
				</Renderif>

				<Renderif isTrue={status === 3}>
					<div className="s_status s_type_4">{"Cancelado"}</div>
				</Renderif>

				<Renderif isTrue={status === 4}>
					<div className="s_status s_type_5">{"Inactivo"}</div>
				</Renderif>
			</>
		),
	},
	{
		title: "Acciones",
		key: ["id", "status"],
		render: (text, row) => (
			<ProgramActions ID={row.id} status={row.status} />
		),
	},
];
