import DropdownMenu from './DropdownMenu'
import { Masters, Transitions, Reports, Options } from '../navData'

const Topbar = () => {
	return (
		<div className="topbar">
			<nav className="topbar__nav">
				<DropdownMenu title="Masters" dropdownList={Masters} />
				<DropdownMenu title="Transitions" dropdownList={Transitions} />
				<DropdownMenu title="Reports" dropdownList={Reports} />
				<DropdownMenu title="Options" dropdownList={Options} />
			</nav>
		</div>
	)
}

export default Topbar
