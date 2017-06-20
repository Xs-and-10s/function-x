# A collection of generic functions composed using sanctuary, covered by Property Based Testing

> **Work In Progress**.  Plan to add functions extracted from other projects as I create those functions.  Once they are here, they'll get rigorously tested using PBT.  I'd like to add flow types in addition, possibly typescript types as well.

## Goal:
> I want to have statically named generic functions, partially applied, and ready to be called once I have exactly whatever I need at a particular time.  This could be nice for performance reasons, as the JIT knows about the functions and can optimize them if they're used often, and it could be nice for readability, as I'm just declaring what I want to happen at any given time.  I think a key to achieving this is to keep each function definition in its own module, make each function a composition of exactly two named functions, and then to use es modules to allow for tree shaking *(via Rollup)* so you only have to take what you use.

##### example usage
```js
import { multiply } from 'function-x'
```


##### to build
```sh
yarn install
```


> after building
```sh
npm test
```

```sh
npm run build
```

```sh
npm run watch
```