import { Slot } from 'qoq';
import views, { viewsOptions } from 'koa-views';

export interface ViewsContextProps {
  render(viewPath: string, locals?: any): Promise<void>;
}

export class Views extends Slot<Slot.Web, ViewsContextProps> {
  constructor(root: string, options?: typeof viewsOptions) {
    super();
    const renderer = views(root, options);
    // @ts-ignore
    this.use(renderer);
  }
}
