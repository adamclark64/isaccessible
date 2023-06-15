# @adamclark64/isaccessible
### Description
check to see if a path (dir | file) is accessible

This repo uses pure esm modules which was the initial reasoning behind starting it
- More info about ESM Modules
  - [gist](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c) 
  - [article](https://medium.com/sindre-sorhus/get-ready-for-esm-aa53530b3f77)
  - [docs](https://nodejs.org/api/esm.html)

### usage
```typescript
import { isAccessible } from '@adamclark64/isAccessible'

const canAccess = await isAccessible('path/to/test');
```
