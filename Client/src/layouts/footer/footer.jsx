import "./footer.css";

function Footer() {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="top-footer">
					<div className="left-top-footer">
						<strong>LAGISTORE</strong>
						<br />
						<br />
						<span>Đăng kí nhận thông báo mới nhất từ chúng tôi.</span>
						<br />
						<br />
						<div className="email-box">
							<input
								className="email-input"
								type="text"
								name=""
								id=""
								placeholder="EMAIL"
							/>
							<button className="email-button">
								<span class="material-symbols-outlined">arrow_right</span>
							</button>
						</div>
						<br />
						<br />
						<br />
						<br />
						<div className="social-icon">
							<div className="facebook-icon icon">
								<a href="" className="link-icon">
									<i
										className={`fa-brands fa-facebook-f fa-xl`}
										style={{ color: "#000000" }}
									></i>
								</a>
							</div>
							<div className="youtube-icon icon">
								<a href="" className="link-icon">
									<i
										className={`fa-brands fa-youtube fa-xl`}
										style={{ color: "#000000" }}
									></i>
								</a>
							</div>
							<div className="instagram-icon icon">
								<a href="" className="link-icon">
									<i
										className={`fa-brands fa-instagram fa-xl`}
										style={{ color: "#000000" }}
									></i>
								</a>
							</div>
							<div className="twitter-icon icon">
								<a href="" className="link-icon">
									<i
										className={`fa-brands fa-x-twitter fa-xl`}
										style={{ color: "#000000" }}
									></i>
								</a>
							</div>
						</div>
					</div>
					<div className="right-top-footer">
						<div className="right-top-grid">
							<div className="about list">
								<div className="title">
									<strong>VỀ CHÚNG TÔI</strong>
								</div>
								<ul className="list-footer">
									<li>
										<a href="#">Thương hiệu</a>
									</li>
									<li>
										<a href="#">Sản phẩm</a>
									</li>
								</ul>
							</div>
							<div className="contact list">
								<div className="title">
									<strong>HỖ TRỢ</strong>
								</div>
								<ul className="list-footer">
									<li>
										<a href="#">Liên hệ</a>
									</li>
									<li>
										<a href="#">Câu hỏi</a>
									</li>
									<li>
										<a href="#">Bảo hành</a>
									</li>
									<li>
										<a href="#">Hoàn tiền</a>
									</li>
								</ul>
							</div>
							<div className="shopping list">
								<div className="title">
									<strong>MUA SẮM</strong>
								</div>
								<ul className="list-footer">
									<li>
										<a href="#">Sản phẩm mới</a>
									</li>
									<li>
										<a href="#">Giảm giá</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className="bottom-footer">&copy;2024, lagi.store</div>
			</div>
		</div>
	);
}

export default Footer;
