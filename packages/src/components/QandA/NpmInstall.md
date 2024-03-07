# npm install 或 npm install --legacy-peer-deps
`-f 或 --force`参数将强制npm获取远程资源，即使磁盘上存在本地副本也是如此。
`--legacy-peer-deps`安装时忽略所有peerDependencies，其样式为npm版本4到版本6。
在新版本的npm（v7）中，默认情况下，`npm install`当遇到冲突的`peerDependencies`时将失败。以前不是那样的。
两者之间的区别如下：
`--legacy-peer-deps`：安装时忽略所有`peerDependencies`，采用npm版本4到版本6的样式。
`--strict-peer-deps`：遇到任何冲突的`peerDependencies`时，失败并中止安装过程。默认情况下，`npm`仅会因根项目的直接依赖关系而导致的`peerDependencies`冲突而崩溃。
## 那么`npm`：何时使用`--force`和`--legacy-peer-deps？`
`--force` 会无视冲突，并强制获取远端`npm`库资源，即使本地有资源也会覆盖掉。
`--legacy-peer-deps`：安装时忽略所有`peerDependencies`，忽视依赖冲突，采用`npm`版本4到版本6的样式去安装依赖，已有的依赖不会覆盖。
**建议用--legacy-peer-deps比较保险一点**。

# 删除node_modules文件夹
- 使用rimraf可以完全删除目标文件夹（包括目录和文件），比普通的rm -rf node_modules/ 更可靠
```
npm install -g rimraf
rimraf node_modules

清空npm代理
npm config rm proxy
npm config rm https-proxy
设置淘宝镜像
npm config set registry http://registry.npm.taobao.org
```

# 查看项目中的node版本
    在package-lock.json中搜寻@types/node

# nvm常用命令
    1、nvm list  查看已安装管理的node版本
    2、nvm list available  查看哪些node版本是可以安装的
    3、nvm install latest  安装最新的LTS版本
    4、nvm install 20.8.8  安装指定版本
    5、nvm use 20.8.8  切换到指定版本
    6、nvm uninstall 20.8.8 删除已安装版本

# git提交规范

    feat: 新功能（feature）
    fix: 修补bug
    docs: 文档（documentation）
    style: 格式（不影响代码运行的变动）
    refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
    chore: 构建过程或辅助工具的变动
    revert: 撤销，版本回退
    perf: 性能优化
    test：测试
    improvement: 改进
    build: 打包
    ci: 持续集成
