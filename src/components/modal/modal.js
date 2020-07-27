import React from "react"
import ReactDOM from "react-dom"
import "./modal.css"

class Modal extends React.Component {
	componentWillMount() {
		this.portal = document.createElement("div")
		document.body.appendChild(this.portal)
		document.body.style.overflow = "hidden"
	}
	componentWillUnmount() {
		document.body.removeChild(this.portal)
		document.body.style.overflow = ""
	}
	handleClick = (e) => {
		if (e.target.classList.value === "modal-window") this.props.show()
	}
	render() {
		return ReactDOM.createPortal(
			<div className="modal-window" onClick={(e) => this.handleClick(e)}>
				<button className="btn btn-danger modal__close-button" onClick={this.props.show}>
					закрыть
				</button>
				<div className="modal-wrapper">{this.props.children}</div>
			</div>,
			this.portal
		)
	}
}

export default Modal
