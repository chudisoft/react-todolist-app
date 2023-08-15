import { useState, useRef, useEffect } from 'react';
import useOnClickOutside from './useOnClickOutside';
import '../styles/Navbar.css';

const Navbar = () => {
	const [dropdown, setDropdown] = useState(false);
	const ref = useRef();

	useOnClickOutside(ref, dropdown, () => setDropdown(false));

	useEffect(() => {
		const handler = (event) => {
			if (dropdown && ref.current && !ref.current.contains(event.target)) {
				setDropdown(false);
			}
		};
		document.addEventListener('mousedown', handler);
		// side effect
		return () => {
			// Cleanup the event listener
			document.removeEventListener('mousedown', handler);
		};

	}, [dropdown]);

	useEffect(() => {
		document.title = `Current state value: ${dropdown}`;
	}, [dropdown]);

	return (
		<nav>
			<ul>
				{/* other items here*/}
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#">About</a>
				</li>
				<li>
					{/* <button onClick={() => setDropdown(!dropdown)}> */}
					<a href="#" onClick={() => setDropdown((prev) => !prev)}>
						Services <span>&#8595;</span>
					</a>
					{dropdown && (
						<ul>
							<li><a href="#">Design</a></li>
							<li><a href="#">Development</a></li>
						</ul>
					)}
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
