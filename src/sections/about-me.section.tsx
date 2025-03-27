const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Full Stack Developer',
				place: '@Wimetrix',
				timePeriod: '2022 - Present',
				description: (
					<ul>
						<li>
							<p>
								Contributed significantly to the development of main project{' '}
								<strong>Sooperwizer</strong>, a pivotal project for automating
								and optimizing textile processes.
							</p>
							<li>
								<p>
									Designed and developed multiple interactive data visualization
									dashboards.
								</p>
							</li>
							<li>
								<p>Built several Android applications using React Native.</p>
							</li>
						</li>
					</ul>
				),
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section className='about-me'>
			<div>
				<h1>About Me</h1>
			</div>
			<div>
				<div>
					<p style={{ marginTop: '20px' }}>
						Hey, I'm Abdullah Iqbal, a Full Stack Developer.
					</p>
					<p>
						I've been working with <strong>React</strong> and
						<strong>Node</strong> for the past <strong>three years</strong>,
						building web applications that are fast, scalable and user-friendly.
					</p>
					<p>
						I like solving problems, learning new things, and experimenting with
						different technologies. When I'm not coding, I'm probably working on
						a side project or exploring something new.
					</p>
				</div>
				<div>
					{timeline.map(({ items, title }, idx) => (
						<div
							className='timeline'
							key={idx}
						>
							<h1>{title}</h1>
							{items.map(({ title, place, timePeriod, description }, idx) => (
								<ul
									className='timeline-list'
									key={idx}
								>
									<li className='timeline-item'>
										<p>{title}</p>
										<p>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</li>
								</ul>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
