# git提交规范

    feat: 新功能（feature）
    fix: 修补bug
    docs: 文档（documentation）
    style: 格式（不影响代码运行的变动）
    refactor: 已有功能重构（即不是新增功能，也不是修改bug的代码变动）
    chore: 构建过程或辅助工具的变动
    revert: 撤销，版本回退
    perf: 性能优化
    test：测试
    improvement: 改进
    build: 打包
    ci: 持续集成

# git add

    git add *:添加所有文件到暂存区
    git add .:添加所有文件到暂存区
    git add -u .:表示将已跟踪文件中的修改和删除的文件添加到暂存区，不包括新增的文件
    git add -A .:表示将已跟踪的文件的修改和删除以及新增的未跟踪的文件都添加到暂存区
    git add * .vue:添加某个文件类型到暂存区，比如所有的vue文件
    git add index/:添加整个文件夹到暂存区，比如index文件夹
    git add index/index.html 添加某个文件夹中的的某个文件到暂存区，比如index下的index.html

# git commit

    git commit -m 'xxxxxx':将所有暂存区文件提交到