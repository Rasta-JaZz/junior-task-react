import React from "react"
import { connect } from "react-redux"
import { loadSmallData, sortBy, activeCard } from "../redux/AC"
import { filterEntitiesSelector } from "../redux/selector"
import _ from "lodash"
import Loader from "../loader/loader"

function MinTable(props) {
	React.useEffect(() => {
		props.fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const handleSort = (e) => {
		const list = e.target.classList
		props.sort(e.target.textContent)
		if (list.value === "asc") {
			list.remove("asc")
			list.add("desc")
		} else {
			list.remove("desc")
			list.add("asc")
		}
	}

	const handleClick = (id) => {
		props.card(_.find(props.data, ["id", id]))
	}

	const getBody = () => {
		const { data } = props
		try {
			return data.map((item) => (
				<tr key={item.id + Math.random()} onClick={() => handleClick(item.id)}>
					<th scope="row">{item.id}</th>
					<td>{item.firstName}</td>
					<td>{item.lastName}</td>
					<td>{item.phone}</td>
					<td>{item.email}</td>
				</tr>
			))
		} catch (error) {}
	}

	if (props.loading) return <Loader />

	return (
		<div className="table_border">
			<table className="table">
				<thead className="thead-light">
					<tr onClick={(e) => handleSort(e)}>
						<th scope="col">id</th>
						<th scope="col">firstName</th>
						<th scope="col">lastName</th>
						<th scope="col">phone</th>
						<th scope="col">email</th>
					</tr>
				</thead>
				<tbody>{getBody()}</tbody>
			</table>
		</div>
	)
}

export default connect(
	(state) => ({
		data: filterEntitiesSelector(state),
		dir: state.data.dir,
		loading: state.data.loading,
		error: state.data.error,
	}),
	{
		fetchData: loadSmallData,
		sort: sortBy,
		card: activeCard,
	}
)(MinTable)
