import React from "react"
import { useState } from "react"
import { addPerson } from "../redux/AC"
import { connect } from "react-redux"
import { useForm } from "react-hook-form"
import "./cardInput.css"

function CardInput(props) {
	const [showSuccess, setShowSuccess] = useState(false)

	const { register, handleSubmit, watch, errors } = useForm()
	const onSubmit = (data) => {
		props.addPerson(data)
		setShowSuccess(true)
	}

	return (
		<div className="card" style={{ width: "18rem" }}>
			<div className="card-body">
				<h5 className="card-title">Добавить пользователя</h5>
				{showSuccess && <p style={{ color: "green" }}>Пользователь добавлен!</p>}
				{errors.id && <span style={{ color: "red" }}>Обязательное поле</span>}
				<form className="form-group" onSubmit={handleSubmit(onSubmit)}>
					<input
						ref={register({ required: true })}
						type="text"
						className="form-control user-form"
						placeholder="id"
						name="id"
					/>
					{errors.firstName && <span style={{ color: "red" }}>Обязательное поле</span>}
					<input
						ref={register({ required: true })}
						type="text"
						className="form-control user-form"
						placeholder="Имя"
						name="firstName"
					/>
					{errors.lastName && <span style={{ color: "red" }}>Обязательное поле</span>}
					<input
						ref={register({ required: true })}
						type="text"
						className="form-control user-form"
						name="lastName"
						placeholder="Фамилия"
					/>
					{errors.email && <span style={{ color: "red" }}>Обязательное поле</span>}
					<input
						ref={register({ required: true })}
						type="text"
						className="form-control user-form"
						name="email"
						placeholder="email"
					/>
					{errors.phone && <span style={{ color: "red" }}>Обязательное поле</span>}
					<input
						ref={register({ required: true })}
						type="text"
						className="form-control user-form"
						name="phone"
						placeholder="телефон"
					/>
					<input type="submit" className="btn btn-primary float-right" />
				</form>
			</div>
		</div>
	)
}

export default connect(null, { addPerson })(CardInput)
