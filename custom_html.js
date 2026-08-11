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
									<li><a class="drop-down-anchor" href="/IngramMaths/index.html">
										<div class="drop-down-item">
											Welcome
										</div>
									</a></li>
								</ul>
							</div>
						</li>
						<li>
							<div class="nav-button" id="questions_button">
								Questions
								<ul class="drop-down">
									<li><a class="drop-down-anchor" href="/IngramMaths/index.html">
										<div class="drop-down-item">
											GCSE
										</div>
									</a></li>
									<li><a class="drop-down-anchor" href="/IngramMaths/index.html">
										<div class="drop-down-item">
											A Level
										</div>
									</a></li>
									<li><a class="drop-down-anchor" href="/IngramMaths/index.html">
										<div class="drop-down-item">
											Undergraduate
										</div>
									</a></li>
								</ul>
							</div>
						</li>
						<li>
							<div class="nav-button" id="problem_sheets_button">
								Problem Sheets
								<ul class="drop-down">
									<li><a class="drop-down-anchor" href="/IngramMaths/index.html">
										<div class="drop-down-item">
											GCSE
										</div>
									</a></li>
									<li><a class="drop-down-anchor" href="/IngramMaths/index.html">
										<div class="drop-down-item">
											A Level
										</div>
									</a></li>
									<li><a class="drop-down-anchor" href="/IngramMaths/index.html">
										<div class="drop-down-item">
											Undergraduate
										</div>
									</a></li>
								</ul>
							</div>
						</li>
						<li>
							<div class="nav-button" id="notes_button">
								Notes
								<ul class="drop-down">
									<li><a class="drop-down-anchor" href="/IngramMaths/index.html">
										<div class="drop-down-item">
											GCSE
										</div>
									</a></li>
									<li><a class="drop-down-anchor" href="/IngramMaths/index.html">
										<div class="drop-down-item">
											A Level
										</div>
									</a></li>
									<li><a class="drop-down-anchor" href="/IngramMaths/index.html">
										<div class="drop-down-item">
											Undergraduate
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