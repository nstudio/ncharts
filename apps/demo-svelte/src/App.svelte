<frame>
    {#if currentScreen === 'home'}
        <Home on:navigate={handleNavigate} />
    {:else if currentScreen === 'demo'}
        <StreamdownDemo on:back={goBack} />
    {:else if currentScreen === 'chat'}
        <ChatDemo on:back={goBack} />
    {:else if currentScreen === 'charts'}
        <ChartsHome on:navigate={handleNavigate} on:back={goBack} />
    {:else if currentScreen === 'line'}
        <LineChartDemo on:back={goBack} />
    {:else if currentScreen === 'bar'}
        <BarChartDemo on:back={goBack} />
    {:else if currentScreen === 'pie'}
        <PieChartDemo on:back={goBack} />
    {/if}
</frame>

<script lang="ts">
    import Home from './components/Home.svelte';
    import StreamdownDemo from './components/StreamdownDemo.svelte';
    import ChatDemo from './components/ChatDemo.svelte';
    import ChartsHome from './components/ChartsHome.svelte';
    import LineChartDemo from './components/LineChartDemo.svelte';
    import BarChartDemo from './components/BarChartDemo.svelte';
    import PieChartDemo from './components/PieChartDemo.svelte';

    let currentScreen = 'home';

    function handleNavigate(event: CustomEvent<string>) {
        currentScreen = event.detail;
    }

    function goBack() {
        // If we're in a chart demo, go back to charts home
        if (['line', 'bar', 'pie'].includes(currentScreen)) {
            currentScreen = 'charts';
        } else {
            currentScreen = 'home';
        }
    }
</script>
