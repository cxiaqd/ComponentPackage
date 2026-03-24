好的，我将从**选择器与优先级、盒模型与布局、定位与层叠上下文、Flex与Grid、响应式设计、动画与性能、CSS预处理器、工程化架构、现代CSS特性、浏览器渲染与优化**等10个维度，整理30个有深度的CSS面试问题，并提供详细的原理分析和实际应用场景。

---

## 一、选择器与优先级（3题）

### 问题1：CSS选择器的优先级是如何计算的？如何避免优先级冲突？

**考察点**：对CSS级联规则的理解

**参考答案**：

**优先级计算规则**（按权重从高到低）：

```css
/* 1. !important（最高，尽量避免使用） */
.element { color: red !important; }

/* 2. 内联样式（1000） */
<div style="color: red"></div>

/* 3. ID选择器（100） */
#header { color: red; }

/* 4. 类、属性、伪类选择器（10） */
.nav { color: red; }
[type="text"] { color: red; }
:hover { color: red; }

/* 5. 元素、伪元素选择器（1） */
div { color: red; }
::before { color: red; }

/* 6. 通配符、组合器（0） */
* { color: red; }
> + ~ { color: red; }
```

**优先级计算示例**：

```css
/* 权重: (0,0,0,0) */
* { color: red; }

/* 权重: (0,0,0,1) */
div { color: red; }

/* 权重: (0,0,1,0) */
.nav { color: red; }

/* 权重: (0,1,0,0) */
#header { color: red; }

/* 权重: (0,0,1,1) - 1个类+1个元素 */
.nav div { color: red; }

/* 权重: (0,1,1,0) - 1个ID+1个类 */
#header .nav { color: red; }

/* 权重: (0,1,1,1) - 1个ID+1个类+1个元素 */
#header .nav div { color: red; }

/* 权重: (0,0,2,0) - 2个类 */
.nav.active { color: red; }
```

**避免优先级冲突的最佳实践**：

```css
/* ❌ 错误：过高优先级 */
.container .sidebar .widget .button .icon { }

/* ✅ 正确：使用BEM命名法 */
.button__icon { }

/* ✅ 正确：使用CSS模块化 */
:local(.button) { }

/* ✅ 正确：使用CSS-in-JS（样式优先级由加载顺序决定） */
const Button = styled.button`
  color: red;
`;

/* ✅ 正确：合理使用层级深度（最多3层） */
.card .title { }
.card .content { }
.card .actions { }
```

**!important 的正确使用场景**：

```css
/* ✅ 唯一合理场景：工具类覆盖 */
.u-text-center { text-align: center !important; }
.u-hidden { display: none !important; }

/* ❌ 错误：业务样式中使用 */
.button { color: red !important; }
```

---

### 问题2：CSS 的层叠上下文（Stacking Context）是什么？如何创建？对 z-index 有什么影响？

**考察点**：对层叠上下文和 z-index 的理解

**参考答案**：

**层叠上下文定义**：
层叠上下文是 HTML 元素的三维概念，在 Z 轴上形成层级关系，决定元素在垂直方向上的显示顺序。

**创建层叠上下文的条件**：

```css
/* 1. 根元素（html）默认创建 */

/* 2. 定位元素且 z-index 不为 auto */
.absolute { position: absolute; z-index: 1; }

/* 3. flex/grid 子元素且 z-index 不为 auto */
.flex-item {
  display: flex;
  z-index: 1;
}

/* 4. opacity 小于 1 */
.transparent { opacity: 0.5; }

/* 5. transform 不为 none */
.transform { transform: translateX(10px); }

/* 6. filter 不为 none */
.filter { filter: blur(5px); }

/* 7. will-change 指定任意属性 */
.will-change { will-change: transform; }

/* 8. contain 为 layout/paint */
.contain { contain: layout; }

/* 9. isolation: isolate */
.isolate { isolation: isolate; }

/* 10. mix-blend-mode 不为 normal */
.blend { mix-blend-mode: multiply; }
```

**层叠顺序**（从低到高）：

```css
/* 1. 层叠上下文的背景和边框 */
/* 2. 负 z-index 的子元素 */
/* 3. 块级子元素 */
/* 4. 浮动子元素 */
/* 5. 内联子元素 */
/* 6. z-index: auto 或 0 的定位元素 */
/* 7. 正 z-index 的定位元素 */

/* 示例 */
<div class="parent">
  <div class="child" style="z-index: 2">最上层</div>
</div>
<div class="sibling" style="z-index: 1">兄弟元素</div>
/* 注意：child 的 z-index 只在 parent 的层叠上下文中有效 */
```

**常见问题与解决**：

```css
/* 问题：z-index 不生效 */
.element {
  position: absolute;
  z-index: 999; /* 不生效，因为没有创建新的层叠上下文？检查父级 */
}

/* 解决方案1：确保父级没有设置 z-index 或创建了新的层叠上下文 */
.parent { position: relative; z-index: auto; } /* 不创建新上下文 */

/* 解决方案2：提升父级到同一层叠上下文 */
.parent { position: relative; z-index: 1; }
.element { position: absolute; z-index: 2; }

/* 解决方案3：使用 transform 创建新上下文（不改变布局） */
.parent { transform: translateZ(0); }
```

**实际应用场景**：

```css
/* 模态框（确保在最上层） */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000; /* 创建新的层叠上下文 */
}

/* 下拉菜单（避免被其他元素遮盖） */
.dropdown {
  position: relative;
  z-index: 100; /* 创建新的层叠上下文 */
}

/* 卡片悬浮效果 */
.card {
  transition: transform 0.3s;
}
.card:hover {
  transform: translateY(-5px); /* 创建新层叠上下文，避免覆盖问题 */
  z-index: 10;
}
```

---

### 问题3：:is()、:where()、:has() 等新选择器的原理和使用场景？

**考察点**：对现代CSS选择器的理解

**参考答案**：

**:is() - 选择器列表（低优先级）**

```css
/* 传统写法 */
header nav ul li,
footer nav ul li,
.sidebar nav ul li {
  color: red;
}

/* 使用 :is() */
:is(header, footer, .sidebar) nav ul li {
  color: red;
}

/* 权重：:is() 的优先级取内部最高选择器的优先级 */
:is(#header, .nav) a { } /* 优先级等同 #header a */
```

**:where() - 选择器列表（零优先级）**

```css
/* :where() 的优先级始终为 0，非常适合重置样式 */
:where(header, footer, .sidebar) nav ul li {
  color: red; /* 很容易被其他样式覆盖 */
}

/* 应用场景：CSS Reset */
:where(h1, h2, h3, h4, h5, h6) {
  margin: 0;
  font-weight: normal;
}

/* 配合渐进增强 */
.button {
  background: gray;
}
:where(.button-primary) {
  background: blue; /* 优先级相同，由源码顺序决定 */
}
```

**:has() - 父级选择器（最强大的选择器）**

```css
/* 选择包含图片的 figure */
figure:has(img) {
  border: 1px solid #ccc;
}

/* 选择包含标题的卡片 */
.card:has(.card__title) {
  padding: 1rem;
}

/* 选择包含错误信息的表单域 */
.form-group:has(.error-message) {
  border-color: red;
}

/* 选择包含特定内容的容器 */
.sidebar:has(.active-link) {
  background: #f0f0f0;
}

/* 复杂组合：排除空状态 */
.container:has(> :not(:empty)) {
  display: block;
}
```

**实际应用场景**：

```css
/* 1. 表单验证（不需要额外的 JS 类） */
.form-item:has(input:invalid) {
  border-color: red;
}
.form-item:has(input:invalid)::after {
  content: '✗ 格式错误';
  color: red;
}

/* 2. 响应式布局调整 */
.sidebar:has(.widget-large) {
  width: 300px; /* 有大型组件时，侧边栏变宽 */
}

/* 3. 动态样式切换 */
article:has(h2) {
  margin-top: 2rem;
}
article:has(> h2:first-child) {
  margin-top: 0;
}

/* 4. 组合使用 */
main:has(section:first-child:is(.hero, .banner)) {
  padding-top: 0;
}
```

---

## 二、盒模型与布局（3题）

### 问题4：标准盒模型和怪异盒模型的区别？box-sizing 的作用？

**考察点**：对盒模型的深入理解

**参考答案**：

**盒模型组成**：

```css
/* 标准盒模型（content-box） */
.total-width = width + padding-left + padding-right + border-left + border-right
.total-height = height + padding-top + padding-bottom + border-top + border-bottom

/* 怪异盒模型（border-box） */
.total-width = width（包含 padding 和 border）
.total-height = height（包含 padding 和 border）
```

**对比示例**：

```css
/* 标准盒模型 */
.box-standard {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 1px solid #000;
  /* 实际宽度：200 + 40 + 2 = 242px */
}

/* 怪异盒模型 */
.box-border {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 1px solid #000;
  /* 实际宽度：200px（内容宽度 = 200 - 40 - 2 = 158px） */
}
```

**最佳实践**：

```css
/* 全局重置，所有元素使用 border-box */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 第三方组件可能需要重置回 content-box */
.third-party-widget {
  box-sizing: content-box;
}

/* 百分比布局中 border-box 的优势 */
.grid {
  display: flex;
  gap: 20px;
}
.grid-item {
  flex: 1;
  width: calc(33.333% - 20px); /* 使用 border-box 无需减去 padding/border */
}
```

**实际应用场景**：

```css
/* 响应式布局 */
.container {
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  /* border-box 确保 padding 不会导致溢出 */
  box-sizing: border-box;
}

/* 表单元素统一尺寸 */
input,
select,
textarea {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  box-sizing: border-box; /* 所有表单元素尺寸一致 */
}

/* 卡片组件 */
.card {
  width: 300px;
  padding: 20px;
  border: 1px solid #eee;
  box-sizing: border-box; /* 卡片始终是 300px，内容自动收缩 */
}
```

---

### 问题5：BFC（块级格式化上下文）是什么？如何触发？解决了什么问题？

**考察点**：对格式化上下文的理解

**参考答案**：

**BFC 定义**：
BFC 是独立的渲染区域，内部的元素不会影响外部元素的布局。

**触发 BFC 的条件**：

```css
/* 1. 根元素（html） */
html { }

/* 2. 浮动元素 */
.float { float: left; }

/* 3. 绝对定位元素 */
.absolute { position: absolute; }

/* 4. display: inline-block */
.inline-block { display: inline-block; }

/* 5. overflow 不为 visible */
.overflow-hidden { overflow: hidden; }
.overflow-auto { overflow: auto; }
.overflow-scroll { overflow: scroll; }

/* 6. display: flex/grid 的子元素 */
.flex-item { display: flex; }

/* 7. display: table-cell */
.table-cell { display: table-cell; }

/* 8. contain: layout */
.contain { contain: layout; }
```

**BFC 解决的问题**：

```css
/* 1. 清除浮动（防止高度塌陷） */
.clearfix {
  overflow: auto; /* 触发 BFC */
  /* 或 */
  display: flow-root; /* 更优雅的方式，无副作用 */
}

/* 2. 防止外边距重叠 */
.parent {
  overflow: auto; /* 触发 BFC，防止子元素 margin 溢出 */
}
.child {
  margin-top: 20px; /* 不会溢出到 parent 外部 */
}

/* 3. 阻止元素被浮动元素覆盖 */
.sidebar {
  float: left;
  width: 200px;
}
.content {
  overflow: auto; /* 触发 BFC，不会与浮动元素重叠 */
  /* 或 */
  display: flow-root;
}
```

**实际应用场景**：

```css
/* 1. 两栏自适应布局 */
.left {
  float: left;
  width: 200px;
  background: #f0f0f0;
}
.right {
  overflow: auto; /* 触发 BFC，实现自适应 */
  background: #fff;
}

/* 2. 清除浮动 */
.clearfix::after {
  content: '';
  display: table;
  clear: both;
}

/* 或使用 display: flow-root（更简洁） */
.clearfix {
  display: flow-root;
}

/* 3. 防止 margin 穿透 */
.card {
  background: white;
  border-radius: 8px;
  overflow: auto; /* 防止子元素的 margin 穿透 */
}
.card-title {
  margin-top: 20px; /* 不会导致 card 产生上边距 */
}
```

---

### 问题6：如何实现等高布局？有哪些方案及其原理？

**考察点**：对复杂布局的理解

**参考答案**：

**方案1：Flexbox（最推荐）**

```css
.container {
  display: flex;
  align-items: stretch; /* 默认值，子元素自动拉伸到相同高度 */
}

.item {
  flex: 1;
  background: #f0f0f0;
}

/* 原理：flex 子元素在交叉轴方向默认拉伸对齐 */
```

**方案2：Grid 布局**

```css
.container {
  display: grid;
  grid-auto-rows: 1fr; /* 所有行高度相等 */
  grid-template-columns: 1fr 1fr 1fr;
}

/* 或使用 minmax */
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
```

**方案3：表格布局**

```css
.container {
  display: table;
  width: 100%;
}

.item {
  display: table-cell;
  background: #f0f0f0;
  padding: 20px;
}

/* 原理：表格单元格默认高度相等 */
```

**方案4：绝对定位（不推荐，需固定高度）**

```css
.container {
  position: relative;
}

.item {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 33.333%;
}
```

**方案5：伪等高（通过背景图片或渐变）**

```css
.container {
  background: linear-gradient(
    to right,
    #f0f0f0 0%,
    #f0f0f0 33.333%,
    #fff 33.333%,
    #fff 100%
  );
}
```

**实际应用场景**：

```css
/* 1. 卡片列表（Flexbox） */
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.card {
  flex: 1 1 calc(33.333% - 20px);
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
.card-content {
  flex: 1; /* 使内容区填满剩余空间 */
}

/* 2. 仪表盘布局（Grid） */
.dashboard {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  grid-auto-rows: minmax(100px, auto);
}
.widget {
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.widget-large {
  grid-column: span 2;
  grid-row: span 2; /* 自动拉伸到两行高度 */
}

/* 3. 侧边栏 + 内容区（Flexbox） */
.layout {
  display: flex;
  min-height: 100vh;
}
.sidebar {
  width: 250px;
  background: #2c3e50;
}
.content {
  flex: 1;
  background: #ecf0f1;
}
```

---

## 三、定位与层叠（3题）

### 问题7：position 的各个值（static/relative/absolute/fixed/sticky）的区别和使用场景？

**考察点**：对定位机制的理解

**参考答案**：

**各定位值对比**：

| 定位值 | 参考系 | 脱离文档流 | 占位 | 场景 |
|--------|--------|-----------|------|------|
| static | 正常流 | 否 | 是 | 默认 |
| relative | 自身原位置 | 否 | 是 | 微调、为子元素提供参考 |
| absolute | 最近的非static祖先 | 是 | 否 | 弹窗、下拉菜单 |
| fixed | 视口 | 是 | 否 | 导航栏、回到顶部 |
| sticky | 滚动容器 | 否（粘性） | 是 | 表头、分类导航 |

**详细示例**：

```css
/* 1. static（默认） */
.element {
  position: static; /* 无法使用 top/left 等属性 */
}

/* 2. relative（相对定位） */
.icon {
  position: relative;
  top: -2px; /* 向上偏移2px，不影响其他元素 */
}
.overlay {
  position: relative; /* 作为绝对定位的参考 */
}

/* 3. absolute（绝对定位） */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
}

/* 4. fixed（固定定位） */
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 1000;
}

/* 5. sticky（粘性定位） */
.section-title {
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}
```

**实际应用场景**：

```css
/* 1. 模态框（absolute + fixed 组合） */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}
.modal-content {
  position: relative;
  background: white;
  border-radius: 8px;
  max-width: 500px;
  width: 90%;
  max-height: 90%;
  overflow: auto;
}
.modal-close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

/* 2. 粘性表头 */
.table-wrapper {
  overflow: auto;
  max-height: 400px;
}
.table thead th {
  position: sticky;
  top: 0;
  background: #f8f9fa;
  z-index: 10;
}

/* 3. 下拉菜单 */
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 160px;
  background: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  border-radius: 4px;
  z-index: 100;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
}
.dropdown:hover .dropdown-content {
  opacity: 1;
  visibility: visible;
}

/* 4. 悬浮操作按钮（FAB） */
.fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #2196f3;
  color: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  cursor: pointer;
  transition: transform 0.2s;
}
.fab:hover {
  transform: scale(1.1);
}
```

---

### 问题8：transform 和 position 的定位有什么区别？对渲染性能有什么影响？

**考察点**：对合成层和性能优化的理解

**参考答案**：

**核心区别**：

```css
/* position + top/left：触发布局（Layout）+ 绘制（Paint） */
.animate-position {
  position: absolute;
  transition: left 0.3s;
  left: 0;
}
.animate-position:hover {
  left: 100px; /* 触发重排，性能较差 */
}

/* transform：只触发合成（Composite） */
.animate-transform {
  transition: transform 0.3s;
  transform: translateX(0);
}
.animate-transform:hover {
  transform: translateX(100px); /* 只触发合成，性能最佳 */
}
```

**渲染流水线对比**：

```
position/top/left:
JS → Style → Layout → Paint → Composite（所有步骤）

transform:
JS → Style → Composite（跳过 Layout 和 Paint）
```

**创建合成层的条件**：

```css
/* 以下属性会创建新的合成层 */
.element {
  transform: translateZ(0); /* 3D transform */
  will-change: transform; /* will-change 提示 */
  backface-visibility: hidden; /* 背面不可见 */
  opacity: < 1; /* 透明度 */
  filter: blur(5px); /* 滤镜 */
  position: fixed; /* 固定定位（部分浏览器） */
}
```

**性能测试对比**：

```javascript
// 性能对比代码
const positionElement = document.querySelector('.position');
const transformElement = document.querySelector('.transform');

function measurePerformance() {
  // 使用 requestAnimationFrame 测量帧率
  let lastTime = performance.now();
  let frames = 0;
  
  function checkFrame() {
    const now = performance.now();
    frames++;
    
    if (now - lastTime >= 1000) {
      console.log(`帧率: ${frames}`);
      frames = 0;
      lastTime = now;
    }
    requestAnimationFrame(checkFrame);
  }
  checkFrame();
  
  // 测试 position 动画
  positionElement.style.transition = 'left 0.1s';
  positionElement.style.left = '0px';
  setInterval(() => {
    positionElement.style.left = Math.random() * 100 + 'px';
  }, 100);
  
  // 测试 transform 动画
  transformElement.style.transition = 'transform 0.1s';
  setInterval(() => {
    transformElement.style.transform = `translateX(${Math.random() * 100}px)`;
  }, 100);
}
```

**实际应用场景**：

```css
/* ✅ 高性能动画 */
.animated-card {
  transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
  will-change: transform;
}
.animated-card:hover {
  transform: translateY(-5px) scale(1.02);
}

/* ✅ 高性能滚动视差 */
.parallax {
  transform: translateZ(0); /* 创建合成层 */
  will-change: transform;
}
.parallax-bg {
  transform: translateY(calc(var(--scroll) * 0.5px));
}

/* ❌ 避免动画触发布局 */
.bad-animation {
  transition: width 0.3s, height 0.3s, top 0.3s;
  /* 这些属性都会触发重排 */
}

/* ✅ 使用 transform 替代 */
.good-animation {
  transition: transform 0.3s;
  transform: scale(1.1);
}
```

---

### 问题9：如何实现一个 CSS 绘制三角形？原理是什么？

**考察点**：对盒模型和边框的理解

**参考答案**：

**基本原理**：

```css
/* 边框相交处是斜线，利用这个特性制作三角形 */
.triangle {
  width: 0;
  height: 0;
  border: 50px solid transparent;
  border-top-color: red; /* 只显示顶部边框，形成向下三角形 */
}

/* 或者更清晰的写法 */
.triangle-down {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 50px solid red;
}
```

**各种方向的三角形**：

```css
/* 向上三角形 */
.triangle-up {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid red;
}

/* 向下三角形 */
.triangle-down {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 50px solid red;
}

/* 向左三角形 */
.triangle-left {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-right: 50px solid red;
}

/* 向右三角形 */
.triangle-right {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 50px solid red;
}
```

**带边框的三角形**：

```css
/* 通过伪元素叠加实现 */
.triangle-with-border {
  position: relative;
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-bottom: 50px solid red;
}

.triangle-with-border::before {
  content: '';
  position: absolute;
  top: 2px;
  left: -48px;
  width: 0;
  height: 0;
  border-left: 48px solid transparent;
  border-right: 48px solid transparent;
  border-bottom: 48px solid white;
}
```

**实际应用场景**：

```css
/* 1. 工具提示箭头 */
.tooltip {
  position: relative;
  background: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
}
.tooltip::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 20px;
  border: 6px solid transparent;
  border-bottom-color: #333;
}

/* 2. 下拉菜单箭头 */
.dropdown::after {
  content: '';
  display: inline-block;
  margin-left: 8px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #666;
  transition: transform 0.2s;
}
.dropdown.open::after {
  transform: rotate(180deg);
}

/* 3. 气泡对话框 */
.bubble {
  position: relative;
  background: #f0f0f0;
  border-radius: 8px;
  padding: 12px;
}
.bubble::before {
  content: '';
  position: absolute;
  left: 20px;
  top: -10px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid #f0f0f0;
}

/* 4. 步骤指示器 */
.step {
  position: relative;
  width: 30px;
  height: 30px;
  background: #ccc;
  border-radius: 50%;
}
.step.active::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 8px;
  width: 6px;
  height: 12px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  transform: rotate(45deg); /* 使用 transform 做勾号，不用三角形 */
}
```

---

## 四、Flex 与 Grid（3题）

### 问题10：Flex 布局中的 flex-grow、flex-shrink、flex-basis 是如何计算的？

**考察点**：对 Flex 弹性计算的理解

**参考答案**：

**计算公式**：

```css
/* flex 属性简写：flex: flex-grow flex-shrink flex-basis */
flex: 1; /* 等价于 flex: 1 1 0% */
flex: auto; /* 等价于 flex: 1 1 auto */
flex: none; /* 等价于 flex: 0 0 auto */
```

**详细计算过程**：

```javascript
// 1. 计算剩余空间
剩余空间 = 容器宽度 - 所有项目的 flex-basis 总和

// 2. 如果剩余空间 > 0（分配增长）
每个项目增加值 = 剩余空间 × (flex-grow / 所有 flex-grow 总和)

// 3. 如果剩余空间 < 0（分配收缩）
每个项目减少值 = |剩余空间| × (flex-shrink × 项目宽度 / 所有 flex-shrink × 项目宽度总和)
```

**实际计算示例**：

```html
<div class="container" style="width: 800px">
  <div class="item" style="flex: 2 1 200px">A</div>
  <div class="item" style="flex: 1 1 200px">B</div>
  <div class="item" style="flex: 1 2 200px">C</div>
</div>
```

```javascript
// 计算过程
总 flex-basis = 200 + 200 + 200 = 600px
剩余空间 = 800 - 600 = 200px（正数，使用 flex-grow）

总 flex-grow = 2 + 1 + 1 = 4
A 增加 = 200 × (2/4) = 100px → 最终宽度 = 300px
B 增加 = 200 × (1/4) = 50px → 最终宽度 = 250px
C 增加 = 200 × (1/4) = 50px → 最终宽度 = 250px

// 收缩场景（容器宽度变小）
剩余空间 = 500 - 600 = -100px（负数，使用 flex-shrink）

总加权收缩 = (2 × 200) + (1 × 200) + (2 × 200) = 400 + 200 + 400 = 1000
A 减少 = 100 × (400/1000) = 40px → 最终宽度 = 160px
B 减少 = 100 × (200/1000) = 20px → 最终宽度 = 180px
C 减少 = 100 × (400/1000) = 40px → 最终宽度 = 160px
```

**最佳实践**：

```css
/* 1. 等宽布局 */
.equal-width {
  display: flex;
}
.equal-width > * {
  flex: 1; /* 所有子元素等宽 */
}

/* 2. 固定宽度 + 自适应 */
.sidebar {
  width: 200px;
  flex-shrink: 0; /* 不收缩 */
}
.content {
  flex: 1; /* 占据剩余空间 */
}

/* 3. 内容撑开 + 不收缩 */
.auto-width {
  flex: 0 0 auto; /* 根据内容自动宽度，不收缩 */
}

/* 4. 最小宽度限制 */
.item {
  flex: 1;
  min-width: 150px; /* 防止过度收缩 */
  max-width: 300px; /* 防止过度增长 */
}
```

---

### 问题11：Grid 布局的核心概念和使用场景？与 Flex 的区别？

**考察点**：对 Grid 布局的理解和选型能力

**参考答案**：

**Grid 核心概念**：

```css
/* 1. 网格容器 */
.grid {
  display: grid;
  /* 定义列 */
  grid-template-columns: 200px 1fr 2fr;
  /* 定义行 */
  grid-template-rows: auto 100px;
  /* 间距 */
  gap: 20px;
}

/* 2. 网格单元 */
.item {
  grid-column: 1 / 3; /* 从第1列到第3列 */
  grid-row: 1 / 2;    /* 从第1行到第2行 */
}

/* 3. 命名网格 */
.grid {
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

**Flex vs Grid 对比**：

| 特性 | Flex | Grid |
|------|------|------|
| 维度 | 一维（行或列） | 二维（行和列） |
| 内容驱动 | 内容决定布局 | 布局决定内容 |
| 适用场景 | 导航、列表、组件内部 | 整体页面布局、复杂网格 |
| 浏览器兼容 | 更好 | 现代浏览器 |

**实际应用场景**：

```css
/* 1. 响应式网格布局 */
.grid-responsive {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
/* 自动适配不同屏幕宽度 */

/* 2. 卡片布局（精确控制） */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  grid-auto-rows: minmax(200px, auto);
}
.card-large {
  grid-column: span 2;
  grid-row: span 2;
}

/* 3. 仪表盘布局 */
.dashboard {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
}
.widget-header {
  grid-column: 1 / -1; /* 横跨所有列 */
}
.widget-chart {
  grid-column: span 2;
}

/* 4. 圣杯布局（Header/Sidebar/Main/Footer） */
.holy-grail {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 250px 1fr;
  min-height: 100vh;
}
.holy-grail-header {
  grid-column: 1 / -1;
}
.holy-grail-sidebar {
  grid-row: 2;
}
.holy-grail-main {
  grid-row: 2;
}
.holy-grail-footer {
  grid-column: 1 / -1;
}

/* 5. 瀑布流布局（结合 Masonry） */
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
.masonry-item {
  break-inside: avoid; /* 防止元素跨列断开 */
}
```

**高级 Grid 技巧**：

```css
/* 1. 子网格（Subgrid） */
.parent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.child {
  display: grid;
  grid-template-columns: subgrid; /* 继承父网格的列定义 */
}

/* 2. 命名区域响应式 */
.grid {
  display: grid;
  grid-template-areas: 
    "header"
    "main"
    "sidebar"
    "footer";
}
@media (min-width: 768px) {
  .grid {
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
    grid-template-columns: 250px 1fr;
  }
}

/* 3. 网格对齐 */
.grid {
  display: grid;
  justify-items: center;  /* 水平对齐 */
  align-items: center;    /* 垂直对齐 */
  justify-content: center; /* 网格整体水平对齐 */
  align-content: center;   /* 网格整体垂直对齐 */
}
```

---

### 问题12：如何实现一个瀑布流布局？有哪些实现方案？

**考察点**：对复杂布局的解决方案

**参考答案**：

**方案1：CSS Grid + Masonry（现代方案）**

```css
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  grid-auto-flow: dense; /* 紧凑填充 */
}

/* 不同高度的元素自动填充 */
.masonry-item {
  break-inside: avoid;
  margin-bottom: 20px;
}
```

**方案2：CSS 多列布局（Columns）**

```css
.masonry {
  column-count: 4;
  column-gap: 20px;
}
.masonry-item {
  break-inside: avoid;
  margin-bottom: 20px;
  display: inline-block;
  width: 100%;
}
```

**方案3：Flex 布局（需要固定列数）**

```css
.masonry {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 800px; /* 必须固定高度 */
}
.masonry-item {
  width: calc(25% - 20px);
  margin: 10px;
}
```

**方案4：JavaScript 实现（最灵活）**

```javascript
class Waterfall {
  constructor(container, options = {}) {
    this.container = container;
    this.columnCount = options.columnCount || 4;
    this.gap = options.gap || 20;
    this.columns = [];
    this.init();
  }
  
  init() {
    // 创建列容器
    for (let i = 0; i < this.columnCount; i++) {
      const column = document.createElement('div');
      column.className = 'waterfall-column';
      column.style.width = `calc(${100 / this.columnCount}% - ${this.gap}px)`;
      column.style.marginLeft = i > 0 ? `${this.gap}px` : '0';
      this.columns.push(column);
      this.container.appendChild(column);
    }
    
    // 监听窗口变化
    window.addEventListener('resize', this.debounce(() => this.layout(), 200));
  }
  
  append(items) {
    items.forEach(item => {
      // 找到最短的列
      const shortestColumn = this.getShortestColumn();
      shortestColumn.appendChild(item);
      
      // 记录高度变化
      this.layout();
    });
  }
  
  getShortestColumn() {
    let minHeight = Infinity;
    let minIndex = 0;
    
    this.columns.forEach((col, index) => {
      const height = col.offsetHeight;
      if (height < minHeight) {
        minHeight = height;
        minIndex = index;
      }
    });
    
    return this.columns[minIndex];
  }
  
  layout() {
    // 重置所有列
    this.columns.forEach(col => {
      const items = Array.from(col.children);
      col.innerHTML = '';
      items.forEach(item => col.appendChild(item));
    });
    
    // 重新排列所有项
    const allItems = Array.from(this.container.querySelectorAll('.masonry-item'));
    allItems.forEach(item => {
      const shortestColumn = this.getShortestColumn();
      shortestColumn.appendChild(item);
    });
  }
  
  debounce(fn, delay) {
    let timer;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(fn, delay);
    };
  }
}

// 使用
const waterfall = new Waterfall(document.getElementById('container'), {
  columnCount: 4,
  gap: 20
});

// 加载图片后重新布局
const images = document.querySelectorAll('img');
images.forEach(img => {
  img.addEventListener('load', () => waterfall.layout());
});
```

**方案5：React/Vue 组件实现**：

```jsx
// React 瀑布流组件
function Waterfall({ items, columnCount = 4, gap = 20 }) {
  const [columns, setColumns] = useState([]);
  
  useEffect(() => {
    // 将 items 分配到各列
    const columnHeights = new Array(columnCount).fill(0);
    const newColumns = new Array(columnCount).fill().map(() => []);
    
    items.forEach(item => {
      // 找到高度最小的列
      const minIndex = columnHeights.indexOf(Math.min(...columnHeights));
      newColumns[minIndex].push(item);
      // 假设每个 item 高度为 200（实际应该动态计算）
      columnHeights[minIndex] += 200;
    });
    
    setColumns(newColumns);
  }, [items, columnCount]);
  
  return (
    <div className="waterfall" style={{ display: 'flex', gap }}>
      {columns.map((column, i) => (
        <div key={i} style={{ flex: 1 }}>
          {column.map(item => (
            <div key={item.id} className="waterfall-item">
              {item.content}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
```

---

## 五、响应式设计（3题）

### 问题13：移动端适配方案有哪些？rem、vw、百分比各有什么优缺点？

**考察点**：对响应式布局的理解

**参考答案**：

**主流适配方案对比**：

| 方案 | 原理 | 优点 | 缺点 |
|------|------|------|------|
| rem | 基于根字体大小 | 兼容性好、可配合 JS 动态计算 | 需要 JS 辅助 |
| vw/vh | 基于视口比例 | 纯 CSS、精确 | 需要计算、兼容性稍差 |
| 百分比 | 基于父元素 | 简单 | 层级依赖、不精确 |
| 视口缩放 | viewport 设置 | 简单 | 字体和间距失真 |

**rem 适配方案**：

```javascript
// 动态设置根字体大小
function setRem() {
  const designWidth = 750; // 设计稿宽度
  const baseSize = 100;    // 基准字体大小
  const scale = document.documentElement.clientWidth / designWidth;
  document.documentElement.style.fontSize = baseSize * scale + 'px';
}

setRem();
window.addEventListener('resize', setRem);
```

```css
/* 使用 rem */
/* 设计稿 750px，1rem = 100px */
.element {
  width: 3.2rem;  /* 320px */
  height: 0.8rem; /* 80px */
  font-size: 0.28rem; /* 28px */
}

/* PostCSS 自动转换（px2rem） */
.element {
  width: 320px; /* 自动转为 3.2rem */
}
```

**vw/vh 适配方案**：

```css
/* 1vw = 视口宽度的 1% */
/* 设计稿 750px，100vw = 750px，1px = 0.1333vw */
.element {
  width: 42.666vw;  /* 320px = 320/750*100vw */
  height: 10.666vw; /* 80px */
  font-size: 3.733vw; /* 28px */
}

/* 使用 PostCSS 插件自动转换 */
.element {
  width: 320px; /* 自动转为 42.666vw */
}

/* 配合最大最小宽度限制 */
.container {
  width: 100vw;
  max-width: 750px; /* 限制最大宽度 */
  margin: 0 auto;
}
```

**混合方案（vw + rem）**：

```css
/* 设置根字体为 vw 单位 */
html {
  font-size: calc(100vw / 7.5); /* 750px 设计稿下 = 100px */
}

/* 限制最大最小字体 */
@media (min-width: 750px) {
  html {
    font-size: 100px; /* 最大 100px */
  }
}
@media (max-width: 320px) {
  html {
    font-size: 42.666px; /* 最小 42.666px */
  }
}

/* 使用 rem */
.element {
  width: 3.2rem;
  height: 0.8rem;
}
```

**百分比布局技巧**：

```css
/* 等比例盒子（宽高比） */
.aspect-box {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 比例 */
}
.aspect-box-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* 基于父元素宽度 */
.item {
  width: 33.333%; /* 三列布局 */
  padding: 10%; /* 相对于父元素宽度 */
  margin: 2%; /* 相对于父元素宽度 */
}
```

**实际应用：移动端页面适配**：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

```css
/* 1. 全局设置 */
html {
  font-size: 16px; /* 降级方案 */
}
@media (min-width: 375px) {
  html { font-size: 20px; }
}
@media (min-width: 414px) {
  html { font-size: 22px; }
}

/* 2. 1px 边框问题（高清屏） */
.border-1px {
  position: relative;
}
.border-1px::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: #ccc;
  transform: scaleY(0.5);
  transform-origin: 0 0;
}

/* 3. 图片适配 */
img {
  max-width: 100%;
  height: auto;
}

/* 4. 字体大小 */
body {
  font-size: 14px;
}
@media (min-width: 375px) {
  body { font-size: 16px; }
}
@media (min-width: 414px) {
  body { font-size: 18px; }
}
```

---

### 问题14：如何实现响应式图片？srcset 和 picture 标签的原理？

**考察点**：对响应式图片的理解

**参考答案**：

**srcset + sizes**：

```html
<!-- 根据设备像素比选择 -->
<img src="image-1x.jpg"
     srcset="image-2x.jpg 2x,
             image-3x.jpg 3x"
     alt="responsive">

<!-- 根据视口宽度选择 -->
<img src="image-small.jpg"
     srcset="image-small.jpg 480w,
             image-medium.jpg 800w,
             image-large.jpg 1200w"
     sizes="(max-width: 600px) 480px,
            (max-width: 1000px) 800px,
            1200px"
     alt="responsive">
```

**sizes 计算逻辑**：
```javascript
// 浏览器选择图片的算法
1. 获取当前视口宽度
2. 匹配 sizes 中的媒体查询，得到图片显示宽度
3. 在 srcset 中找到最接近该宽度的图片（且像素比合适）

// 示例：视口宽度 500px
sizes: "(max-width: 600px) 480px, 800px"
// 匹配结果：图片显示宽度 = 480px
// 在 srcset 中选择最接近 480w 的图片
```

**picture 元素**：

```html
<picture>
  <!-- 根据媒体查询选择不同源 -->
  <source media="(min-width: 1200px)" 
          srcset="image-large.jpg"
          type="image/jpeg">
  <source media="(min-width: 800px)" 
          srcset="image-medium.jpg"
          type="image/jpeg">
  <source srcset="image-small.webp" 
          type="image/webp">
  <!-- 降级方案 -->
  <img src="image-small.jpg" alt="responsive">
</picture>
```

**实际应用场景**：

```html
<!-- 1. 艺术指导（不同设备显示不同裁剪） -->
<picture>
  <source media="(min-width: 1024px)" 
          srcset="hero-desktop.jpg">
  <source media="(min-width: 768px)" 
          srcset="hero-tablet.jpg">
  <img src="hero-mobile.jpg" alt="hero">
</picture>

<!-- 2. 格式选择（WebP 优先） -->
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.avif" type="image/avif">
  <img src="image.jpg" alt="fallback">
</picture>

<!-- 3. 高分辨率屏幕 -->
<img src="image.jpg"
     srcset="image@2x.jpg 2x,
             image@3x.jpg 3x"
     alt="retina">

<!-- 4. 懒加载 + 响应式 -->
<img loading="lazy"
     src="placeholder.jpg"
     srcset="image-small.jpg 480w,
             image-medium.jpg 800w,
             image-large.jpg 1200w"
     sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33.33vw"
     alt="lazy responsive">
```

**CSS 响应式背景图**：

```css
/* 使用 image-set */
.hero {
  background-image: image-set(
    url("hero-small.jpg") 1x,
    url("hero-medium.jpg") 2x,
    url("hero-large.jpg") 3x
  );
}

/* 配合媒体查询 */
.hero {
  background-size: cover;
  background-position: center;
}
@media (max-width: 768px) {
  .hero {
    background-image: url("hero-mobile.jpg");
  }
}
@media (min-width: 1200px) {
  .hero {
    background-image: url("hero-desktop.jpg");
  }
}
```

---

### 问题15：移动端 1px 边框问题如何解决？

**考察点**：对移动端渲染的理解

**参考答案**：

**问题原因**：
- 移动设备物理像素和逻辑像素的比例（devicePixelRatio）
- 例如 iPhone 6 的 DPR = 2，CSS 1px 实际占 2 个物理像素

**解决方案汇总**：

```css
/* 1. 伪元素 + transform（最常用） */
.border-1px {
  position: relative;
}
.border-1px::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color: #ccc;
  transform: scaleY(0.5);
  transform-origin: 0 0;
}

/* 多边边框 */
.border-all::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #ccc;
  transform: scale(0.5);
  transform-origin: 0 0;
}

/* 2. box-shadow 模拟 */
.border-shadow {
  box-shadow: 0 1px 0 0 #ccc;
  /* 缺点：不支持圆角，颜色不精确 */
}

/* 3. viewport + rem（配合 JS） */
<meta name="viewport" content="width=device-width, initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5">
<script>
  const scale = 1 / window.devicePixelRatio;
  document.querySelector('meta[name="viewport"]')
    .setAttribute('content', `width=device-width, initial-scale=${scale}, maximum-scale=${scale}, minimum-scale=${scale}`);
</script>
/* 然后所有尺寸用 rem 表示 */

/* 4. 边框图片 */
.border-image {
  border-bottom: 1px solid transparent;
  border-image: url('border.png') 2 stretch;
}
```

**封装为公共样式**：

```scss
// 1px 边框 Mixin
@mixin border-1px($color, $direction: bottom, $radius: 0) {
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    @if $direction == bottom {
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
    } @else if $direction == top {
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
    } @else if $direction == left {
      top: 0;
      left: 0;
      bottom: 0;
      width: 1px;
    } @else if $direction == right {
      top: 0;
      right: 0;
      bottom: 0;
      width: 1px;
    } @else if $direction == all {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid $color;
      border-radius: $radius;
      transform: scale(0.5);
      transform-origin: 0 0;
    }
    
    background-color: $color;
    transform: scaleY(0.5);
    transform-origin: 0 0;
  }
}

// 使用
.element {
  @include border-1px(#ccc, bottom);
}

.card {
  @include border-1px(#eee, all, 8px);
}
```

**实际应用**：

```html
<div class="list-item">列表项</div>
<div class="card">卡片内容</div>
<div class="button-group">
  <button class="button">按钮</button>
</div>
```

```scss
.list-item {
  @include border-1px(#e5e5e5, bottom);
  padding: 12px 0;
}

.card {
  @include border-1px(#f0f0f0, all, 12px);
  padding: 16px;
}

.button {
  position: relative;
  & + & {
    @include border-1px(#ccc, left);
    margin-left: 10px;
    padding-left: 10px;
  }
}
```

---

## 六、动画与性能（3题）

### 问题16：CSS 动画和 JavaScript 动画的区别？如何选择？

**考察点**：对动画机制的理解

**参考答案**：

**核心区别**：

| 特性 | CSS 动画 | JavaScript 动画 |
|------|----------|----------------|
| 性能 | 优（合成器线程） | 良（主线程，需优化） |
| 控制 | 有限 | 完全控制 |
| 复杂度 | 简单 | 复杂 |
| 兼容性 | 好 | 好 |
| 交互 | 难以实现 | 容易实现 |

**CSS 动画最佳实践**：

```css
/* ✅ 推荐：只动画 transform 和 opacity */
.card {
  transition: transform 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
}
.card:hover {
  transform: translateY(-5px) scale(1.02);
}

/* ✅ 使用 will-change 提示 */
.animated {
  will-change: transform, opacity;
}

/* ✅ 使用关键帧动画 */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.fade-in {
  animation: fadeIn 0.5s ease-out;
}

/* ❌ 避免动画这些属性 */
.bad-animation {
  transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s;
}
```

**JavaScript 动画**：

```javascript
// 1. 使用 requestAnimationFrame（推荐）
function animate(element, target, duration) {
  const start = performance.now();
  const startPosition = element.getBoundingClientRect().left;
  const distance = target - startPosition;
  
  function step(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = easeOutCubic(progress);
    const newPosition = startPosition + distance * easeProgress;
    
    element.style.transform = `translateX(${newPosition}px)`;
    
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }
  
  requestAnimationFrame(step);
}

// 缓动函数
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

// 2. 使用 Web Animations API
element.animate([
  { transform: 'translateX(0px)' },
  { transform: 'translateX(100px)' }
], {
  duration: 1000,
  iterations: Infinity,
  direction: 'alternate',
  easing: 'ease-in-out'
});

// 3. 交互式动画
element.addEventListener('mousemove', (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  
  element.style.transform = `
    rotateX(${y * 20}deg) 
    rotateY(${x * 20}deg)
    translateZ(50px)
  `;
});
```

**选择建议**：

```javascript
// 场景1：简单过渡效果 → CSS 动画
.button { transition: all 0.2s; }

// 场景2：复杂路径动画 → JS 动画
function animateAlongPath() {
  // 自定义路径计算
}

// 场景3：滚动视差 → CSS + JS 结合
window.addEventListener('scroll', () => {
  const scroll = window.scrollY;
  element.style.transform = `translateY(${scroll * 0.5}px)`;
});

// 场景4：无限循环动画 → CSS 动画
.loader {
  animation: spin 1s linear infinite;
}

// 场景5：基于用户交互的动画 → JS 动画
element.addEventListener('drag', (e) => {
  element.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
```

---

### 问题17：如何实现高性能的滚动动画（如视差滚动）？

**考察点**：对滚动性能优化的理解

**参考答案**：

**视差滚动原理**：

```css
/* 1. 使用 transform 和 will-change */
.parallax {
  will-change: transform;
  transform: translateZ(0); /* 创建合成层 */
}

/* 2. 背景视差 */
.parallax-bg {
  background-attachment: fixed; /* 简单但性能差 */
  /* 推荐使用 transform */
}
```

**高性能实现方案**：

```javascript
// 1. 使用 requestAnimationFrame + transform
class Parallax {
  constructor() {
    this.elements = document.querySelectorAll('[data-parallax]');
    this.scrollY = window.scrollY;
    this.init();
  }
  
  init() {
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY;
      requestAnimationFrame(() => this.update());
    });
  }
  
  update() {
    this.elements.forEach(el => {
      const speed = el.dataset.parallax || 0.5;
      const y = this.scrollY * speed;
      el.style.transform = `translateY(${y}px)`;
    });
  }
}

// 2. 使用 Intersection Observer（性能优化）
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 只处理可见元素
      const el = entry.target;
      const speed = el.dataset.parallax;
      const y = window.scrollY * speed;
      el.style.transform = `translateY(${y}px)`;
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-parallax]').forEach(el => {
  observer.observe(el);
});
```

**纯 CSS 视差**：

```css
/* 使用 perspective 和 transform */
.parallax-container {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 1px;
  transform-style: preserve-3d;
}

.parallax-layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.parallax-back {
  transform: translateZ(-1px) scale(2);
  z-index: -1;
}

.parallax-base {
  transform: translateZ(0);
}
```

**实际应用场景**：

```html
<!-- 滚动视差卡片 -->
<div class="scroll-container">
  <div class="card" data-parallax="0.2">内容1</div>
  <div class="card" data-parallax="0.4">内容2</div>
  <div class="card" data-parallax="0.6">内容3</div>
</div>
```

```javascript
// 滚动进度动画
class ScrollAnimation {
  constructor() {
    this.elements = document.querySelectorAll('[data-scroll-animate]');
    this.init();
  }
  
  init() {
    window.addEventListener('scroll', () => {
      requestAnimationFrame(() => this.update());
    });
    this.update();
  }
  
  update() {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    
    this.elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const progress = 1 - (rect.top - windowHeight) / windowHeight;
      const clamped = Math.min(Math.max(progress, 0), 1);
      
      const startTransform = el.dataset.startTransform || 'translateY(50px)';
      const endTransform = el.dataset.endTransform || 'translateY(0px)';
      const startOpacity = el.dataset.startOpacity || 0;
      const endOpacity = el.dataset.endOpacity || 1;
      
      // 插值计算
      const transform = interpolateTransform(startTransform, endTransform, clamped);
      const opacity = startOpacity + (endOpacity - startOpacity) * clamped;
      
      el.style.transform = transform;
      el.style.opacity = opacity;
    });
  }
}
```

---

### 问题18：如何排查和优化 CSS 性能问题？

**考察点**：对性能调试的理解

**参考答案**：

**性能分析工具**：

```javascript
// 1. Chrome DevTools Performance 面板
// 录制 → 查看 Frames → 识别重绘/重排

// 2. CSS 触发器查询
// https://csstriggers.com/ 查看每个属性触发的渲染阶段

// 3. 使用 Paint Flashing 工具
// DevTools → Rendering → Paint Flashing（高亮重绘区域）

// 4. 使用 Layers 面板
// DevTools → Layers（查看合成层）
```

**常见性能问题**：

```css
/* ❌ 问题1：复杂选择器 */
.container .sidebar .widget .button .icon { }

/* ✅ 优化：使用类选择器 */
.button-icon { }

/* ❌ 问题2：频繁触发布局 */
.element {
  transition: all 0.3s; /* 可能触发所有属性 */
}

/* ✅ 优化：只指定需要动画的属性 */
.element {
  transition: transform 0.3s, opacity 0.3s;
}

/* ❌ 问题3：强制同步布局 */
function bad() {
  element.style.width = '100px'; // 写入
  const height = element.offsetHeight; // 读取，强制布局
  element.style.height = height + 'px'; // 再次写入
}

/* ✅ 优化：批量读写 */
function good() {
  const height = element.offsetHeight; // 批量读取
  element.style.width = '100px';
  element.style.height = height + 'px';
}
```

**性能优化清单**：

```css
/* 1. 使用 transform 和 opacity 做动画 */
.animate {
  transform: translateX(0);
  opacity: 1;
  transition: transform 0.3s, opacity 0.3s;
}

/* 2. 使用 will-change 提示 */
.will-change {
  will-change: transform;
}

/* 3. 避免使用 @import（阻塞渲染） */
/* ❌ <style> @import url('style.css') </style> */
/* ✅ <link rel="stylesheet" href="style.css"> */

/* 4. 精简选择器 */
/* ❌ 过度限定 */
div[class^="test"] { }

/* ✅ 简化 */
.test { }

/* 5. 避免使用昂贵属性 */
/* 昂贵：box-shadow, border-radius, filter, backdrop-filter */
/* 这些属性会触发重绘和合成 */

/* 6. 使用 content-visibility（延迟渲染） */
.lazy-render {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px; /* 占位高度 */
}

/* 7. 使用 contain 属性隔离 */
.isolate {
  contain: layout paint; /* 告诉浏览器内部变化不影响外部 */
}
```

**性能监控脚本**：

```javascript
// 检测长任务
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.duration > 50) {
      console.warn('长任务:', entry);
      // 上报性能问题
    }
  }
});
observer.observe({ entryTypes: ['longtask'] });

// 检测布局抖动
let lastTime = performance.now();
function checkJank() {
  const now = performance.now();
  const delta = now - lastTime;
  if (delta > 50) {
    console.warn(`卡顿检测: ${delta}ms`);
  }
  lastTime = now;
  requestAnimationFrame(checkJank);
}
requestAnimationFrame(checkJank);
```

---

## 七、CSS预处理器（3题）

### 问题19：Sass/Less 的实现原理？如何编写可维护的 Sass 架构？

**考察点**：对预处理器和工程化架构的理解

**参考答案**：

**实现原理**：

```
Sass/Less 源码 → 词法分析 → 语法分析 → AST → 转换 → CSS 字符串
```

**可维护的 Sass 架构（7-1 模式）**：

```
sass/
│
├── abstracts/          # 抽象层
│   ├── _variables.scss # 变量
│   ├── _mixins.scss    # 混合
│   ├── _functions.scss # 函数
│   └── _placeholders.scss # 占位符
│
├── base/               # 基础层
│   ├── _reset.scss     # 重置样式
│   ├── _typography.scss# 排版
│   └── _base.scss      # 基础元素
│
├── components/         # 组件层
│   ├── _button.scss
│   ├── _card.scss
│   └── _modal.scss
│
├── layout/             # 布局层
│   ├── _header.scss
│   ├── _footer.scss
│   ├── _sidebar.scss
│   └── _grid.scss
│
├── pages/              # 页面层
│   ├── _home.scss
│   ├── _about.scss
│   └── _contact.scss
│
├── themes/             # 主题层
│   ├── _light.scss
│   └── _dark.scss
│
└── vendors/            # 第三方
    └── _bootstrap.scss

# 主入口文件 main.scss
@import 'abstracts/variables';
@import 'abstracts/mixins';
@import 'base/reset';
@import 'base/typography';
@import 'components/button';
// ...
```

**核心功能实现**：

```scss
// 1. 变量
$primary-color: #007bff;
$breakpoints: (
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px
);

// 2. 混合
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  }
}

// 3. 函数
@function rem($px) {
  @return $px / 16px * 1rem;
}

@function color($color, $shade: base) {
  $colors: (
    primary: (
      base: #007bff,
      light: #66b0ff,
      dark: #0056b3
    )
  );
  @return map-get(map-get($colors, $color), $shade);
}

// 4. 占位符
%shadow {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

%ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

// 5. 使用
.button {
  @include flex-center;
  background-color: color(primary);
  padding: rem(8) rem(16);
  
  @include respond-to(md) {
    padding: rem(12) rem(24);
  }
  
  &--large {
    padding: rem(12) rem(24);
    @extend %shadow;
  }
  
  &__text {
    @extend %ellipsis;
  }
}
```

**实际应用**：

```scss
// 主题系统
@mixin theme($theme) {
  @if $theme == light {
    --bg-color: #ffffff;
    --text-color: #333333;
    --border-color: #e5e5e5;
  } @else if $theme == dark {
    --bg-color: #1a1a1a;
    --text-color: #ffffff;
    --border-color: #333333;
  }
}

.theme-light {
  @include theme(light);
}

.theme-dark {
  @include theme(dark);
}

// 响应式工具
@each $breakpoint, $width in $breakpoints {
  .hide-#{$breakpoint} {
    @include respond-to($breakpoint) {
      display: none;
    }
  }
}
```

---

### 问题20：CSS Modules 和 CSS-in-JS 的实现原理和优缺点？

**考察点**：对 CSS 工程化方案的理解

**参考答案**：

**CSS Modules 原理**：

```javascript
// 编译前（Component.module.css）
.button {
  background: blue;
  color: white;
}

// 编译后
._3Kj9k8 {
  background: blue;
  color: white;
}

// 生成映射
{
  button: '_3Kj9k8'
}
```

**配置 webpack**：

```javascript
module.exports = {
  module: {
    rules: [{
      test: /\.module\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        }
      ]
    }]
  }
};
```

**CSS Modules 使用**：

```jsx
// React 组件
import styles from './Button.module.css';

function Button({ primary }) {
  return (
    <button 
      className={`${styles.button} ${primary ? styles.primary : ''}`}
    >
      Click
    </button>
  );
}
```

**CSS-in-JS 原理**：

```javascript
// styled-components 原理
const StyledButton = styled.button`
  background: blue;
  color: white;
`;

// 编译后
function StyledButton(props) {
  // 1. 生成唯一类名
  const className = generateClassName();
  
  // 2. 注入样式到 <style>
  injectStyles(`
    .${className} {
      background: blue;
      color: white;
    }
  `);
  
  // 3. 渲染组件
  return <button {...props} className={className} />;
}
```

**Emotion 实现**：

```javascript
// 编译时提取（Babel 插件）
// 源代码
<div css={css`color: red;`} />

// 编译后
<div className="css-1k3j9a" />

// 样式注入
<style>
.css-1k3j9a { color: red; }
</style>
```

**优缺点对比**：

| 方案 | 优点 | 缺点 |
|------|------|------|
| CSS Modules | 简单、零运行时、兼容性好 | 动态样式需额外处理、全局样式困难 |
| CSS-in-JS | 动态样式强大、作用域完美、类型安全 | 运行时开销、SSR 复杂、学习成本 |

**选择建议**：

```javascript
// 项目类型
// 1. 组件库 → CSS Modules（零运行时依赖）
// 2. 企业应用 → CSS Modules 或 Tailwind
// 3. 动态主题 → CSS-in-JS
// 4. SSR 项目 → CSS Modules（性能更好）

// CSS-in-JS 性能优化
const StyledDiv = styled.div`
  color: ${props => props.color};
  
  /* 使用 CSS 变量减少动态样式 */
  --dynamic-color: ${props => props.color};
  color: var(--dynamic-color);
`;

// 提取静态样式
const staticStyles = css`
  font-size: 16px;
  padding: 10px;
`;
```

---

### 问题21：Tailwind CSS 等原子化 CSS 框架的原理是什么？优缺点？

**考察点**：对现代 CSS 架构的理解

**参考答案**：

**实现原理**：

```javascript
// 扫描 HTML/JS 文件，提取使用的类名
// 源代码
<div class="flex items-center p-4 bg-blue-500 text-white">
  Hello
</div>

// 生成 CSS（按需生成）
.flex { display: flex; }
.items-center { align-items: center; }
.p-4 { padding: 1rem; }
.bg-blue-500 { background-color: #3b82f6; }
.text-white { color: #fff; }

// 未使用的类名不会出现在最终 CSS 中
```

**配置示例**：

```javascript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
      },
      spacing: {
        '72': '18rem',
      }
    }
  },
  plugins: []
}
```

**工作原理**：

```javascript
// PostCSS 插件
const postcss = require('postcss');

module.exports = postcss.plugin('tailwindcss', () => {
  return (root, result) => {
    // 1. 解析配置文件
    const config = getConfig();
    
    // 2. 生成所有工具类
    const utilities = generateUtilities(config);
    
    // 3. 扫描源代码，找出使用的类名
    const usedClasses = scanSource(config.content);
    
    // 4. 只输出使用的类名
    const css = filterAndOutput(utilities, usedClasses);
    
    // 5. 添加到结果
    root.append(css);
  };
});
```

**优点**：

```css
/* 1. 开发效率高，无需命名 */
/* ❌ 传统 CSS */
.button-primary-large { }

/* ✅ Tailwind */
<button class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">

/* 2. 一致性（设计系统内置） */
/* 间距、颜色、字体都基于设计 tokens */

/* 3. 最终 CSS 体积小（按需生成） */
/* 生产环境只包含实际使用的样式 */

/* 4. 响应式简单 */
<div class="text-sm md:text-base lg:text-lg">
```

**缺点**：

```html
<!-- 1. HTML 冗长 -->
<div class="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
  <!-- 类名过长 -->
</div>

<!-- 2. 学习曲线 -->
<!-- 需要记忆大量类名 -->

<!-- 3. 动态样式困难 -->
<div class="text-${color}-500"> <!-- 无法直接动态拼接 -->
```

**解决方案**：

```jsx
// 1. 使用 @apply 提取重复样式
.btn-primary {
  @apply px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600;
}

// 2. 使用 clsx 或 classnames 管理条件类
import clsx from 'clsx';

<div className={clsx(
  'p-4 rounded-lg',
  variant === 'primary' && 'bg-blue-500 text-white',
  variant === 'secondary' && 'bg-gray-500 text-white',
  disabled && 'opacity-50 cursor-not-allowed'
)}>

// 3. 创建组件封装
const Button = ({ variant, children }) => {
  const classes = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600'
  };
  
  return (
    <button className={`px-4 py-2 rounded ${classes[variant]}`}>
      {children}
    </button>
  );
};
```

---

## 八、工程化架构（3题）

### 问题22：如何设计一个可维护的大型 CSS 架构？（CSS 方法论）

**考察点**：对 CSS 架构设计的理解

**参考答案**：

**BEM 方法论**：

```css
/* Block：独立组件 */
.card { }

/* Element：组件子元素（用 __ 连接） */
.card__title { }
.card__content { }
.card__footer { }

/* Modifier：组件变体（用 -- 连接） */
.card--large { }
.card--highlight { }
.card__title--small { }

/* 示例 */
<div class="card card--large">
  <h3 class="card__title card__title--small">标题</h3>
  <div class="card__content">内容</div>
  <div class="card__footer">
    <button class="button button--primary">按钮</button>
  </div>
</div>
```

**SMACSS 方法论**：

```scss
// 1. Base（基础样式）
body, h1, p { }

// 2. Layout（布局）
.l-header { }
.l-main { }
.l-sidebar { }

// 3. Module（模块）
.card { }
.nav { }

// 4. State（状态）
.is-active { }
.is-hidden { }

// 5. Theme（主题）
.theme-dark { }

// 示例
<header class="l-header">
  <nav class="nav nav--primary">
    <a class="nav__link is-active">首页</a>
  </nav>
</header>
```

**OOCSS 方法论**：

```css
/* 1. 结构与样式分离 */
/* 结构 */
.box { width: 100%; padding: 20px; }
/* 样式 */
.primary-bg { background: blue; }
.shadow { box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

/* 2. 容器与内容分离 */
/* 容器 */
.list { margin: 0; padding: 0; list-style: none; }
/* 内容 */
.list-item { border-bottom: 1px solid #ccc; }

/* 使用 */
<div class="box primary-bg shadow">内容</div>
```

**ITCSS 架构**：

```scss
// 1. Settings - 变量配置
$primary-color: #007bff;

// 2. Tools - 工具函数/mixins
@mixin flex-center { }

// 3. Generic - 重置/盒模型
* { box-sizing: border-box; }

// 4. Elements - 无类元素
h1, p { }

// 5. Objects - 结构类
.container { }
.grid { }

// 6. Components - UI 组件
.button { }
.card { }

// 7. Utilities - 工具类
.u-text-center { }
.u-mt-1 { }
```

**综合架构示例**：

```scss
// 1. 文件结构
styles/
├── settings/
│   ├── _variables.scss
│   └── _breakpoints.scss
├── tools/
│   ├── _mixins.scss
│   └── _functions.scss
├── generic/
│   ├── _reset.scss
│   └── _box-sizing.scss
├── elements/
│   ├── _typography.scss
│   └── _forms.scss
├── objects/
│   ├── _container.scss
│   └── _grid.scss
├── components/
│   ├── _button.scss
│   ├── _card.scss
│   └── _modal.scss
├── utilities/
│   ├── _spacing.scss
│   └── _colors.scss
└── main.scss

// 2. 命名规范（BEM + 前缀）
.c-button { }          // c- 组件
.o-container { }       // o- 对象
.u-text-center { }     // u- 工具
.is-active { }         // is- 状态
.js-click { }          // js- JavaScript 钩子

// 3. 作用域隔离
.card {
  // 组件私有样式
  &__title { }
  &--featured { }
}

// 4. 响应式断点
@include respond-to(mobile) {
  .card { }
}
```

---

### 问题23：如何实现 CSS 代码的按需加载和代码分割？

**考察点**：对 CSS 性能优化的理解

**参考答案**：

**动态导入 CSS**：

```javascript
// 1. 使用 import() 动态加载
button.addEventListener('click', async () => {
  await import('./styles/editor.css');
  // 加载编辑器样式
});

// 2. Webpack 配置
module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
};
```

**关键 CSS 内联**：

```html
<!-- 提取关键 CSS 内联 -->
<style>
  /* 首屏关键样式 */
  .hero { background: blue; }
  .nav { display: flex; }
</style>

<!-- 非关键 CSS 异步加载 -->
<link rel="preload" href="non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="non-critical.css"></noscript>
```

**使用 Critical CSS 工具**：

```javascript
// 使用 critical 库
const critical = require('critical');

critical.generate({
  base: 'dist/',
  src: 'index.html',
  dest: 'dist/index-critical.html',
  inline: true,
  minify: true,
  width: 1300,
  height: 900
});
```

**React 代码分割 + CSS**：

```jsx
// 使用 loadable-components 或 React.lazy
import loadable from '@loadable/component';

const Dashboard = loadable(() => import('./Dashboard'), {
  // CSS 会自动提取
  fallback: <div>Loading...</div>
});

// 配合 MiniCssExtractPlugin
// webpack.config.js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    })
  ]
};
```

**Vue 中的 CSS 代码分割**：

```vue
<style scoped>
/* 组件样式会自动提取到独立文件 */
</style>

<!-- 使用 webpackChunkName 命名 -->
<script>
export default {
  components: {
    HeavyComponent: () => import(/* webpackChunkName: "heavy" */ './HeavyComponent.vue')
  }
}
</script>
```

---

### 问题24：PostCSS 的原理是什么？常用的 PostCSS 插件有哪些？

**考察点**：对 PostCSS 工具链的理解

**参考答案**：

**PostCSS 原理**：

```javascript
// PostCSS 工作流程
源代码 → 解析 → AST → 插件处理 → 转换 → 生成 CSS

// 插件结构
module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'plugin-name',
    // 访问 AST 节点
    Rule(rule) {
      // 处理每条规则
    },
    Declaration(decl) {
      // 处理每个声明
    }
  };
};
```

**常用插件**：

```javascript
// 1. autoprefixer - 自动添加浏览器前缀
module.exports = {
  plugins: {
    autoprefixer: {
      overrideBrowserslist: ['> 0.5%', 'last 2 versions']
    }
  }
};

// 2. postcss-preset-env - 使用未来 CSS 特性
// 支持 CSS 变量、嵌套、自定义选择器等
:root {
  --primary-color: #007bff;
}
.button {
  background: var(--primary-color);
  @apply rounded-lg;
}

// 3. postcss-px-to-viewport - px 转 vw（移动端适配）
module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore']
    }
  }
};

// 4. postcss-import - 合并 @import
@import './base.css';
@import './components/button.css';

// 5. postcss-nested - 支持嵌套语法
.card {
  &__title { }
  &:hover { }
}

// 6. postcss-custom-properties - CSS 变量
:root {
  --color: red;
}
.element {
  color: var(--color);
}

// 7. cssnano - 压缩 CSS
module.exports = {
  plugins: {
    cssnano: {
      preset: 'default'
    }
  }
};

// 8. postcss-url - 处理 URL
@import url('./images/logo.png');
// 转换为 base64 或复制到输出目录
```

**自定义 PostCSS 插件**：

```javascript
// 创建自定义插件：添加根字体大小
module.exports = (opts = {}) => {
  return {
    postcssPlugin: 'postcss-root-unit',
    Declaration(decl) {
      // 处理 px 单位
      if (decl.value.includes('px')) {
        const value = parseFloat(decl.value);
        decl.value = `${value / 16}rem`;
      }
    }
  };
};

// 使用
module.exports = {
  plugins: [
    require('./plugins/postcss-root-unit')({
      rootValue: 16
    })
  ]
};
```

---

## 九、现代CSS特性（3题）

### 问题25：CSS 自定义属性（CSS Variables）的实现原理和优势？

**考察点**：对现代 CSS 特性的理解

**参考答案**：

**实现原理**：

```css
/* 1. 定义变量 */
:root {
  --primary-color: #007bff;
  --spacing-unit: 8px;
}

/* 2. 使用变量 */
.button {
  background-color: var(--primary-color);
  padding: var(--spacing-unit) calc(var(--spacing-unit) * 2);
}

/* 3. 变量继承（根据选择器级联） */
.card {
  --theme-color: blue;
}
.card--dark {
  --theme-color: darkblue; /* 覆盖 */
}
.card-title {
  color: var(--theme-color); /* 继承最近的变量值 */
}

/* 4. 回退值 */
.element {
  color: var(--undefined-color, red); /* 变量不存在时使用 red */
}
```

**运行时机制**：

```javascript
// 浏览器在运行时计算变量值
// 1. 解析 CSS，记录 var() 表达式
// 2. 构建依赖树（哪些元素使用哪些变量）
// 3. 变量变化时，只更新受影响的元素

// 动态修改变量
document.documentElement.style.setProperty('--primary-color', '#ff0000');

// 获取变量值
getComputedStyle(element).getPropertyValue('--primary-color');
```

**优势应用**：

```css
/* 1. 主题切换（无重新编译） */
.theme-light {
  --bg: #ffffff;
  --text: #333333;
}
.theme-dark {
  --bg: #1a1a1a;
  --text: #ffffff;
}
body {
  background: var(--bg);
  color: var(--text);
  transition: background 0.3s, color 0.3s;
}

/* 2. 响应式设计 */
:root {
  --spacing: 8px;
}
@media (min-width: 768px) {
  :root {
    --spacing: 12px;
  }
}

/* 3. 组件配置 */
.card {
  --card-padding: 16px;
  --card-border-radius: 8px;
  padding: var(--card-padding);
  border-radius: var(--card-border-radius);
}
.card--compact {
  --card-padding: 8px;
  --card-border-radius: 4px;
}

/* 4. JavaScript 交互 */
.progress {
  --progress: 0%;
  width: var(--progress);
  background: blue;
  transition: width 0.2s;
}
```

**性能优化**：

```css
/* 使用 CSS 变量减少 JavaScript 触发的重排 */
/* ❌ 直接操作样式 */
element.style.width = `${percent}%`;

/* ✅ 操作 CSS 变量 */
element.style.setProperty('--progress', `${percent}%`);

/* 配合 calc 实现复杂计算 */
.slider {
  --value: 50;
  width: calc(var(--value) * 1%);
}
```

---

### 问题26：CSS Grid 和 Flex 的现代布局技巧有哪些？

**考察点**：对现代布局的掌握程度

**参考答案**：

**高级 Grid 技巧**：

```css
/* 1. 自动响应式网格 */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
/* auto-fit：自动填充列，最小 250px，最大 1fr */

/* 2. 卡片式布局（自动对齐） */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(100px, auto);
  gap: 20px;
}

/* 3. 圣杯布局（完整） */
.holy-grail {
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 250px 1fr 250px;
  min-height: 100vh;
}
.header { grid-column: 1 / -1; }
.footer { grid-column: 1 / -1; }

/* 4. 命名区域 */
.page {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main ads"
    "footer footer footer";
  grid-template-columns: 200px 1fr 200px;
}
.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.ads { grid-area: ads; }
.footer { grid-area: footer; }

/* 5. 瀑布流（Masonry） */
.masonry {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-flow: dense; /* 紧凑填充 */
}
.masonry-item {
  break-inside: avoid;
}
.masonry-item-large {
  grid-column: span 2;
  grid-row: span 2;
}
```

**高级 Flex 技巧**：

```css
/* 1. 自动换行 + 间距 */
.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.flex-item {
  flex: 1 1 calc(33.333% - 20px);
  min-width: 200px;
}

/* 2. 导航栏（自动分布） */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-links {
  display: flex;
  gap: 20px;
}

/* 3. 底部对齐 */
.card {
  display: flex;
  flex-direction: column;
}
.card-content {
  flex: 1; /* 内容区占满，底部自动对齐 */
}
.card-footer {
  margin-top: auto;
}

/* 4. 居中技巧 */
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

/* 5. 媒体对象（图片+文字） */
.media {
  display: flex;
  gap: 20px;
}
.media-image {
  flex-shrink: 0;
  width: 100px;
}
.media-content {
  flex: 1;
}
```

**混合布局技巧**：

```css
/* 1. 复杂仪表盘 */
.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
.sidebar {
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
}
.main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

/* 2. 响应式切换 */
.container {
  display: flex;
  gap: 20px;
}
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
.sidebar {
  width: 300px;
}
@media (max-width: 768px) {
  .sidebar {
    width: auto;
  }
}

/* 3. 粘性侧边栏 */
.layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 30px;
  align-items: start;
}
.sidebar {
  position: sticky;
  top: 20px;
}
```

---

### 问题27：CSS Container Queries（容器查询）的原理和使用场景？

**考察点**：对 CSS 新特性的理解

**参考答案**：

**Container Queries 原理**：

```css
/* 1. 定义容器 */
.card-container {
  container-type: inline-size;
  container-name: card;
}

/* 2. 使用容器查询 */
@container card (min-width: 500px) {
  .card {
    display: flex;
    gap: 20px;
  }
  .card-image {
    width: 200px;
  }
}

/* 3. 简写 */
.card-container {
  container: card / inline-size;
}
```

**实际应用**：

```css
/* 1. 响应式组件（基于父容器宽度） */
.widget {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .widget {
    display: flex;
    align-items: center;
  }
  .widget-icon {
    width: 60px;
  }
  .widget-content {
    flex: 1;
  }
}

@container (max-width: 399px) {
  .widget {
    text-align: center;
  }
  .widget-icon {
    margin-bottom: 12px;
  }
}

/* 2. 卡片布局自适应 */
.card-list {
  container-type: inline-size;
}
.card {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .card {
    display: flex;
  }
}
@container (min-width: 500px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

/* 3. 侧边栏自适应 */
.sidebar {
  container-type: inline-size;
}
.menu-item {
  display: flex;
  align-items: center;
  gap: 12px;
}
.menu-item-text {
  transition: opacity 0.2s;
}

@container (max-width: 200px) {
  .menu-item-text {
    opacity: 0;
    width: 0;
    overflow: hidden;
  }
  .menu-item {
    justify-content: center;
  }
}
```

**与 Media Queries 的区别**：

| 特性 | Media Queries | Container Queries |
|------|---------------|-------------------|
| 参考系 | 视口 | 父容器 |
| 适用场景 | 页面布局 | 组件内部 |
| 复用性 | 低（依赖视口） | 高（组件独立） |
| 浏览器支持 | 全面 | 现代浏览器 |

**实战示例**：

```html
<!-- 同一组件在不同容器中自动适配 -->
<div class="sidebar" style="width: 200px">
  <div class="product-card">...</div>
</div>
<div class="main" style="width: 800px">
  <div class="product-card">...</div>
</div>
```

```css
.product-card {
  container-type: inline-size;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

@container (min-width: 400px) {
  .product-card {
    flex-direction: row;
  }
  .product-image {
    width: 150px;
  }
}
```

---

## 十、浏览器渲染与优化（3题）

### 问题28：浏览器渲染 CSS 的过程是怎样的？如何优化渲染性能？

**考察点**：对浏览器渲染机制的理解

**参考答案**：

**CSS 渲染过程**：

```
1. 下载 HTML → 解析 HTML → DOM 树
2. 下载 CSS → 解析 CSS → CSSOM 树
3. 合并 DOM + CSSOM → Render Tree
4. Layout（计算位置和大小）
5. Paint（填充像素）
6. Composite（合成图层）
```

**CSS 阻塞渲染**：

```html
<!-- CSS 会阻塞渲染（避免 FOUC） -->
<link rel="stylesheet" href="styles.css">

<!-- 关键 CSS 内联 -->
<style>
  /* 首屏关键样式 */
  .hero { background: blue; }
</style>

<!-- 非关键 CSS 异步加载 -->
<link rel="preload" href="non-critical.css" as="style" onload="this.rel='stylesheet'">
```

**优化策略**：

```css
/* 1. 避免使用 @import（串行加载） */
/* ❌ 不推荐 */
@import url('style.css');

/* ✅ 使用 link */
<link rel="stylesheet" href="style.css">

/* 2. 减少选择器复杂度 */
/* ❌ 复杂选择器 */
.container .sidebar .widget .button span { }

/* ✅ 简化 */
.button-text { }

/* 3. 避免使用昂贵属性 */
/* 昂贵：box-shadow, border-radius, filter, backdrop-filter */
.element {
  /* 考虑使用替代方案 */
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 小阴影影响小 */
}

/* 4. 使用 transform 和 opacity 做动画 */
.animate {
  transition: transform 0.3s, opacity 0.3s;
}

/* 5. 使用 will-change 提示 */
.will-change {
  will-change: transform;
}

/* 6. 减少重排 */
/* ❌ 触发布局 */
const width = element.offsetWidth;
element.style.width = width + 10 + 'px';

/* ✅ 批量操作 */
const width = element.offsetWidth;
// 使用 CSS 变量或 class
element.classList.add('resized');
```

**关键渲染路径优化**：

```html
<!-- 1. 关键 CSS 内联 -->
<style>
  /* 内联首屏 CSS */
  .header { background: #fff; }
  .hero { padding: 20px; }
</style>

<!-- 2. 预加载关键资源 -->
<link rel="preload" href="critical-font.woff2" as="font" crossorigin>

<!-- 3. 预连接第三方域名 -->
<link rel="preconnect" href="https://api.example.com">

<!-- 4. 异步加载非关键 CSS -->
<link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="styles.css"></noscript>

<!-- 5. 推迟非关键 CSS -->
<link rel="stylesheet" href="print.css" media="print">
```

---

### 问题29：如何实现深色模式？有哪些方案？

**考察点**：对现代 CSS 特性的应用

**参考答案**：

**方案1：CSS 媒体查询（prefers-color-scheme）**

```css
/* 默认浅色 */
:root {
  --bg: #ffffff;
  --text: #333333;
  --border: #e5e5e5;
}

/* 深色模式 */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1a1a1a;
    --text: #ffffff;
    --border: #333333;
  }
}

body {
  background: var(--bg);
  color: var(--text);
}
```

**方案2：手动切换（CSS 变量 + class）**

```css
/* 浅色主题 */
:root,
.theme-light {
  --bg: #ffffff;
  --text: #333333;
  --primary: #007bff;
}

/* 深色主题 */
.theme-dark {
  --bg: #1a1a1a;
  --text: #ffffff;
  --primary: #66b0ff;
}

body {
  background: var(--bg);
  color: var(--text);
}
```

```javascript
// 切换主题
function setTheme(theme) {
  document.documentElement.className = `theme-${theme}`;
  localStorage.setItem('theme', theme);
}

// 检测系统主题
const darkModeMedia = window.matchMedia('(prefers-color-scheme: dark)');
const systemTheme = darkModeMedia.matches ? 'dark' : 'light';
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme || systemTheme);

// 监听系统主题变化
darkModeMedia.addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});
```

**方案3：CSS 滤镜（不推荐，性能差）**

```css
.dark-mode {
  filter: invert(1) hue-rotate(180deg);
}
```

**完整实现**：

```html
<button id="theme-toggle">切换主题</button>
```

```javascript
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }
  
  init() {
    this.applyTheme(this.theme);
    this.setupToggle();
    this.watchSystem();
  }
  
  applyTheme(theme) {
    document.documentElement.className = `theme-${theme}`;
    localStorage.setItem('theme', theme);
    this.theme = theme;
    
    // 更新 meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    const colors = {
      light: '#ffffff',
      dark: '#1a1a1a'
    };
    metaThemeColor.setAttribute('content', colors[theme]);
  }
  
  toggle() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }
  
  setupToggle() {
    const btn = document.getElementById('theme-toggle');
    btn.addEventListener('click', () => this.toggle());
  }
  
  watchSystem() {
    const darkModeMedia = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMedia.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        this.applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

new ThemeManager();
```

**图片适配**：

```html
<!-- 使用 picture 适配深色模式图片 -->
<picture>
  <source srcset="image-dark.png" media="(prefers-color-scheme: dark)">
  <img src="image-light.png" alt="responsive">
</picture>
```

```css
/* 或使用 CSS 变量 */
.card {
  background-image: var(--card-bg);
}
.theme-light {
  --card-bg: url('light-bg.png');
}
.theme-dark {
  --card-bg: url('dark-bg.png');
}
```

---

### 问题30：如何实现平滑滚动和滚动行为优化？

**考察点**：对滚动性能的理解

**参考答案**：

**CSS 平滑滚动**：

```css
/* 全局平滑滚动 */
html {
  scroll-behavior: smooth;
}

/* 局部平滑滚动 */
.scroll-container {
  scroll-behavior: smooth;
  overflow-y: auto;
}
```

**滚动边界和效果**：

```css
/* 滚动边界效果（iOS 风格） */
.scroll-container {
  overscroll-behavior: contain; /* 阻止滚动传播 */
  -webkit-overflow-scrolling: touch; /* iOS 惯性滚动 */
}

/* 滚动快照 */
.snap-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}
.snap-item {
  scroll-snap-align: start;
  height: 100vh;
}

/* 滚动边距 */
.scroll-margin {
  scroll-margin-top: 80px; /* 固定头部时滚动偏移 */
}
```

**滚动锚点定位**：

```javascript
// 平滑滚动到元素
function scrollToElement(element, offset = 0) {
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

// 滚动到指定位置
function scrollToPosition(top, left = 0) {
  window.scrollTo({
    top,
    left,
    behavior: 'smooth'
  });
}

// 滚动到锚点（带偏移）
const hash = window.location.hash;
if (hash) {
  const element = document.querySelector(hash);
  if (element) {
    setTimeout(() => {
      scrollToElement(element, 80);
    }, 100);
  }
}
```

**滚动性能优化**：

```javascript
// 1. 使用 requestAnimationFrame
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      // 滚动处理逻辑
      handleScroll();
      ticking = false;
    });
    ticking = true;
  }
});

// 2. 使用 passive 事件监听
window.addEventListener('scroll', handleScroll, { passive: true });

// 3. 使用 Intersection Observer（懒加载）
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // 元素进入视口
      loadContent(entry.target);
    }
  });
}, {
  rootMargin: '50px' // 提前加载
});

document.querySelectorAll('.lazy').forEach(el => {
  observer.observe(el);
});

// 4. 滚动进度监听
function createScrollProgress() {
  const progressBar = document.querySelector('.progress-bar');
  
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    
    progressBar.style.transform = `scaleX(${progress / 100})`;
  });
}
```

**实际应用场景**：

```javascript
// 1. 回到顶部
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// 2. 滚动加载更多（无限滚动）
let isLoading = false;
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const scrollHeight = document.documentElement.scrollHeight;
  const clientHeight = window.innerHeight;
  
  if (scrollTop + clientHeight >= scrollHeight - 100 && !isLoading) {
    isLoading = true;
    loadMore().finally(() => {
      isLoading = false;
    });
  }
});

// 3. 滚动方向检测
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const direction = scrollTop > lastScrollTop ? 'down' : 'up';
  
  if (direction === 'down') {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  
  lastScrollTop = scrollTop;
});

// 4. 视差滚动优化
class Parallax {
  constructor() {
    this.elements = document.querySelectorAll('[data-parallax]');
    this.init();
  }
  
  init() {
    window.addEventListener('scroll', () => {
      requestAnimationFrame(() => this.update());
    });
  }
  
  update() {
    const scrollY = window.scrollY;
    this.elements.forEach(el => {
      const speed = el.dataset.parallax || 0.5;
      const y = scrollY * speed;
      el.style.transform = `translateY(${y}px)`;
    });
  }
}
```

---

以上30个CSS面试问题涵盖了从基础到高级的各个维度，每个答案都提供了详细的原理分析和实际应用场景。这些问题不仅考察候选人对CSS知识的掌握程度，更重要的是考察在实际项目中解决问题的能力。