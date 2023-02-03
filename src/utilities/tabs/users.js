import { FaTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { TbLock } from "react-icons/tb";
import Renderif from "../../components/Renderif";
import { Space } from "antd";

export const UsersColumns = [
	{
		title: "Nombre",
		dataIndex: "firstname",
		key: "firstname",
	},

	{
		title: "Apellido",
		dataIndex: "lastname",
		key: "lastname",
	},
	{
		title: "Correo Electrónico",
		dataIndex: "email",
		key: "email",
	},
	{
		title: "Teléfono",
		dataIndex: "phone",
		key: "phone",
	},

	{
		title: "Rol",
		dataIndex: "rol",
		key: "rol",

		render: (rol, row) => (
			<>
				<Renderif isTrue={rol === 0}>
					<div className="s_status s_type_1">{"Sin asignar"}</div>
				</Renderif>

				<Renderif isTrue={rol === 1}>
					<div className="s_status s_type_2">{"Administrador"}</div>
				</Renderif>

				<Renderif isTrue={rol === 2}>
					<div className="s_status s_type_3">{"Deportista"}</div>
				</Renderif>
			</>
		),
	},
	{
		title: "Acciones",
		key: "action",
		render: (_, record) => (
			<Space size="middle">
				<FaTrashAlt className="iconA text-purple" />
				<FiEdit className="iconA text-purple" />
				<TbLock className="iconA text-purple" />
			</Space>
		),
	},
];
