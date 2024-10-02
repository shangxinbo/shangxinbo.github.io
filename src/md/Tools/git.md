# Git
Git的特点：
1. Git是分布式的
每个开发者的仓库都包含整个项目的完整历史，包含所有分支、提交历史、标签等元数据。这意味着，即使远程服务器不可用，开发者仍然可以在本地执行所有版本控制操作（如提交、查看历史、创建分支等）。

因为是分布式的，Git不会出现单点故障，任何一个本地仓库都可完全恢复整个项目
2. Git把内容按元数据存储

每个提交数据包含以下元数据：
- 提交信息：描述这次提交的内容，通常由开发者提供，说明修改的目的。
- 作者信息：包括作者的名称和电子邮件地址，记录谁进行了这次提交。
- 时间戳：记录提交的日期和时间，方便追踪项目进展。
- 父提交：指向前一次提交（或多次提交，在合并时），形成一条提交历史链。

Git 元数据的不可变性

在 Git 中，所有对象都是不可变的。一旦创建，Blob、Tree 和 Commit 对象的内容就无法更改。这种不可变性是通过 SHA-1 哈希实现的：

每个对象的内容通过 SHA-1 哈希计算得出一个唯一的 ID（例如 a4f568c...），这个哈希值在对象内容发生变化时也会随之改变。

这种设计保证了数据的完整性，因为任何对文件内容的修改都会导致相应对象的哈希值变化，Git 会检测到这一变化。

git 分支其实就是指向一个提交的引用，方便项目开发和管理


Git 配置

```
git config --global user.name "runoob"
git config --global user.email test@runoob.com
```
去掉--global只对当前仓库生效
```
$ git config --list
http.postbuffer=2M
user.name=runoob
user.email=test@runoob.com
```

有时候会看到重复的变量名，那就说明它们来自不同的配置文件（比如 /etc/gitconfig 和 ~/.gitconfig），不过最终 Git 实际采用的是最后一个。

生成ssh密钥
如果你需要通过 SSH 进行 Git 操作，可以生成 SSH 密钥并添加到你的 Git 托管服务（如 GitHub、GitLab 等）上。
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"

## git rm 将文件从暂存区和工作区移除 


git submodule


git 分支管理
```
git branch 
git branch -r 
git branch -a
```

回复和回退

git checkout 切换分支或恢复文件到指定提交。
```
git checkout abc123 -- file.txt
```
分离头指针状态是指当前的HEAD指针不指向任何分支的最新提交，而是指向某个特定的提交



git reset  可以更改当前分支的提交历史，它有三种主要模式：--soft、--mixed 和 --hard。

--soft：只重置 HEAD 到指定的提交，暂存区和工作目录保持不变。
```
git reset --soft <commit>
```

--mixed（默认）：重置 HEAD 到指定的提交，暂存区重置，但工作目录保持不变。

git reset --mixed <commit>
--hard：重置 HEAD 到指定的提交，暂存区和工作目录都重置。

git reset --hard <commit>