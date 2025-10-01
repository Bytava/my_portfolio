import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Full Stack Developer',
				place: 'Nimbus TechWorks',
				timePeriod: '2018.3 - 2020.3',
				description: (
					<ul>
						<li>
							Crafted interactive web applications using Next.js, React.js, and GraphQL
						</li>
						<li>
							Implemented modular and reusable components to improve development speed by 30%.
						</li>
						<li>Coordinated with international teams to deliver multilingual web solutions for European clients.</li>
						<li>Contributed to performance audits, ensuring web apps met accessibility and SEO standards.</li>
						<li>
							Developed internal dashboards enabling clients to track analytics and KPIs in real-time.
						</li>
					</ul>
				),
			},

			{
				title: 'Full Stack Developer',
				place: 'CodeWave Digital Solutions',
				timePeriod: '2015.6 - 2017.12',
				description: (
					<ul>
						<li>
							Developed and maintained client-facing web applications using React.js, Node.js, and TypeScript.
						</li>
						<li>
							Collaborated with UI/UX designers to implement responsive, highperformance front-end features.
						</li>
						<li>Led the migration of legacy web apps to modern frameworks, improving load times by 40%.</li>
						<li>Optimized backend API endpoints and database queries to handle increased traffic efficiently.</li>
						<li>
							Mentored junior developers and implemented coding best practices to ensure maintainable codebases.
						</li>
					</ul>
				),
			},
		],
	},
	{
		title: 'Education',
		items: [
			{
				title: 'La Consolacion College Bacolod',
				place: 'Bacolod, Philippines',
				timePeriod: '2013.4 - 2015.2',
				description: '',
			},
		],
	},
];

export const AboutMe = () => {
	return (
		<section
			className='about-me container'
			id='about-me'
		>
			<div>
				<SectionTitle
					title='About'
					subTitle='ME'
				/>
			</div>
			<div>
				<div className='intro'>
					<p style={{ marginTop: '20px' }}>
						👋 Hey, I'm Arnold Ong, Full Stack & Vibe Coding Specialist | Next.js | React.js | Typescript.
					</p>
					<p>
						Dedicated Full Stack Developer with 7+ years of experience specializing in <strong>React</strong>, <strong>Next.js</strong>, 
						<strong>Node.js</strong>, and <strong>TypeScript</strong>, delivering scalable and high-performance web applications. 
					</p>
					<p>
						Skilled at combining modern frontend
						frameworks with powerful backend technologies to build seamless, maintainable, and efficient full stack solutions
						tailored to business needs.
					</p>
					<p>
						Proven track record of delivering <strong>100+</strong> successful projects with a client-focused approach.
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
								<div
									className='timeline-list'
									key={idx}
								>
									<div className='timeline-item'>
										<p className='designation'>{title}</p>
										<p className='place'>
											{place} | {timePeriod}
										</p>
										<div className='timeline-description'>{description}</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
