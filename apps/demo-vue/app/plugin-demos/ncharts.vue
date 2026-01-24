<template>
  <Page>
    <ActionBar>
      <Label text="ncharts"/>
    </ActionBar>

    <GridLayout>
      <Button class="info" :text="message"/>
    </GridLayout>
  </Page>
</template>

<script lang="ts">
  import Vue from "nativescript-vue";
  import { DemoSharedNcharts } from '@demo/shared';
  import { } from '@nstudio/ncharts';

  export default Vue.extend({
    computed: {
      message() {
        return "Test ncharts";
      }
    }
  });
</script>

<style scoped lang="scss">

  .info {
    font-size: 20;
    horizontal-align: center;
    vertical-align: center;
  }
</style>
