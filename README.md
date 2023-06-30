# Testing with Jest


```
 ng add @briebug/jest-schematic
```

### tsconfig.spec.json

```typescript
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/spec",
    "types": ["jest"],
    "esModuleInterop": true,
    "emitDecoratorMetadata": true
  },
  "include": ["src/**/*.spec.ts", "src/**/*.d.ts"]
}
```

### jest.config.js

```javascript
module.exports = {
  preset: "jest-preset-angular",
  collectCoverage: true,
  coverageDirectory: "coverage/jest-app",
};
```

### package.json

```json
  "test": "jest",
  "test-coverage": "jest --coverage",
  "test-watch": "jest --watchAll"
```
