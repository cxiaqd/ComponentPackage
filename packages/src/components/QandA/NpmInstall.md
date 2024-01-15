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
