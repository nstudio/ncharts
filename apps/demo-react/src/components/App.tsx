import * as React from "react";
import { useState } from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { Home } from "./Home";
import { StreamdownDemo } from "./StreamdownDemo";
import { ChatDemo } from "./ChatDemo";
import { ChartsHome } from "./ChartsHome";
import { LineChartDemo } from "./LineChartDemo";
import { BarChartDemo } from "./BarChartDemo";
import { PieChartDemo } from "./PieChartDemo";

// Simple navigation state
type Screen = 'home' | 'demo' | 'chat' | 'charts' | 'line' | 'bar' | 'pie';

export const App = () => {
    const [currentScreen, setCurrentScreen] = useState<Screen>('home');

    const navigate = (screen: Screen) => {
        setCurrentScreen(screen);
    };

    const goBack = () => {
        // If we're in a chart demo, go back to charts home
        if (['line', 'bar', 'pie'].includes(currentScreen)) {
            setCurrentScreen('charts');
        } else {
            setCurrentScreen('home');
        }
    };

    return (
        <frame>
            {currentScreen === 'home' && <Home onNavigate={navigate} />}
            {currentScreen === 'demo' && <StreamdownDemo onBack={goBack} />}
            {currentScreen === 'chat' && <ChatDemo onBack={goBack} />}
            {currentScreen === 'charts' && <ChartsHome onNavigate={navigate} onBack={goBack} />}
            {currentScreen === 'line' && <LineChartDemo onBack={goBack} />}
            {currentScreen === 'bar' && <BarChartDemo onBack={goBack} />}
            {currentScreen === 'pie' && <PieChartDemo onBack={goBack} />}
        </frame>
    );
};
