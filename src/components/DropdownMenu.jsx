import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const DropdownMenu = ({ title, dropdownList }) => {
	const dropdownRef = useRef(null)
	const [isActive, setIsActive] = useState(false)
	const onClick = () => setIsActive(!isActive)

	useEffect(() => {
		const pageClickEvent = e => {
			// If the active element exists and is clicked outside of
			if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
				setIsActive(!isActive)
			}
		}

		// If the item is active (ie open) then listen for clicks
		if (isActive) {
			window.addEventListener('click', pageClickEvent)
		}

		return () => {
			window.removeEventListener('click', pageClickEvent)
		}
	}, [isActive])

	return (
		<div className="menu-container">
			<button onClick={onClick} className="menu-trigger">
				<span>{title}</span>
			</button>
			<nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
				<ul>
					{dropdownList.map(list => (
						<li key={list.name}>
							<Link className="link" to={`/${list.link}`}>
								{list.name}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default DropdownMenu
