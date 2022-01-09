import TextInput from './TextInput'

const TyreMaster = () => {
	return (
		<div className="masters tyreMaster">
			<span className="masters__title">Tyre Master</span>
			<div className="masters__form">
				<div>
					<TextInput id="tyreno" label="Tyre No" />
					<TextInput id="tyremodel" label="Tyre Model" />
					<TextInput id="fntrear" label="Front / Radial" />
					<TextInput id="vendorname" label="Vendor Name" />
					<TextInput id="tyreprice" label="Tyre Price" />
					<TextInput id="gst" label="GST%" />
					<TextInput id="tdsamount" label="TDS Amount Per / Tyre" />
					<TextInput id="tyrecharge" label="Tyre Delivery Charge" />
				</div>
				<button className="masters__button">Save</button>
			</div>
		</div>
	)
}

export default TyreMaster
