import TextInput from './TextInput'

const VehicleMaster = () => {
	return (
		<div className="masters vehicleMaster">
			<span className="masters__title">Vehicle Master</span>
			<div className="masters__form">
				<div>
					<TextInput id="vehno" label="Vehicle No" />
					<TextInput id="vehmodel" label="Vehicle Model" />
					<TextInput id="vehMake" label="Vehicle Make" />
					<TextInput id="vehYear" label="Vehicle Year" />
					<TextInput id="chasisNo" label="Chasis No" />
					<TextInput id="engineNo" label="Engine No" />
					<TextInput id="InsName" label="Insurance Name" />
					<TextInput id="RCName" label="RC Name" />
					<TextInput id="vehPerDate" label="Vehicle Permit Date" />
					<TextInput id="motPerDate" label="Mother Permit Date" />
					<TextInput id="natPerDate" label="National Permit Date" />
					<TextInput id="InsDate" label="Insurance Date" />
					<TextInput id="ins" label="Insurance" />
					<TextInput id="RC" label="RC" />
					<TextInput id="attach" label="Attachment of" />
					<TextInput id="motPer" label="Mother Permit" />
					<TextInput id="natPer" label="National Permit" />
				</div>
				<button className="masters__button">Save</button>
			</div>
		</div>
	)
}

export default VehicleMaster
