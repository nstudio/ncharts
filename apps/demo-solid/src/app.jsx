import { createSignal } from 'solid-js';
import { ChartsHome } from './components/ChartsHome';
import { LineChartDemo } from './components/LineChartDemo';
import { BarChartDemo } from './components/BarChartDemo';
import { PieChartDemo } from './components/PieChartDemo';

const App = () => {
  const [currentScreen, setCurrentScreen] = createSignal('charts');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  const goBack = () => {
    setCurrentScreen('charts');

  };

  return (
    <frame>
      {currentScreen() === 'charts' && <ChartsHome onNavigate={navigate} onBack={goBack} />}
      {currentScreen() === 'line' && <LineChartDemo onBack={goBack} />}
      {currentScreen() === 'bar' && <BarChartDemo onBack={goBack} />}
      {currentScreen() === 'pie' && <PieChartDemo onBack={goBack} />}
    </frame>
  );
};

export { App };
