import React from "react"
import { Switch, Route, NavLink } from "react-router-dom"
import { filterEntitiesSelector } from "./components/redux/selector"
import { connect } from "react-redux"
import { findData, findAs } from "./components/redux/AC"
import MinTable from "./components/minTable/minTable"
import Card from "./components/card"
import Modal from "./components/modal/modal"
import CardInput from "./components/card/cardInput"
import LazyTable from "./components/lazyTable"
import Error from "./components/error/error"
import "./App.css"

function App(props) {
	const [showModal, setShowModal] = React.useState(false)
	const handleShow = () => setShowModal(!showModal)

	const handleChange = (e) => {
		props.findData(e.target.value)
	}
	if (props.error) return <Error />
	return (
		<div className="container-lg">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<p className="navbar-brand">React Table</p>
				<div className="collapse navbar-collapse justify-content-center" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<NavLink to="/" activeClassName="active">
								<p className="nav-link pr-5">
									Min data <span className="sr-only"></span>
								</p>
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to="/big-data" activeClassName="active">
								<p className="nav-link pr-5">Big data</p>
							</NavLink>
						</li>
					</ul>
				</div>
				<form className="form-inline">
					<select
						className="custom-select"
						id="inputGroupSelect01"
						onClick={(e) => props.findAs(e.currentTarget.value)}
					>
						<option>Искать по...</option>
						<option value={"firstName"}>Имя</option>
						<option value={"lastName"}>Фамиия</option>
						<option value={"email"}>Email</option>
					</select>
					<input
						className="form-control mr-sm-2"
						type="search"
						placeholder="Поиск"
						aria-label="Search"
						onChange={(e) => handleChange(e)}
					/>
				</form>
			</nav>
			{showModal && (
				<Modal show={handleShow}>
					<CardInput />
				</Modal>
			)}
			<div className="mt-5">
				<button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>
					Add person
				</button>
				<Switch>
					<Route exact path="/" component={MinTable} />
					<Route exact path="/big-data" component={LazyTable} />
				</Switch>
			</div>
			<Card />
		</div>
	)
}

export default connect(
	(state) => ({
		data: filterEntitiesSelector(state),
		error: state.data.error,
	}),
	{
		findData,
		findAs,
	}
)(App)
