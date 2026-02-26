## Git
```
"The stupid content tracker" 
- Linus Torvalds
```
## git clone "repo-url"

Clones a remote repository into local machine.

```bash
% git clone https://github.com//https://github.com/findmike/b00tc4mp-202601
```
## git status

Shows the status of files in the current path.

```bash
% git status
On branch feature/playground
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/michael-balo/playground/

nothing added to commit but untracked files present (use "git add" to track)
```

## git status -u

Track the changes in your project, specifically allows you to control how untracked files are displayed in your path.

```bash
% git status -u
On branch feature/playground
Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/michael-balo/playground/.gitkeep

nothing added to commit but untracked files present (use "git add" to track)
```
## git pull

Used to download content from a remote repository and immediately update the local repository to match that content.

```bash
PS C:\Users\Mike\workspace\b00tc4mp-202601> % git pull
```

## git commit

Will save all changes made in the staging area, along with a brief description from the user (for that reason you must use the -m 'with the description')

```bash
git commit -m 'add playground folder'
[feature/playground 40d8c1f] add playground folder
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 staff/michael-balo/playground/.gitkeep
 ```

## git push

The last step you must use to download content from a local repository to a remote one.

```bash
git push
fatal: The current branch feature/playground has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin feature/playground

To have this happen automatically for branches without a tracking
upstream, see 'push.autoSetupRemote' in 'git help config'.
```

## git push -u origin "branch-name"

DUDA SOBRE LA DEFINICION EXACTA

```bash
git push -u origin feature/playground
Enumerating objects: 7, done.
Counting objects: 100% (7/7), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (4/4), 387 bytes | 387.00 KiB/s, done.
Total 4 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'feature/playground' on GitHub by visiting:
remote:      https://github.com/findmike/b00tc4mp-202601/pull/new/feature/playground        
remote:
To https://github.com/findmike/b00tc4mp-202601
 * [new branch]      feature/playground -> feature/playground
branch 'feature/playground' set up to track 'origin/feature/playground'.
```
## git log

Shows all commits in the repository history.

```bash
git log
commit 127a05f8a3206fe86619aa9c659eb5c26e652728 (HEAD -> develop, origin/develop)
Author: Michael Balo <mikejanoski95@gmail.com>
Date:   Fri Feb 6 17:52:59 2026 +0100

    add my folder

commit be35d7ec8babb905603a36170126487b10f83611 (origin/main, origin/HEAD, main)
Author: manuelbarzi <manuelbarzi@gmail.com>
Date:   Fri Feb 6 17:24:29 2026 +0100

    Add greeting to README

commit 125c2dbf0a4190d89a31675c628f5e1e9a8bb1e8
Author: manuelbarzi <manuelbarzi@gmail.com>
Date:   Fri Feb 6 17:24:00 2026 +0100

    Add project title to README

commit 6f3e0ec15aa764e553dd52feaa107a06e84dd8ad
Author: manuelbarzi <manuelbarzi@gmail.com>
:
```
## git add "repo-url"

Adds a change in the working directory to the staging area.

```bash
git add staff/findmike/.gitkeep
```

## git branch

Used to create a new branch.

```bash
git branch newPath
```
## git switch (new) or git checkout (old)

Git switch is used to switch between existing branches or create/switch to a new branch. On the other hand, git checkout can do the same and also restore files. Git switch was created so that git checkout wouldn't have to do all the work.

```bash
git switch develop
Switched to branch 'develop'
Your branch is up to date with 'origin/develop'.
```
## git merge

Used to merge different branches of work into a single branch. combines changes from one branch (source branch) into another branch (target branch). Example: You create a new branch called bugFix and you want to merge it with the main one.

```bash
git merge bugFix
```

## git rebase

Compared to git merge, git rebase moves the changes from one branch to another branch.

```bash
git merge bugFix
```