import React from "react"
import "./App.css"
import MinTable from "./components/minTable/minTable"

function App() {
	return (
		<div className="container-lg">
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand">React Table</a>
				<div className="collapse navbar-collapse justify-content-center" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link pr-5" href="#">
								Min data <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link pr-5" href="#">
								Big data
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link pr-5" href="#">
								Lazy-load data
							</a>
						</li>
					</ul>
				</div>
				<form className="form-inline">
					<input className="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Search" />
					<button className="btn btn-outline-success my-2 my-sm-0">Искать</button>
				</form>
			</nav>
			<div className="mt-5">
				<MinTable />
			</div>
		</div>
	)
}

export default App
