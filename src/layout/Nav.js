import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';

const navData = [
	{
		name: 'Home',
		path: '/'
	},
	{
		name: 'Show',
		path: 'show'
	},
	{
		name: 'Episode',
		path: 'episode'
	}
]

const Nav = () => (
	<nav>
		<ul>
			{navData.map(navItem => (
				<li>
					<NavLink
						exact to={navItem.path}
						activeClassName='active'
					>
						{navItem.name}
					</NavLink>
				</li>
			))}
		</ul>
	</nav>
);

export default Nav;