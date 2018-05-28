import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css';

const Logo = () => {
	return (
		<div clasName='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner pa4">
					<img src={logo} alt='logo'></img>
				</div>
			</Tilt>
		</div>
	)	
}

export default Logo;