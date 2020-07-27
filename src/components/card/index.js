import React from "react"
import { connect } from "react-redux"
import "./card.css"

function Card(props) {
	const { firstName, lastName, email, description, address, phone, id } = props.card

	return (
		!!props.card.firstName && (
			<div className="card-position">
				<div className="card" style={{ width: "18rem" }}>
					<div className="card-body">
						<h5 className="card-title">{`${firstName} ${lastName}`}</h5>
						<h6 className="card-subtitle mb-2 text-muted">{email} </h6>
						<p className="card-text">{description}</p>
						<p>
							<small className="text-muted">
								Адрес : <b>{address.streetAddress}</b>
							</small>
						</p>
						<p>
							<small className="text-muted">
								Город : <b>{address.city}</b>
							</small>
						</p>
						<p>
							<small className="text-muted">
								Провинция/штат : <b>{address.state}</b>
							</small>
						</p>
						<p>
							<small className="text-muted">
								Индекс : <b>{address.zip}</b>
							</small>
						</p>
					</div>
				</div>
			</div>
		)
	)
}

export default connect((state) => ({
	card: state.data.activeCard,
}))(Card)
