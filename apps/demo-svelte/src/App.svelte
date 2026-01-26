<frame>
    {#if currentScreen === 'charts'}
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
    import ChartsHome from './components/ChartsHome.svelte';
    import LineChartDemo from './components/LineChartDemo.svelte';
    import BarChartDemo from './components/BarChartDemo.svelte';
    import PieChartDemo from './components/PieChartDemo.svelte';

    let currentScreen = 'charts';

    function handleNavigate(event: CustomEvent<string>) {
        currentScreen = event.detail;
    }

    function goBack() {
        currentScreen = 'charts';
    }
</script>
