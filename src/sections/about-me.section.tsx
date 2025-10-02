import { SectionTitle } from '../components/section-title.component';

const timeline = [
	{
		title: 'Experience',
		items: [
			{
				title: 'Full Stack Developer',
				place: 'Prairie Systems Inc.',
				timePeriod: 'Jul 2015 – Dec 2018',
				description: (
					<ul>
						<li>
							Developed internal SaaS applications that streamlined business workflows.
						</li>
						<li>
							Designed and deployed REST APIs with Node.js, reducing data processing times by 35%.
						</li>
						<li>
							Built an MVP dashboard that attracted 10+ enterprise clients in its first quarter.
						</li>
						<li>
							Integrated third-party APIs (payments, logistics), expanding platform capabilities.
						</li>
						<li>
							Awarded Employee of the Year (2017) for delivering high-impact solutions.
						</li>
					</ul>
				),
			},

			{
				title: 'Senior Full Stack Developer',
				place: 'Riverbend Technologies',
				timePeriod: 'Jan 2019 – Aug 2022',
				description: (
					<ul>
						<li>
							Led the creation of a multi-tenant SaaS platform serving 5,000+ users.
						</li>
						<li>
							Optimized backend workflows with Python & serverless functions, boosting efficiency by 40%.
						</li>
						<li>
							Mentored 4 junior developers, ensuring clean coding standards and agile delivery.
						</li>
						<li>
							Designed architecture for an AI-powered reporting tool providing real-time analytics.
						</li>
						<li>
							Consistently delivered ahead of schedule, earning long-term client trust.
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
				title: 'Western Plains University',
				place: 'Kansas, USA',
				timePeriod: 'Sep 2011 – Jun 2015',
				description: 'B.Sc. in Computer Science',
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
						👋Hi, I’m a Senior Full Stack & AI Developer (32, American) with a strong background in building scalable SaaS platforms, modern MVPs, and AI-driven applications. With expertise spanning frontend, backend, and AI integration, I create digital products that are not only functional but also beautifully designed and performance-driven.
						I specialize in combining cutting-edge technology with user-focused design to deliver solutions that meet business goals while delighting end-users. Whether it’s a web app, mobile app, or AI-powered SaaS platform, my mission is to bring ideas to life with speed, quality, and scalability.
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
