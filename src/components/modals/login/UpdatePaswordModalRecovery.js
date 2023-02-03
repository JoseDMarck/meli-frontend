/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { Modal } from "antd";
import { message } from "antd";
import { eye } from "react-icons-kit/icomoon/eye";
import { eyeBlocked } from "react-icons-kit/icomoon/eyeBlocked";
import { Icon } from "react-icons-kit";

import DataContext from "../../../context/dataContext";
import ComponentContext from "../../../context/componentContext";
import { Service } from "../../../services/api";

import { useLocation, Navigate, useNavigate } from "react-router-dom";
var sha1 = require("sha1");
function UpdatePaswordModalRecovery(props) {
	const {
		modalUpdatePassword,
		setModalUpdatePassword,
		generalUserInfo,
		putData,
	} = useContext(DataContext);

	const { stateComp, setStateComp } = useContext(ComponentContext);

	const search = useLocation().search;
	const tokenID = new URLSearchParams(search).get("token");
	const navigate = useNavigate();

	const [password, setpassword] = useState("");
	const [password_1, setpassword_1] = useState("");
	const [password_2, setpassword_2] = useState("");
	const [passwordError, setpasswordError] = useState("");
	const [passwordError_1, setpasswordError_1] = useState("");
	const [passwordError_2, setpasswordError_2] = useState("");
	const [icon, setIcon] = useState(eyeBlocked);
	const [type, setType] = useState("password");

	const closeModal = () => {
		setModalUpdatePassword(false);
		setpassword("");
		setpassword_1("");
		setpassword_2("");
	};

	const handleChange = (event) => {
		if (event.target.name === "password_1") {
			setpassword_1(event.target.value);
			setpasswordError_1("");
		}

		if (event.target.name === "password_2") {
			setpassword_2(event.target.value);
			setpasswordError_2("");
		}
	};

	const showPassword = () => {
		if (type === "password") {
			setIcon(eye);
			setType("text");
		} else {
			setIcon(eyeBlocked);
			setType("password");
		}
	};

	const userValidation = () => {
		if (!password_1) {
			setpasswordError_1("Introduce la nueva contraseña");
			return false;
		} else {
			setpasswordError_1("");
		}

		if (!password_2) {
			setpasswordError_2("Confirma el password");
			return false;
		} else {
			setpasswordError_2("");
		}

		if (password_1 !== password_2) {
			setpasswordError_2("Las contraseñas no son iguales");
			return false;
		} else {
			setpasswordError_2("");
		}

		return true;
	};

	const updateUserPassword = async (event) => {
		event.preventDefault();

		if (userValidation()) {
			const userData = {
				token: tokenID,
				password: password_1,
			};

			console.log(userData);

			let _passwordRecovery = await Service(
				"PUT",
				"users/update/password/recovery",
				userData
			);

			if (_passwordRecovery.data.status === 200) {
				setStateComp({
					...stateComp,
					modalStatus: "success",
					modalMessageTitle: "Operación realizada con éxito:",
					modalMessageDescription: "El password ha sido actualizado",
					modalMessage: true,
					passwordModalUpdate: false,
				});

				setTimeout(() => {
					navigate("/");
					setStateComp({
						...stateComp,
						modalMessage: false,
						//passwordModalUpdate: false,
					});
				}, 3000);
			}
			console.log("_passwordRecovery", _passwordRecovery);

			// putData("users/update/password/recovery", userData).then(
			// 	(result) => {
			// 		console.log("result", result);
			// 		let dataInfo = [];
			// 		if (result.data) {
			// 			dataInfo = [
			// 				{
			// 					message: result.data.message,
			// 					status: result.data.status,
			// 				},
			// 			];
			// 		} else {
			// 			dataInfo = [
			// 				{
			// 					message: result.message,
			// 					status: result.status,
			// 				},
			// 			];
			// 		}

			// 		if (dataInfo[0].status === 200) {
			// 			message.success(dataInfo[0].message);
			// 			//closeModal();
			// 			//getData("users");
			// 			setTimeout(() => {
			// 				navigate("/");
			// 			}, 3000);
			// 		} else if (dataInfo[0].status === 500) {
			// 			message.error(dataInfo[0].message);
			// 			//closeModal();
			// 		} else {
			// 			message.error(`Se ha presentando un error desconocido`);
			// 		}
			// 	}
			// );
		} else {
			//console.log("NO SE VALIDO", emailValidation());
		}
	};

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<Modal
				title="Cambiar contraseña test"
				visible={true}
				onCancel={closeModal}
				cancelButtonProps={{ style: { display: "none" } }}
				okButtonProps={{ style: { display: "none" } }}
			>
				<>
					<div className="psc__modal_btn_content_center psc__btn_blue_input btn-center">
						<div className="form">
							<form
								className="psc__form_modal"
								autoComplete="off"
								onSubmit={updateUserPassword}
							>
								<div className="PSC__form_100">
									<div className="form_content">
										<label>Nueva contraseña</label>

										<div className="passwordInput">
											<div className="eye">
												<span onClick={showPassword}>
													<Icon
														icon={icon}
														size="22"
													/>
												</span>
											</div>
											<input
												type={type}
												name="password_1"
												placeholder=""
												value={password_1}
												onChange={handleChange}
											/>
										</div>
										<div className="f_error">
											{passwordError_1}
										</div>

										<label>Confirmar Contraseña</label>
										<div className="passwordInput">
											<div className="eye">
												<span onClick={showPassword}>
													<Icon
														icon={icon}
														size="22"
													/>
												</span>
											</div>
											<input
												type={type}
												name="password_2"
												placeholder=""
												value={password_2}
												onChange={handleChange}
											/>
										</div>
										<div className="f_error mb-10">
											{passwordError_2}
										</div>
									</div>
								</div>

								<div className="clear"></div>

								<input
									type="submit"
									value="Guardar Cambios"
									className="btn__normal btn__blue transition"
								/>
							</form>
						</div>

						<div className="clear"></div>
					</div>
				</>
			</Modal>
		</>
	);
}

export default UpdatePaswordModalRecovery;
