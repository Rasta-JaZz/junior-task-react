import React from "react"
import { useState } from "react"
import { addPerson } from "../redux/AC"
import { connect } from "react-redux"
import "./cardInput.css"

function CardInput(props) {
	const [newPerson, setPerson] = useState({})
	const [showSuccess, setShowSuccess] = useState(false)

	const handleChange = (e) => {
		const target = e.target
		setPerson({
			...newPerson,
			[target.name]: target.value,
		})
	}

	return (
		<div className="card" style={{ width: "18rem" }}>
			<div className="card-body">
				<h5 className="card-title">Добавить пользователя</h5>
				{showSuccess && <p style={{ color: "green" }}>Пользователь добавлен!</p>}
				<form className="form-group">
					<input
						type="text"
						className="form-control user-form"
						placeholder="id"
						name="id"
						onChange={(e) => handleChange(e)}
					/>
					<input
						type="text"
						className="form-control user-form"
						placeholder="Имя"
						name="firstName"
						onChange={(e) => handleChange(e)}
					/>
					<input
						type="text"
						className="form-control user-form"
						name="lastName"
						placeholder="Фамилия"
						onChange={(e) => handleChange(e)}
					/>
					<input
						type="text"
						className="form-control user-form"
						name="email"
						placeholder="email"
						onChange={(e) => handleChange(e)}
					/>
					<input
						type="text"
						className="form-control user-form"
						name="phone"
						placeholder="телефон"
						onChange={(e) => handleChange(e)}
					/>
				</form>
				<button
					type="submit"
					className="btn btn-primary float-right"
					onClick={() => {
						props.addPerson(newPerson)
						setShowSuccess(true)
					}}
				>
					Добавить
				</button>
			</div>
		</div>
	)
}

export default connect(null, { addPerson })(CardInput)
