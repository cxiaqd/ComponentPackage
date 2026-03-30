以下是 20 道 TypeScript 面试题，涵盖基础类型、高级类型、泛型、类型守卫、装饰器等核心知识点，每题附有代码示例和详细解释。

---

### 1. 什么是 TypeScript 中的 `any`、`unknown`、`never` 和 `void`？它们的区别是什么？

```typescript
let a: any = "hello"; // any 关闭类型检查
let b: unknown = "world"; // unknown 表示未知类型，使用前需类型收缩

// any 可以任意调用
a.toUpperCase(); // ✅

// unknown 不能直接使用
// b.toUpperCase(); // ❌ 报错
if (typeof b === "string") {
  b.toUpperCase(); // ✅ 类型收缩后可用
}

function throwError(): never {
  throw new Error("error"); // never 表示永不返回
}

function logMessage(): void {
  console.log("void"); // void 表示没有返回值
}
```

**解释**：
- `any`：放弃类型检查，不推荐使用。
- `unknown`：安全的“任意类型”，使用时必须类型判断。
- `never`：表示永远不会出现的值（如抛出异常或无限循环）。
- `void`：函数没有返回值。

---

### 2. 什么是类型断言？`as` 和尖括号语法有什么区别？

```typescript
let someValue: unknown = "this is a string";

// as 语法
let strLength1: number = (someValue as string).length;

// 尖括号语法（不能在 .tsx 中使用）
let strLength2: number = (<string>someValue).length;
```

**解释**：
- 类型断言告诉编译器“我知道这个值的类型”。
- 在 JSX（React）中只能使用 `as` 语法。

---

### 3. 如何定义和使用接口（interface）？接口与类型别名（type）的区别？

```typescript
interface User {
  name: string;
  age: number;
  greet(): void;
}

type Point = {
  x: number;
  y: number;
};

// 接口可以合并声明
interface User {
  email: string; // 自动合并
}

const user: User = {
  name: "Tom",
  age: 25,
  email: "tom@example.com",
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};
```

**区别**：
- `interface` 主要用于对象形状，支持声明合并。
- `type` 可以定义联合类型、元组等更复杂的类型。
- 能用 `interface` 优先用 `interface`，需要联合类型等用 `type`。

---

### 4. 什么是泛型（Generics）？请写一个泛型函数示例。

```typescript
function identity<T>(arg: T): T {
  return arg;
}

// 使用
let output1 = identity<string>("hello");
let output2 = identity(123); // 类型推断

// 泛型约束
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

logLength("hello"); // ✅
// logLength(123); // ❌ 123 没有 length 属性
```

**解释**：
- 泛型允许类型参数化，使组件可复用。
- 使用 `extends` 可以约束泛型类型。

---

### 5. 什么是联合类型（Union）和交叉类型（Intersection）？

```typescript
// 联合类型：可以是 string 或 number
function printId(id: string | number) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// 交叉类型：合并多个类型
type A = { a: number };
type B = { b: string };
type C = A & B; // { a: number; b: string }

const obj: C = { a: 1, b: "hello" };
```

**解释**：
- 联合类型表示“或”，交叉类型表示“且”。

---

### 6. 什么是类型守卫（Type Guard）？请举例说明。

```typescript
// typeof 类型守卫
function isString(value: unknown): value is string {
  return typeof value === "string";
}

// instanceof 类型守卫
class Dog {
  bark() {}
}
class Cat {
  meow() {}
}

function handlePet(pet: Dog | Cat) {
  if (pet instanceof Dog) {
    pet.bark(); // pet 类型为 Dog
  } else {
    pet.meow(); // pet 类型为 Cat
  }
}

// 自定义类型守卫
function isDog(pet: Dog | Cat): pet is Dog {
  return (pet as Dog).bark !== undefined;
}
```

**解释**：
- 类型守卫用于在运行时缩小类型范围。
- `value is Type` 是类型谓词。

---

### 7. 如何在 TypeScript 中使用枚举（enum）？

```typescript
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right,   // 3
}

enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
}

function move(direction: Direction) {
  console.log(direction);
}

move(Direction.Up); // 0
move(0); // ✅ 也允许数字，可能不安全

// 使用 const enum 避免生成额外代码
const enum Color {
  Red,
  Green,
}
let c = Color.Red; // 编译后直接替换为 0
```

**解释**：
- 枚举用于定义一组命名常量。
- 字符串枚举更安全，数字枚举允许反向映射。

---

### 8. 什么是装饰器（Decorator）？如何在 TypeScript 中使用？

```typescript
// 需要启用 experimentalDecorators
function log(target: any, key: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`调用 ${key}，参数：`, args);
    return original.apply(this, args);
  };
  return descriptor;
}

class Example {
  @log
  greet(name: string) {
    return `Hello, ${name}`;
  }
}

const e = new Example();
e.greet("Tom"); // 控制台输出：调用 greet，参数：['Tom']
```

**解释**：
- 装饰器是一种特殊声明，可附加到类、方法、属性等。
- 常用于日志、权限校验、依赖注入等。

---

### 9. 什么是 `keyof` 操作符？如何用它实现类型安全的属性访问？

```typescript
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person: Person = { name: "Alice", age: 30 };
let name = getProperty(person, "name"); // ✅ string
// let invalid = getProperty(person, "invalid"); // ❌ 编译错误
```

**解释**：
- `keyof` 获取对象的所有键的联合类型。
- 常用于泛型约束和映射类型。

---

### 10. 什么是映射类型（Mapped Types）？举例说明。

```typescript
interface User {
  name: string;
  age: number;
}

// 将所有属性变为只读
type ReadonlyUser = {
  readonly [K in keyof User]: User[K];
};

// 将所有属性变为可选
type PartialUser = {
  [K in keyof User]?: User[K];
};

// 内置工具类型 Readonly<T>、Partial<T> 就是基于映射类型实现的
```

**解释**：
- 映射类型基于旧类型创建新类型。
- 常结合 `keyof` 和 `in` 使用。

---

### 11. 解释 TypeScript 中的模块解析策略。

```typescript
// 相对导入
import { something } from "./utils";

// 非相对导入（从 node_modules 或配置的 baseUrl）
import React from "react";

// tsconfig.json 中配置
{
  "compilerOptions": {
    "moduleResolution": "node", // 或 "classic"
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```

**解释**：
- `node` 策略模仿 Node.js 模块解析。
- `paths` 和 `baseUrl` 可以自定义模块映射。

---

### 12. 什么是 `infer` 关键字？在条件类型中如何使用？

```typescript
// 提取函数返回值类型
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function foo(): number {
  return 42;
}

type FooReturn = ReturnType<typeof foo>; // number

// 提取数组元素类型
type ElementType<T> = T extends (infer U)[] ? U : never;
type NumArr = ElementType<number[]>; // number
```

**解释**：
- `infer` 在条件类型中声明一个待推断的类型变量。

---

### 13. 如何声明全局类型或扩展第三方库的类型？

```typescript
// 全局声明
declare global {
  interface Window {
    myCustomGlobal: string;
  }
}

// 模块增强
import "axios";

declare module "axios" {
  export interface AxiosRequestConfig {
    withCredentials?: boolean;
  }
}

// 使用
window.myCustomGlobal = "hello";
```

**解释**：
- 使用 `declare global` 扩展现有全局作用域。
- 使用 `declare module` 扩展现有模块的类型。

---

### 14. TypeScript 中 `readonly` 和 `const` 的区别？

```typescript
const PI = 3.14; // const 是常量，不能重新赋值

interface Point {
  readonly x: number;
  readonly y: number;
}

const point: Point = { x: 10, y: 20 };
// point.x = 30; // ❌ 只读属性不能修改

// readonly 数组
const arr: readonly number[] = [1, 2, 3];
// arr.push(4); // ❌ 只读数组不能修改
```

**解释**：
- `const` 用于变量，声明后不能重新赋值。
- `readonly` 用于属性，修饰后不能修改属性值。

---

### 15. 什么是工具类型（Utility Types）？列举几个常用工具类型。

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

// Partial<T>：所有属性变为可选
type PartialUser = Partial<User>;

// Required<T>：所有属性变为必选
type RequiredUser = Required<User>;

// Pick<T, K>：选取部分属性
type UserPreview = Pick<User, "id" | "name">;

// Omit<T, K>：排除部分属性
type UserWithoutEmail = Omit<User, "email">;

// Record<K, T>：创建键值对类型
type PageInfo = Record<"home" | "about", { title: string }>;

// Exclude<T, U>：从联合类型中排除
type T = Exclude<"a" | "b" | "c", "a">; // "b" | "c"
```

**解释**：
- 工具类型是内置的泛型类型，用于常见的类型转换。

---

### 16. 如何在 TypeScript 中实现函数重载？

```typescript
// 重载签名
function format(value: string): string;
function format(value: number): string;
function format(value: boolean): string;

// 实现签名
function format(value: string | number | boolean): string {
  if (typeof value === "string") {
    return value.trim();
  } else if (typeof value === "number") {
    return value.toFixed(2);
  } else {
    return value ? "yes" : "no";
  }
}

console.log(format(" hello ")); // "hello"
console.log(format(3.14159)); // "3.14"
console.log(format(true)); // "yes"
```

**解释**：
- 函数重载允许一个函数有多个调用签名。
- 实现签名必须兼容所有重载签名。

---

### 17. 什么是 `abstract class`？与接口有什么区别？

```typescript
abstract class Animal {
  abstract makeSound(): void; // 抽象方法，子类必须实现

  move(): void {
    console.log("moving");
  }
}

class Dog extends Animal {
  makeSound() {
    console.log("bark");
  }
}

// const animal = new Animal(); // ❌ 不能实例化抽象类
const dog = new Dog();
dog.makeSound(); // bark
dog.move(); // moving
```

**区别**：
- 抽象类可以包含实现细节，接口只能定义结构。
- 类可以继承一个抽象类，可以实现多个接口。
- 抽象类可以有构造函数，接口没有。

---

### 18. 如何在 TypeScript 中使用命名空间（namespace）？

```typescript
namespace Validation {
  export interface StringValidator {
    isAcceptable(s: string): boolean;
  }

  export class EmailValidator implements StringValidator {
    isAcceptable(s: string): boolean {
      return s.includes("@");
    }
  }
}

const validator = new Validation.EmailValidator();
console.log(validator.isAcceptable("test@example.com")); // true
```

**解释**：
- 命名空间用于组织代码，避免全局污染。
- 使用 `export` 导出内部成员。
- 现代 TypeScript 更推荐使用模块（ES Modules）替代命名空间。

---

### 19. TypeScript 中的 `--strict` 模式包含哪些检查？

```typescript
// 在 tsconfig.json 中启用
{
  "compilerOptions": {
    "strict": true // 开启所有严格检查
  }
}

// 包含以下标志：
// - strictNullChecks: null 和 undefined 不能赋值给其他类型
// - strictFunctionTypes: 函数参数逆变检查
// - strictBindCallApply: bind/call/apply 类型安全
// - strictPropertyInitialization: 类属性必须初始化
// - noImplicitAny: 不允许隐式 any
// - noImplicitThis: 不允许隐式 any 的 this
```

**解释**：
- `strict: true` 是 TypeScript 的最佳实践，能捕获更多潜在错误。

---

### 20. 如何配置 TypeScript 编译选项（tsconfig.json）？

```json
{
  "compilerOptions": {
    "target": "ES2020",           // 编译目标
    "module": "commonjs",         // 模块系统
    "lib": ["ES2020", "DOM"],     // 包含的类型定义
    "outDir": "./dist",           // 输出目录
    "rootDir": "./src",           // 源码目录
    "strict": true,               // 启用严格模式
    "esModuleInterop": true,      // 兼容 CommonJS 和 ES 模块
    "skipLibCheck": true,         // 跳过库文件类型检查
    "forceConsistentCasingInFileNames": true, // 强制文件名大小写一致
    "resolveJsonModule": true,    // 允许导入 JSON
    "declaration": true,          // 生成 .d.ts 声明文件
    "sourceMap": true             // 生成 source map
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

**解释**：
- tsconfig.json 是 TypeScript 项目的配置文件。
- 合理配置可以优化编译速度和类型检查。

---

这些题目覆盖了 TypeScript 的核心特性和常见应用场景，适合面试准备或技术评估。如需更深入的题目或实战项目分析，可以进一步探讨。