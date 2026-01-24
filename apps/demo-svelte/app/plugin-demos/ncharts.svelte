<page>
    <actionBar title="ncharts" />
    <gridLayout>
        <button class="info" text="{message}" horizontalAlignment="center" verticalAlignment="middle" textWrap="true"/>
    </gridLayout>
</page>

<script lang="typescript">
    import { DemoSharedNcharts } from '@demo/shared';
    import { } from '@nstudio/ncharts';

    let message: string = "Test ncharts"
</script>

<style>
    .info {
        font-size: 20;
    }
</style>
