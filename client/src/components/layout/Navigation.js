import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { Route, Routes, Outlet, Link } from "react-router-dom";

import Substitutes from '../Substitutes/Substitutes';
import Substitute from '../Substitutes/Substitute';
import Expedients from '../Expedients/Expedients';
import Expedient from '../Expedients/Expedient';

//LAYOUT
import Landing from "./Landing";
import Alert from "./Alert";

import { Navbar, Nav, NavDropdown } from "react-bootstrap";

// import Users from "../users/Users";

const Home = () => {
	return <Landing />
}

const NotFound = () => {
	return (
		<Fragment>
			<h1>404</h1>
			<h2>Página no encontrada</h2>
			<Link to='/'>Home</Link>
		</Fragment>
	);
}

const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='substitutes' element={<Substitutes />}></Route>
				<Route path=':id' element={<Substitute />}></Route>
			<Route path='expedients' element={<Expedients />}></Route>
				<Route path=':id' element={<Expedient />}></Route>
			{/* <Route path='users' element={<Users />}></Route> */}
			<Route path='*' element={<NotFound />}></Route>
		</Routes>
	)
}

const Navigation = ({ auth: { isAuthenticated, loading }, logout }) => {
	// const authLinks = (
	// 	<ul>
	// 		<li>
	// 			<Link to="/profiles">
	// 				<span className="hide-sm">Developers</span>
	// 			</Link>
	// 		</li>
	// 		<li>
	// 			<Link to="/dashboard">
	// 				<i className="fas fa-user"></i>
	// 				<span className="hide-sm">Dashboard</span>
	// 			</Link>
	// 		</li>
	// 		<li>
	// 			<Link to="/pautasControl/todas">
	// 				<i className="fas fa-user"></i>
	// 				<span className="hide-sm">Pautas Control</span>
	// 			</Link>
	// 		</li>

	// 		<li>
	// 			<a onClick={logout} href="#!">
	// 				<i className="fas fa-sign-out-alt"></i>
	// 				<span className="hide-sm">Logout</span>
	// 			</a>
	// 		</li>
	// 	</ul>
	// );

	// const guestLinks = (
	// 	<ul>
	// 		<li>
	// 			<Link to="/profiles">
	// 				<span className="hide-sm">Developers</span>
	// 			</Link>
	// 		</li>
	// 		<li>
	// 			<Link to="/register">Register</Link>
	// 		</li>
	// 		<li>
	// 			<Link to="/login">Login</Link>
	// 		</li>
	// 	</ul>
	// );

	// return (
	// 	{// <nav className="navbar bg-dark">
		// 	<h1>
		// 		<Link to="/" />
		// 		<i className="fas fa-code"></i> Vilobí Admin
		// 	</h1>
		// 	{/* {!loading && (
		// 		<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
		// 	)} */}

		// 	<Fragment>
		// 		<div>{authLinks}</div>
		// 		<div>{guestLinks}</div>
		// 	</Fragment>

		// </nav>
	// );

	return (
		<Fragment >
			<Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
				<Navbar.Brand href='/'>
					<img
						alt=''
						src='/logo.svg'
						width='30'
						height='30'
						className='d-inline-block align-top'
					/>
					{' '}Dev Test
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/substitutes'>Substitutes</Nav.Link>
						<Nav.Link href='/expedients'> Expedientes </Nav.Link>
					</Nav>
					<Nav>
						<NavDropdown
							className='user-login-margin'
							title={
								<Fragment>
									{isAuthenticated ? (
										<img
											src='/user_logged.svg'
											width='50'
											height='50'
											className='d-inline-block align-top'
											alt='User Logged In'
										/>
									) : (
										<img
											src='/user_notLogged.svg'
											width='50'
											height='50'
											className='d-inline-block align-top'
											alt='User Logged Out'
										/>
									)}
								</Fragment>
							}
							drop='left'
							key='left'
						>
							{isAuthenticated ? (
								<NavDropdown.Item variant='success' href='#IniciarSesion'> Iniciar Sesión </NavDropdown.Item>
							) : (
								<Fragment>
									<NavDropdown.Item className='dropdownItemDanger' href='#CerrarSesion'> Cerrar Sesión </NavDropdown.Item>
									<NavDropdown.Item href='#Perfil'> Perfil </NavDropdown.Item>
								</Fragment>
							)}
							<NavDropdown.Divider />
							<NavDropdown.Item href='#Registro'> Registro </NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<section className='mainMenu'>
				{/* Define all the routes */}
				<MainRoutes />
			</section>
			<div className='content'>
				<Outlet />
			</div>
		</Fragment>
	);
};

Navigation.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navigation);
