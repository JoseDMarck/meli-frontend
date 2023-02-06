/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext } from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";
import "./App.css";
import "./assets/css/fonts.css";
import "./assets/css/colors.css";
import "./assets/css/utilities.css";
import "./assets/css/antdCustom.css";
import "./assets/css/buttons.css";
import Renderif from "./components/Renderif";
import AuthState from "./states/authState";
import AuthContext from "./context/authContext";
import ProductState from "./states/productsState";

import UsersState from "./states/userState";
import ComponentState from "./states/componentState";
import ModalMessage from "./components/modals/response/MessageModal";

import Dastboard from "./pages/dashboard/Dashboard";

import { Layout } from "antd";
const { Sider, Content } = Layout;

function PrivateRoute({ children }) {
	const { user } = useContext(AuthContext);
	return user ? children : <Navigate to="/" />;
}

function App() {
	useEffect(() => {
		return () => {};
	});

	return (
		<>
			<AuthState>
				<ComponentState>
					<UsersState>
						<ProductState>
							<Layout className="bg-3rd-gray">
								<Router>
									<ModalMessage />

									<Content>
										<Routes>
											<Route
												exact
												path="/"
												element={<Dastboard />}
											/>
										</Routes>
										<RolRouter></RolRouter>
									</Content>
								</Router>
							</Layout>
						</ProductState>
					</UsersState>
				</ComponentState>
			</AuthState>
		</>
	);
}

function AdminRoutes() {
	return (
		<>
			<Routes>
				<Route exact path="/" element={<Dastboard />} />
			</Routes>
		</>
	);
}

function RolRouter() {
	const { user } = useContext(AuthContext);

	console.log("=========USER========", user);

	return (
		<>
			<Renderif isTrue={user?.rol === 1}>
				{/* <AdminRoutes></AdminRoutes> */}
			</Renderif>
		</>
	);
}

export default App;
