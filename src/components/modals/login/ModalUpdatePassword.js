/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import { Modal } from "antd";
import { message, Upload } from "antd";
import DataContext from "../../../context/dataContext";
import { urlService, DashboardURL } from "../../../services/UrlService";
import { Service } from "../../../services/api";

import ImgCrop from "antd-img-crop";
import ComponentContext from "../../../context/componentContext";
import Renderif from "../../../components/Renderif";

var sha1 = require("sha1");
function ModalUpdatePassword(props) {
	const {
		putData,
		generalUserInfo,
		updatePasswordModal,
		SetUpdatePasswordModal,
		postData,
	} = useContext(DataContext);

	const [userEmail, setuserEmail] = useState("");
	const [userEmailError, setuserEmailError] = useState("");
	const { stateComp, setStateComp } = useContext(ComponentContext);

	const closeModal = () => {
		setStateComp({
			...stateComp,
			passwordModalUpdate: false,
		});

		setuserEmail("");
	};

	const handleChange = (event) => {
		if (event.target.name === "userEmail") {
			setuserEmail(event.target.value);
			setuserEmailError("");
		}
	};

	const emailValidation = () => {
		const regex =
			/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		if (!userEmail || regex.test(userEmail) === false) {
			console.log("El correo no es válido");
			setuserEmailError("Introduce un correo válido");
			return false;
		} else {
			setuserEmailError("");
		}

		return true;
	};

	const userValidation = () => {
		if (!userEmail) {
			setuserEmailError("Introduce el correo del usuario");
			return false;
		} else {
			emailValidation();
		}

		return true;
	};

	const updateUserPassword = async (event) => {
		event.preventDefault();

		if (userValidation()) {
			const userData = {
				email: userEmail,
			};

			console.log("userData", userData);

			let _getUserData = await Service(
				"POST",
				"users/getUserData",
				userData
			);
			console.log("===USER DATA ====", _getUserData);

			if (_getUserData.data.status === 200) {
				let emailData = {
					email: _getUserData.data.email,
					username: _getUserData.data.fullname,
					token: _getUserData.data.token,
					siteURL:
						DashboardURL +
						"/password/recovery?token=" +
						_getUserData.data.token,
				};

				console.log("userinfo", emailData);

				let _passwordRecovery = await Service(
					"POST",
					"email/recovery/",
					emailData
				);

				console.log("password recovery", _passwordRecovery);

				if (_passwordRecovery.data.status === 200) {
					setStateComp({
						...stateComp,
						modalStatus: "success",
						modalMessageTitle: "Operación realizada con éxito:",
						modalMessageDescription:
							"Se ha enviado un correo para reestablecer tu contraseña",
						modalMessage: true,
						passwordModalUpdate: false,
					});
				} else {
					setStateComp({
						...stateComp,
						modalStatus: "error",
						modalMessageTitle: "La operación ha fallado:",
						modalMessageDescription:
							"El usuario no existe o no se encuentra registrado",
						modalMessage: true,
						passwordModalUpdate: false,
					});
				}
			} else {
				setStateComp({
					...stateComp,
					modalStatus: "error",
					modalMessageTitle: "La operación ha fallado:",
					modalMessageDescription:
						"El usuario no existe o no se encuentra registrado",
					modalMessage: true,
					passwordModalUpdate: false,
				});
			}
		} else {
			//console.log("NO SE VALIDO", emailValidation());
		}
	};

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<>
			<div className="and-modal-upload">
				<Modal
					title="Cambiar contraseña"
					visible={stateComp.passwordModalUpdate}
					onCancel={closeModal}
					cancelButtonProps={{
						style: { display: "none" },
					}}
					okButtonProps={{
						style: { display: "none" },
					}}
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
											<p className="psc__text_normal mb-20 text-center text-gray">
												Para reestablecer tu contraseña,
												ingresa el correo con el que
												estás registrado en la
												plataforma.
											</p>

											<input
												type="text"
												name="userEmail"
												placeholder="Correo Electrónico"
												className="mb-20"
												value={userEmail}
												onChange={handleChange}
											/>
											<div className="f_error  mb-20">
												{userEmailError}
											</div>
										</div>
									</div>

									<div className="clear"></div>

									<input
										type="submit"
										value="Reestablecer contraseña"
										className="btn__normal btn__blue transition"
									/>
								</form>
							</div>

							<div className="clear"></div>
						</div>
					</>
				</Modal>
			</div>
		</>
	);
}

export default ModalUpdatePassword;
