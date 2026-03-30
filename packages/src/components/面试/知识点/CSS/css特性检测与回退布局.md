## 二、使用 `@supports` 进行特性检测

`@supports` 是 CSS 原生特性检测方法，可以为支持特定属性的浏览器提供增强样式，同时为不支持的浏览器保留回退方案。

### 1. 基础语法

```css
/* 所有浏览器都会应用的基础样式（回退方案） */
.container {
  display: inline-block;
  margin: -2px; /* 修复 inline-block 间隙 */
}

/* 检测到支持 Flexbox 且支持 gap 时，覆盖为现代布局 */
@supports (display: flex) and (gap: 1rem) {
  .container {
    display: flex;
    gap: 1rem;
    margin: 0;
  }
}
```

### 2. Flexbox 回退实践

```css
/* ===== 回退布局：inline-block ===== */
.card-list {
  font-size: 0; /* 消除 inline-block 空白间隙 */
  text-align: center;
}

.card-item {
  display: inline-block;
  vertical-align: top;
  width: calc(33.33% - 20px);
  margin: 10px;
  font-size: 16px; /* 重置字号 */
}

/* ===== 现代布局：Flexbox ===== */
@supports (display: flex) {
  .card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    font-size: 0; /* 可选，不影响 flex 子项 */
  }
  
  .card-item {
    width: calc(33.33% - 20px);
    margin: 0; /* gap 已处理间距 */
  }
}
```

### 3. Grid 回退实践

Grid 在 IE 中几乎不可用，更适合采用 **分层渐进增强** 策略：

```css
/* ===== 回退布局：浮动 ===== */
.grid-container {
  margin: 0 -10px; /* 负边距抵消列内边距 */
}

.grid-item {
  float: left;
  width: 25%;
  padding: 0 10px;
  box-sizing: border-box;
}

/* 清除浮动 */
.grid-container::after {
  content: '';
  display: table;
  clear: both;
}

/* ===== 现代布局：Grid ===== */
@supports (display: grid) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 0; /* 覆盖回退样式 */
  }
  
  .grid-item {
    float: none; /* 重置浮动 */
    width: auto;
    padding: 0;
  }
}
```

---

## 三、更精细的特性检测

有时需要针对具体属性进行检测，而非仅检测 `display: flex`：

```css
/* 检测 gap 支持（IE 不支持） */
@supports (gap: 10px) {
  .flex-gap {
    gap: 20px;
  }
}

/* 检测 flex-wrap 支持 */
@supports (flex-wrap: wrap) {
  .flex-wrap {
    flex-wrap: wrap;
  }
}
```

---

## 四、结合 JS 增强检测（可选）

对于复杂的回退逻辑，可以使用 JavaScript 辅助：

```javascript
// 检测 Flexbox gap 支持
const supportsFlexGap = () => {
  const flex = document.createElement('div')
  flex.style.display = 'flex'
  flex.style.flexDirection = 'column'
  flex.style.gap = '1px'
  flex.innerHTML = '<div></div><div></div>'
  document.body.appendChild(flex)
  const isSupported = flex.scrollHeight === 1
  document.body.removeChild(flex)
  return isSupported
}

if (!supportsFlexGap()) {
  // 为不支持 gap 的浏览器添加 margin 回退
  document.querySelectorAll('.flex-item').forEach(el => {
    el.style.marginBottom = '20px'
  })
}
```

---

## 五、完整示例：响应式卡片网格

```html
<div class="cards">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
```

```css
/* 基础回退：inline-block */
.cards {
  font-size: 0;
  text-align: center;
}

.card {
  display: inline-block;
  vertical-align: top;
  width: calc(50% - 20px);
  margin: 10px;
  font-size: 1rem;
  box-sizing: border-box;
}

/* 中等屏幕回退 */
@media (min-width: 768px) {
  .card {
    width: calc(33.33% - 20px);
  }
}

/* 现代 Flexbox 增强 */
@supports (display: flex) and (flex-wrap: wrap) {
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .card {
    width: calc(50% - 20px);
    margin: 0;
  }
  
  @media (min-width: 768px) {
    .card {
      width: calc(33.33% - 20px);
    }
  }
}

/* 现代 Grid 增强（覆盖 Flexbox） */
@supports (display: grid) {
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .card {
    width: auto;
  }
}
```

---

## 六、工程化建议

1. **分层 CSS 组织**  
   将回退样式放在文件前部，`@supports` 增强样式放在后部，利用 CSS 层叠特性。

2. **使用 PostCSS 自动化**  
   - `postcss-preset-env` 可自动添加回退  
   - 或配合 `postcss-flexbugs-fixes` 处理 Flexbox 兼容

3. **BrowserStack 真实测试**  
   IE 11 的渲染差异较大，建议在真实环境验证回退效果。

4. **决策参考**  
   - 如果项目 **需要支持 IE 11**，优先用 Flexbox + `@supports` 回退  
   - Grid 建议仅作为增强，IE 下完全回退到浮动或 Flexbox  
   - 若 **放弃 IE**，可直接使用 Grid + `gap`，无需复杂回退

---

## 总结

| 技术 | IE 10/11 支持情况 | 推荐策略 |
|------|------------------|---------|
| Flexbox | 部分支持（无 gap, 部分 bug） | 用 `@supports (display: flex) and (gap: 1rem)` 检测，回退到 `inline-block` 或 `margin` |
| Grid | 基本不支持（仅有废弃的 `-ms-grid`） | 完全回退到浮动或 Flexbox，用 `@supports (display: grid)` 增强 |

通过 `@supports` + 合理的回退布局，可以在保证现代浏览器体验的同时，让旧浏览器依然拥有可用的布局结构。