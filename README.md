# react-scrolls

A lightweight TypeScript React infinite scroller using IntersectionObserver.

[GitHub repository](https://github.com/cityofbinary/react-scrolls) · [Report an issue](https://github.com/cityofbinary/react-scrolls/issues)

## Install

```sh
npm install react-scrolls
```

Requires React 16.8 or later and a browser with IntersectionObserver support.

## Usage

```tsx
import { InfiniteScroller } from 'react-scrolls'

<InfiniteScroller
  canLoadMore={canLoadMore}
  isLoading={isLoading}
  loadMore={fetchNextPage}
  loadingIndicator={<p>Loading…</p>}
>
  {items.map(item => <div key={item.id}>{item.title}</div>)}
</InfiniteScroller>
```

A default export and the `InfiniteScrollerProps` type are also available.

| Prop | Type | Required | Description |
| --- | --- | --- | --- |
| children | ReactNode | Yes | Items to render. |
| canLoadMore | boolean | Yes | Whether more items are available. |
| loadMore | () => void | Yes | Requests the next page. |
| isLoading | boolean | Yes | Prevents requests while a page is loading. |
| loadingIndicator | ReactNode | No | Content displayed below the items while canLoadMore is true. |

Set isLoading to true as soon as a request begins, then reset it when the request completes. Set canLoadMore to false after the last page. The sentinel observes the browser viewport with a 20px root margin.

## Development

```sh
npm install
npm run typecheck
npm run build
npm pack --dry-run
```

Builds include ES modules, CommonJS, and TypeScript declarations. Choose a license and add author metadata before publishing. To publish after signing in to npm, run `npm publish`; this runs type checking and builds automatically.
