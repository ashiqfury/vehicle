import TextInput from './TextInput'

const VendorMaster = () => {
	return (
		<div className="masters vendorMaster">
			<span className="masters__title">Vendor Master</span>
			<div className="masters__form">
				<div>
					<TextInput id="venID" label="Vendor ID" />
					<TextInput id="venName" label="Vendor Name" />
					<TextInput id="venAdd" label="Vendor Address" />
					<TextInput id="venAdd1" label="Vendor Address 1" />
					<TextInput id="state" label="State" />
					<TextInput id="dist" label="District" />
					<TextInput id="pin" label="Pincode" />
					<TextInput id="contact1" label="Contact No.1" />
					<TextInput id="contact2" label="Contact No.2" />
					<TextInput id="gstNo" label="GST No" />
				</div>
				<button className="masters__button">Save</button>
			</div>
		</div>
	)
}

export default VendorMaster
