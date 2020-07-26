import React from "react"
import "./style.css"
function Error(props) {
	return (
		<div className="error">
			<h1>Что-то пошло не так...</h1>
			<img src={require("../img/negative_emoticon_icon_1561.png")} alt="error" />
		</div>
	)
}

export default Error
