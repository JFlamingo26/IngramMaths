class Navigation extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<div class="title">IngramMaths</div>
			<div class="nav-bar">
				<nav>
					<ul class = "nav-list">
						<li>
							<div class="nav-button" id="home_button">
								Home
								<ul class="drop-down">
									<li><a class=drop-down-anchor href="/IngramMaths/main.html">
										<div class="drop-down-item">
											Welcome
										</div>
									</a></li>
								</ul>
							</div>
						</li>
						<li>
							<div class="nav-button" id="gcse_maths_button">
								GCSE Maths
							</div>
						</li>
						<li>
							<div class="nav-button" id="a_level_maths_button">
								A-Level Maths
							</div>
						</li>
						<li>
							<div class="nav-button" id="a_level_further_maths_button">
								A-Level Further Maths
							</div>
						</li>
						<li>
							<div class="nav-button" id="ug_maths_button">
								Undergraduate Maths
								<ul class="drop-down">
									<li><div class="drop-down-item">
										Calculus and Differential Equations
									</div></li>
									<li><div class="drop-down-item">
										Abstract Algebra
									</div></li>
									<li><a class=drop-down-anchor href="/IngramMaths/Pages/Undergraduate/Topology_Analysis/top_and_analy.html">
										<div class="drop-down-item">
											Topology and Analysis
										</div>
									</a></li>
								</ul>
							</div>
						</li>
						<li>
							<div class="nav-button" id="ug_cs_button">
								Applied Maths
								<ul class="drop-down">
									<li><a class=drop-down-anchor href="/IngramMaths/Pages/main.html">
										<div class="drop-down-item">
											Theory of Computation
										</div>
									</a></li>
								</ul>
							</div>
						</li>
					</ul>
				</nav>
			</div>
			<br>
		`;
	}

}

customElements.define('nav-bar', Navigation);