import { MouseTrail } from './components/mouse-trail';
import { ScrollBar } from './components/scroll-bar';
import { AboutMe } from './sections/about-me.section';
import { InfoSection } from './sections/info.section';
import './styles/about-me.css';
import './styles/floating-button.css';
import './styles/glow-box.css';
import './styles/info-section.css';
import './styles/mouse-trail.css';
import './styles/text-hover.css';

function App() {
	return (
		<>
			<ScrollBar />
			<MouseTrail />
			<InfoSection />
			<AboutMe />
		</>
	);
}

export default App;
