import { createSignal } from 'solid-js';
import { Home } from './components/Home';
import { StreamdownDemo } from './components/StreamdownDemo';
import { ChatDemo } from './components/ChatDemo';
import { ChartsHome } from './components/ChartsHome';
import { LineChartDemo } from './components/LineChartDemo';
import { BarChartDemo } from './components/BarChartDemo';
import { PieChartDemo } from './components/PieChartDemo';

const App = () => {
  const [currentScreen, setCurrentScreen] = createSignal('home');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  const goBack = () => {
    // If we're in a chart demo, go back to charts home
    if (['line', 'bar', 'pie'].includes(currentScreen())) {
      setCurrentScreen('charts');
    } else {
      setCurrentScreen('home');
    }
  };

  return (
    <frame>
      {currentScreen() === 'home' && <Home onNavigate={navigate} />}
      {currentScreen() === 'demo' && <StreamdownDemo onBack={goBack} />}
      {currentScreen() === 'chat' && <ChatDemo onBack={goBack} />}
      {currentScreen() === 'charts' && <ChartsHome onNavigate={navigate} onBack={goBack} />}
      {currentScreen() === 'line' && <LineChartDemo onBack={goBack} />}
      {currentScreen() === 'bar' && <BarChartDemo onBack={goBack} />}
      {currentScreen() === 'pie' && <PieChartDemo onBack={goBack} />}
    </frame>
  );
};

export { App };
