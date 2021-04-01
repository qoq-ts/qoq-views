import { Slot } from 'qoq';
import { Context } from 'koa';
import views, { viewsOptions } from 'koa-views';

export class Views extends Slot<Slot.Web, Pick<Context, 'render'>> {
  constructor(root: string, options?: typeof viewsOptions) {
    super();
    this.use(views(root, options));
  }
}
