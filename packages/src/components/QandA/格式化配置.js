{
  /*格式化文件对应插件：
   主要是两步，一步是用格式化插件格式化对应的文件；
   另一步让格式化后的代码能通过代码检验工具。
   prettyhtml格式化HTML；prettier格式化css/less/scss/postcss/ts；
   stylus-supremacy格式化stylus；
   vscode自带格式化插件格式化js；
   vetur格式化.vue文件；
   ESlint进行代码检验。
   */

  /*格式化思路和注意事项。
   注意格式化的代码能符合ESlint代码检验。
   1.用vetur设置默认格式化工具。格式化.vue文件
   2.用ESlint设置保存时修复ESlint错误的功能。
   3.用prettier格式化css；去除语法结尾的分号，使用单引号替换双引号。
   4.保存时自动格式化。
   */
  "workbench.colorTheme": "Dracula Soft",
  "editor.fontSize": 18,

  // 默认使用prettier格式化支持的文件
  "editor.defaultFormatter": "esbenp.prettier-vscode",

  "vetur.format.defaultFormatter.html": "prettyhtml",
  "vetur.format.defaultFormatter.css": "prettier",
  "vetur.format.defaultFormatter.postcss": "prettier",
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
  // "vetur.format.defaultFormatter.js": "prettier",
  "vetur.format.defaultFormatter.ts": "prettier",
  "vetur.format.defaultFormatter.sass": "sass-formatter",
  "open-in-browser.default": "Chrome",

  // 将vetur的js格式化工具指定为vscode自带的
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  // 移除js语句的分号
  // "javascript.format.semicolons": "remove",
  // 在函数名后面加上括号，类似这种形式 foo () {}
  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,

  // eslint配置项，保存时自动修复错误。
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },

  // 指定 *.vue 文件的格式化工具为vetur
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  // 指定 *.js 文件的格式化工具为vscode自带
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },

  "vetur.format.defaultFormatterOptions": {
    "JS-beautify-HTML": {
      // JS-beautify-HTML的设置在这里
      "wrap_attributes": "force-aligned"
    },
    " prettyhtml": {
      "printWidth'": 100, // 每一行不超过100个字符
      "singleQuote": false, // 不用单引号
      "wrapAttributes": false,
      "sortAttributes": true
    },
    "prettier": {
      // 去掉代码结尾的分号
      "semi": false, //不加分号
      "singleQuote": true, //用单引号
      // #让prettier使用eslint的代码格式进行校验
      "eslintIntegration": true,
      "arrowParens": "always"
    }
  },

  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,

  // 保存时自动格式化代码
  // "editor.formatOnSave": true,

  //可选项。stylus的格式化配置以及sass格式化配置。
  // 格式化stylus, 需安装Manta's Stylus Supremacy插件
  "stylusSupremacy.insertBraces": false, // 是否插入大括号
  "stylusSupremacy.insertColons": false, // 是否插入冒号
  "stylusSupremacy.insertSemicolons": false, // 是否插入分号
  "stylusSupremacy.insertNewLineAroundImports": false, // import之后是否换行
  "stylusSupremacy.insertNewLineAroundBlocks": false,
  // 启用调试模式。
  "sass.format.debug": false,
  // 删除空格
  "sass.format.deleteEmptyRows": true,
  // 删除最后一个空格。
  "sass.format.deleteWhitespace": true,
  // 将 scss / css 转换为 sass。
  "sass.format.convert": true,
  // 如果 属性:值 为true,则始终设置为1.
  "sass.format.setPropertySpace": true,

  // 去除markDown的黄色波浪线
  "markdownlint.config": {
      "MD001": false,
      "MD002": false,
      "MD003": false,
      "MD004": false,
      "MD005": false,
      "MD006": false,
      "MD007": false,
      "MD008": false,
      "MD009": false,
      "MD010": false,
      "MD011": false,
      "MD012": false,
      "MD013": false,
      "MD014": false,
      "MD015": false,
      "MD016": false,
      "MD017": false,
      "MD018": false,
      "MD019": false,
      "MD020": false,
      "MD021": false,
      "MD022": false,
      "MD023": false,
      "MD024": false,
      "MD025": false,
      "MD026": false,
      "MD027": false,
      "MD028": false,
      "MD029": false,
      "MD030": false,
      "MD031": false,
      "MD032": false,
      "MD033": false,
      "MD034": false,
      "MD035": false,
      "MD036": false,
      "MD037": false,
      "MD038": false,
      "MD039": false,
      "MD040": false,
      "MD041": false,
      "MD042": false,
      "MD043": false,
      "MD044": false,
      "MD045": false,
      "MD046": false,
      "MD047": false,
    }
  /*格式化插件：
   //vetur：代码高亮、emmet语法支持、语法错误校验检查、代码提醒、格式化vue。
   vetur集成了prettier，让.vue文件中不同的块使用不同的格式化方案，
   <template> 调用 html 格式化工具，
   <script> 调用 JavaScript 格式化工具，
   <style> 使用style格式化工具。

   //ESlint：新版的ESlint支持了对.vue文件的校验。

   //prettyhtml：为纯HTML模板等提供通用格式化的工具。
   //prettier：格式化工具，用于css/less/scss/postcss/ts
   //stylus-supremacy：用于格式化stylus文件的node.js模块。
   //js的格式化工具用vscode自带的。
   Prettier不支持在函数名后面加上括号。这点和ESlint冲突了。

   //EditorConfig：主要是用于让 vscode 支持.editorconfig 文件。
   .editorconfig 文件中的设置用于在基本代码库中维持一致的编码风格和设置，
   例如缩进样式、选项卡宽度、行尾字符以及编码等。
   EditorConfig 是让代码创建前保持规范，
   Prettier 是让代码保存后保持规范
   */
}