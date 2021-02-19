# qoq-views
Template rendering middleware for qoq based on [koa-views](https://github.com/queckezz/koa-views).

[![License](https://img.shields.io/github/license/qoq-ts/qoq-views)](https://github.com/qoq-ts/qoq-views/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/qoq-views)](https://www.npmjs.com/package/qoq-views)

# Installation
```bash
yarn add qoq-views
```

# Usage
```typescript
import { WebSlotManager } from 'qoq';
import { Views } from 'qoq-views';

export const webSlots = WebSlotManager.use(new Views(__dirname + '/views', {
  map: {
    html: 'underscore'
  }
}));
```

# Options
@see [koa-views](https://github.com/queckezz/koa-views#koa-views)
