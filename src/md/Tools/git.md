# Git

1. Git是分布式的

每个开发者的仓库都包含整个项目的完整历史，包括所有分支、提交历史、标签等元数据。
这意味着，即使远程服务器不可用，开发者仍然可以在本地执行所有版本控制操作（如提交、查看历史、创建分支等）。
因为是分布式的，Git不会出现单点故障，任何一个本地仓库都可完全恢复整个项目

2. Git把内容按元数据存储

每个提交数据包含以下元数据：
- 提交信息：描述这次提交的内容，通常由开发者提供，说明修改的目的。
- 作者信息：包括作者的名称和电子邮件地址，记录谁进行了这次提交。
- 时间戳：记录提交的日期和时间，方便追踪项目进展。
- 父提交：指向前一次提交（或多次提交，在合并时），形成一条提交历史链。

3. Git 元数据的不可变性

在 Git 中，所有对象都是不可变的，这种不可变性是通过 SHA-1 哈希实现的。
每个对象的内容通过 SHA-1 哈希计算得出一个唯一的 ID（例如 a4f568c...），这个哈希值在对象内容发生变化时也会随之改变。
这种设计保证了数据的完整性，因为任何对文件内容的修改都会导致相应对象的哈希值变化，Git 会检测到这一变化。

## Git 配置
最常用的配置项是设置git提交的用户信息
```
git config --global user.name "runoob"
git config --global user.email test@runoob.com
```
当去掉--global时，只对当前仓库生效。

查看当前git的配置
```
$ git config --list
http.postbuffer=2M
user.name=runoob
user.email=test@runoob.com
...
```
在这里有时候会看到重复的变量名，那是因为git配置的变量会存在多个文件中，按照优先级取值，
当多个文件存在同一个变量时会出现多个重复的变量名（比如 /etc/gitconfig 和 ~/.gitconfig），不过最终 Git 实际采用的是最后一个。

生成ssh密钥
如果你需要通过 SSH 进行 Git 操作，可以生成 SSH 密钥并添加到你的 Git 托管服务（如 GitHub、GitLab 等）上。
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"

## git 常用的概念
- Branch 分支其实就是指向一个提交的引用，方便项目开发和管理
- Tag 可以理解成一个提交的标记
- Commit 提交是对代码的快照，包含文件的修改，提交信息，作者信息和时间戳。
- Remote Repository 托管在网络上的仓库
- Rebase 变基是将一个分支的更改应用到另一个分支的基础上，有助于保持提交历史的线性

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
一般用于想合并一些最新提交的时候
```
git reset --soft <commit>
```
--hard：重置 HEAD 到指定的提交，暂存区和工作目录都重置。
一般用于完全放弃式的回退，不建议使用，可以使用soft模式然后git stash来实现
```
git reset --hard <commit>
```

git revert 撤销某次提交，但不会改变提交历史，只是将文件内容回退到那次提交撤销后的状态，然后创建新的提交来进行修改
一般用于回滚后有做修改的内容

Git Flow 主要由以下几类分支组成：master、develop、feature、release、hotfix。这个不多说了

Git Rebase：命令用于将一个分支上的更改移到另一个分支之上。它可以帮助保持提交历史的线性，减少合并时的冲突。

交互式变基：
git rebase -i <commit>

交互式变基允许你在变基过程中编辑、删除或合并提交。常用选项包括：

删除指定文件的版本跟踪
```
git rm --cached a.txt // 删除a.txt文件的跟踪并保留本地文件
git rm --f a.txt //删除a.txt 文件的跟踪并删除本地文件
```

pick：保留提交
reword：修改提交信息
edit：编辑提交
squash：将当前提交与前一个提交合并
fixup：将当前提交与前一个提交合并，不保留提交信息
drop：删除提交

git remote add [shortname] [url]