import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNcharts } from '@demo/shared';
import {} from '@nstudio/ncharts';

export function navigatingTo(args: EventData) {
  const page = <Page>args.object;
  page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNcharts {}
