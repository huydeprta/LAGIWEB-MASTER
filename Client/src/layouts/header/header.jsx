import "./header.css";
import { Link } from "react-router-dom";

import logo from '../../assets/logo.png'

function Header() {
	return (
		<div className="header">
			<div className="header-container">
				{/* ---------------top---------------- */}
				<div className="top">
					<div className="left-top-header">
						<div className="logo">
							<img src={logo} alt="logo" />
						</div>
						<div className="menu">
							<ul>
								<li>
									<Link to="/" className="link-nav">
										HOME
									</Link>
								</li>
								<li>
									<Link to="/product" className="link-nav">
										PRODUCT
									</Link>
								</li>
								<li>
									<Link to="/about" className="link-nav">
										ABOUT
									</Link>
								</li>
								<li>
									<Link to="/contact" className="link-nav">
										CONTACT
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<Link to="/login">
						<div className="right-top-header">
							<p>LOGIN</p>
						</div>
					</Link>
				</div>

				{/* ---------------bottom---------------- */}
				<div className="bottom">
					<div className="left-bottom-header">
						<div className="search-box">
							<input
								className="search-input"
								type="text"
								name="Search"
								id=""
								placeholder="Search"
							/>
							<button className="search-button">
								<span class="material-symbols-outlined">search</span>
							</button>
						</div>
					</div>
					<div className="card-icon">
						<Link to="/cart">
							<span class="material-symbols-outlined cart-icon">
								shopping_cart
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
