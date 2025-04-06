import { BiLogoTypescript } from 'react-icons/bi';
import { DiMongodb, DiMsqlServer } from 'react-icons/di';
import { FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa';
import {
	SiExpress,
	SiFastify,
	SiMui,
	SiMysql,
	SiTailwindcss,
} from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';

import { GlowBox } from '../components/glow-box';
import { SectionTitle } from '../components/section-title.component';

const techs = [
	{
		heading: 'Recently I am working with',
		items: [
			{
				title: 'Next JS',
				icon: <TbBrandNextjs color='rgb(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'React Js',
				icon: <FaReact color='rgb(97, 219, 251)' />,
				color: 'rgb(97, 219, 251, 0.6)',
			},
			{
				title: 'Node JS',
				icon: <FaNodeJs color='rgb(104, 160, 99)' />,
				color: 'rgb(104, 160, 99)',
			},
			{
				title: 'Typescript',
				icon: <BiLogoTypescript color='rgb(0, 122, 204)' />,
				color: 'rgba(0, 122, 204, 0.6)',
			},
			{
				title: 'Fastify',
				icon: <SiFastify color='rgba(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'Express JS',
				icon: <SiExpress color='rgba(255, 255, 255)' />,
				color: 'rgba(255, 255, 255, 0.4)',
			},
			{
				title: 'MsSql',
				icon: <DiMsqlServer color='rgb(230, 50, 42)' />,
				color: 'rgb(241, 83, 75, 0.5)',
			},
		],
	},
	{
		heading: 'Tech that I mostly use for UI',
		items: [
			{
				title: 'Material UI',
				icon: <SiMui color='rgb(0, 127, 255)' />,
				color: 'rgb(0, 127, 255, 0.6)',
			},
			{
				title: 'Tailwind CSS',
				icon: <SiTailwindcss color='rgb(6, 182, 212)' />,
				color: 'rgb(6, 182, 212, 0.7)',
			},
			// {
			// 	title: 'ShadCn UI',
			// 	icon: <ShadCN color='rgb(255, 255, 255)' />,
			// 	color: 'rgba(255, 255, 255, 0.4)',
			// },
		],
	},
	{
		heading: 'Technology from my past usage',
		items: [
			{
				title: 'Bootstrap',
				icon: <FaBootstrap color='rgb(125, 17, 248)' />,
				color: 'rgb(125, 17, 248, 0.75)',
			},
			{
				title: 'Mongo DB',
				icon: <DiMongodb color='rgb(0, 237, 100)' />,
				color: 'rgb(0, 237, 100, 0.7)',
			},
			{
				title: 'MySql',
				icon: <SiMysql color='rgb(0, 122, 158)' />,
				color: 'rgb(0, 122, 158, 0.75)',
			},
		],
	},
];

export const TechStack = () => {
	return (
		<section
			className='tech-stack'
			id='tech-stack'
		>
			<div className='tech-grid'>
				{techs.map((tech, index) => (
					<div key={index}>
						<p>{tech.heading}</p>
						<div className='tech-row'>
							{tech.items.map((item, index) => (
								<GlowBox
									key={index}
									icon={item.icon}
									color={item.color}
									title={item.title}
								/>
							))}
						</div>
					</div>
				))}
			</div>
			<div>
				<SectionTitle
					title='Tech'
					subTitle='SET'
				/>
			</div>
		</section>
	);
};
