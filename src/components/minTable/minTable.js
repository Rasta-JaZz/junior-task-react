import React from "react"
import { useEffect } from "react"
import { connect } from "react-redux"
import { loadSmallData } from "../redux/AC"

function MinTable(props) {
	useEffect(() => {
		props.fetchData()
	}, [])
	return (
		<div>
			<table className="table">
				<thead className="thead-light">
					<tr>
						<th scope="col">#</th>
						<th scope="col">Имя</th>
						<th scope="col">Фамилия</th>
						<th scope="col">Username</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row">1</th>
						<td>Mark</td>
						<td>Otto</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<th scope="row">2</th>
						<td>Jacob</td>
						<td>Thornton</td>
						<td>@fat</td>
					</tr>
					<tr>
						<th scope="row">3</th>
						<td>Larry</td>
						<td>the Bird</td>
						<td>@twitter</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default connect(null, { fetchData: loadSmallData })(MinTable)
