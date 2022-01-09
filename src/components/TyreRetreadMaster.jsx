import TextInput from './TextInput'

const TyreRetreadMaster = () => {
	return (
		<div className="masters tyreRetreadMaster">
			<span className="masters__title">Tyre Retread Master</span>
			<div className="masters__form">
				<div>
					<TextInput id="tyreno" label="Tyre No" />
					<TextInput id="tyremodel" label="Tyre Model" />
					<TextInput id="fntrear" label="Front / Radial" />
				</div>
				<button className="masters__button">Save</button>
			</div>
		</div>
	)
}

export default TyreRetreadMaster
