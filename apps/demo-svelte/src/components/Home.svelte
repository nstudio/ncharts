<page>
    <actionBar flat={true} class="bg-slate-50">
        <label text="Streamdown" class="font-bold text-lg" />
    </actionBar>

    <scrollView class="bg-slate-50">
        <stackLayout class="pb-8">
            <!-- Hero Section -->
            <stackLayout class="px-6 pt-6 pb-4">
                <label text="@nstudio/nstreamdown" class="text-3xl font-bold text-slate-800" />
                <label
                    text="Native iOS & Android streaming markdown for NativeScript"
                    class="text-base text-slate-500 mt-2 leading-[3]"
                    textWrap={true}
                />
            </stackLayout>

            <!-- Demo Cards -->
            <stackLayout class="px-4">
                {#each demos as demo}
                    <gridLayout
                        columns="auto, *"
                        rows="auto, auto"
                        class="bg-white rounded-2xl p-4 mb-3 shadow-sm"
                        on:tap={() => dispatch('navigate', demo.id)}
                    >
                        <label
                            col="0"
                            row="0"
                            rowSpan="2"
                            text={demo.icon}
                            class={`text-3xl ${demo.color} w-14 h-14 text-center leading-[56] rounded-xl mr-4`}
                        />
                        <label
                            col="1"
                            row="0"
                            text={demo.title}
                            class="text-lg font-semibold text-slate-800"
                        />
                        <label
                            col="1"
                            row="1"
                            text={demo.description}
                            class="text-sm text-slate-500 leading-[3]"
                            textWrap={true}
                        />
                    </gridLayout>
                {/each}
            </stackLayout>

            <!-- Features Section -->
            <label text="Features" class="text-xl font-bold text-slate-800 px-6 mt-6 mb-3" />

            <flexboxLayout
                flexWrap="wrap"
                justifyContent="flex-start"
                class="px-4"
            >
                {#each features as feature}
                    <stackLayout class="w-[30%] bg-white rounded-xl p-3 m-[1.5%] items-center">
                        <label text={feature.icon} class="text-2xl mb-1" />
                        <label text={feature.title} class="text-xs font-medium text-slate-700 text-center" />
                        <label text={feature.desc} class="text-[10] text-slate-400 text-center" />
                    </stackLayout>
                {/each}
            </flexboxLayout>

            <!-- Footer -->
            <stackLayout class="items-center mt-8 px-6">
                <label text="Built with ❤️ by @aspect" class="text-sm text-slate-400" />
                <label text="NativeScript + Svelte" class="text-xs text-slate-300 mt-1" />
            </stackLayout>
        </stackLayout>
    </scrollView>
</page>

<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher<{ navigate: string }>();

    const demos = [
        {
            id: 'demo',
            title: 'Streaming Demo',
            description: 'Watch markdown stream in real-time with syntax highlighting',
            icon: '⚡',
            color: 'bg-blue-500',
        },
        {
            id: 'chat',
            title: 'Chat Interface',
            description: 'Interactive chat with AI-style message streaming',
            icon: '💬',
            color: 'bg-emerald-500',
        },
        {
            id: 'charts',
            title: 'Charts',
            description: 'Native iOS & Android charts with DGCharts and MPAndroidChart',
            icon: '📊',
            color: 'bg-purple-500',
        },
    ];

    const features = [
        { icon: '📝', title: 'Full Markdown', desc: 'Headers, lists, tables' },
        { icon: '🎨', title: 'Syntax Highlighting', desc: '50+ languages' },
        { icon: '📐', title: 'Math Support', desc: 'LaTeX equations' },
        { icon: '🔗', title: 'Interactive Links', desc: 'Tappable URLs' },
        { icon: '🌊', title: 'Stream Ready', desc: 'Token-by-token' },
        { icon: '📱', title: 'Native Views', desc: 'iOS & Android' },
        { icon: '🎯', title: 'Accessibility', desc: 'VoiceOver ready' },
        { icon: '🌙', title: 'Dark Mode', desc: 'Theme support' },
        { icon: '📊', title: 'Tables', desc: 'GFM tables' },
        { icon: '✅', title: 'Task Lists', desc: 'Checkboxes' },
    ];
</script>
