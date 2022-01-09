const TextInput = ({ label, id }) => {
	return (
		<div className="masters__wrapper">
			<label htmlFor={id} className="masters__label">
				{label}
			</label>
			<input type="text" className="masters__input" id={id} />
		</div>
	)
}

export default TextInput
