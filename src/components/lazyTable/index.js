import React from "react"
import { connect } from "react-redux"
import { loadBigData, activeCard, sortBy } from "../../components/redux/AC"
import { filterEntitiesSelector } from "../../components/redux/selector"
import { Table, Column, AutoSizer } from "react-virtualized"
import _ from "lodash"
import Loader from "../loader/loader"
import "react-virtualized/styles.css"
import "./style.css"

function LazyTable(props) {
	const { fetchData, entities, loading } = props

	React.useEffect(() => {
		fetchData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const rowGetter = ({ index }) => entities[index]

	const rowClick = ({ rowData }) => {
		props.card(_.find(props.entities, ["id", rowData.id]))
	}

	const headerClick = (columnData) => {
		props.sort(columnData.dataKey)
		const list = columnData.event.target.classList

		if (list.value.indexOf("asc") >= 1) {
			list.remove("asc")
			list.add("desc")
		} else {
			list.remove("desc")
			list.add("asc")
		}
	}

	if (loading) return <Loader />
	return (
		<div className="container" style={{ marginBottom: "50px" }}>
			<div style={{ height: "50px" }}></div>
			<AutoSizer>
				{({ onRowsRendered, registerChild }) => (
					<Table
						onRowsRendered
						registerChild
						rowCount={1000}
						className="table-main"
						ref={registerChild}
						overscanRowCount={50}
						rowCount={entities.length}
						rowGetter={rowGetter}
						width={1130}
						headerHeight={50}
						height={700}
						rowHeight={40}
						onRowsRendered={onRowsRendered}
						rowClassName="table-row "
						onHeaderClick={headerClick}
						onRowClick={rowClick}
						// headerClassName="asc"
					>
						<Column dataKey="id" label="id" width={100} />
						<Column dataKey="firstName" label="Имя" width={250} />
						<Column dataKey="lastName" label="Фамилия" width={250} />
						<Column dataKey="phone" label="Телефон" width={250} />
						<Column dataKey="email" label="Email" width={250} />
					</Table>
				)}
			</AutoSizer>
		</div>
	)
}

export default connect(
	(state) => ({
		loaded: state.data.loading,
		entities: filterEntitiesSelector(state),
		loading: state.data.loading,
	}),
	{
		fetchData: loadBigData,
		card: activeCard,
		sort: sortBy,
	}
)(LazyTable)
