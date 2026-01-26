import * as React from "react";
import { useState } from "react";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { ChartsHome } from "./ChartsHome";
import { LineChartDemo } from "./LineChartDemo";
import { BarChartDemo } from "./BarChartDemo";
import { PieChartDemo } from "./PieChartDemo";

// Simple navigation state
type Screen = 'charts' | 'line' | 'bar' | 'pie';

export const App = () => {
    const [currentScreen, setCurrentScreen] = useState<Screen>('charts');

    const navigate = (screen: Screen) => {
        setCurrentScreen(screen);
    };

    const goBack = () => {
        setCurrentScreen('charts');
    };

    return (
        <frame>
            {currentScreen === 'charts' && <ChartsHome onNavigate={navigate} onBack={goBack} />}
            {currentScreen === 'line' && <LineChartDemo onBack={goBack} />}
            {currentScreen === 'bar' && <BarChartDemo onBack={goBack} />}
            {currentScreen === 'pie' && <PieChartDemo onBack={goBack} />}
        </frame>
    );
};
