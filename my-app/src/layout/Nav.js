import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

// id not really needed but index is considered last resort for react?
const navData = [
	{
		id: 0,
		name: 'Home',
		path: '/'
	},
	{
		id: 1,
		name: 'Show',
		path: 'show'
	},
	{
		id: 2,
		name: 'Episode',
		path: 'episode'
	}
]

const Nav = () => (
	<nav>
		<ul>
			{ navData.map(navItem => (
				<li key={navItem.id}>
					<NavLink
						exact to={navItem.path}
						activeClassName='active'
					>
						{navItem.name}
					</NavLink>
				</li>
			)) }
		</ul>
	</nav>
);

export default Nav;