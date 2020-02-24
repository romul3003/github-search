import React from 'react'

const Navbar = () => {
	return (
		<nav className="navbar navbar-dark bg-primary navbar-expand-md">
			<div className="navbar-brand">Github search</div>
			<ul className="navbar-nav">
				<li className="nav-item">
					<a href="/" className="nav-link">
						Home
					</a>
				</li>
				<li className="nav-item">
					<a href="/about" className="nav-link">
						Info
					</a>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
