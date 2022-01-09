import TextInput from './TextInput'

const MaterialMaster = () => {
	return (
		<div className="masters materialMaster">
			<span className="masters__title">Material Master</span>
			<div className="masters__form">
				<div>
					<TextInput id="matId" label="Material ID" />
					<TextInput id="matName" label="Material Name" />
					<TextInput id="hsnCode" label="HSN Code" />
					<TextInput id="vendorName" label="Vendor Name" />
					<TextInput id="matMake" label="Material Make" />
					<TextInput id="matPrice" label="Material Price" />
					<TextInput id="gst" label="GST%" />
					<TextInput id="noLtr" label="No / Ltr" />
				</div>
				<button className="masters__button">Save</button>
			</div>
		</div>
	)
}

export default MaterialMaster
