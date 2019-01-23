# GitHub Organisation Workflow
Each morning, make sure there are no unsaved changes that need to be pushed:

```
$ git status
```

## Git Checkout
Make sure you are working off the master branch. To check your current branch and checkout to master:
```
$ git branch
$ git checkout master
```

To update your local master branch with origin (https://github.com/nodebusters) repository:
```
$ git pull origin master
```

## Git Branches
Create a new branch to work from. DO NOT work in the master branch.

```
$ git checkout -b [BRANCH-NAME]
```

## Git Commits & Push
Add the files to save:
```
$ git add [FILENAME-1] [FILENAME-2]
$ git add .
```

Commit the changes:
```
$ git commit -m "[COMMENTS RELATED TO UPDATE]"
```

Push the update to the main repo:
```
$ git push origin [BRANCH-NAME]
```

Make sure you have pushed the latest round of changes at the end of each day.

## Pull Requests
To merge the changes to origin (the master repository online), you will need to navigate to the repository in GitHub Organisations and raise a new pull request.

While we all have access to merge pull requests, if you have created a PR, ***you are not allowed to be the one to merge to master*** - the code must be reviewed, approved and merged by another contributor.

Provided there are no conflicts, the other contributor be able to merge the changes right away by hitting the *Confirm merge* button.

If there is a merge conflict, these should be resolved locally on your device. To fetch the latest branches and changes:

```
$ git fetch
```

Checkout to the branch with the merge conflict and open in VS code to review and resolve:
```
$ git checkout [BRANCH-NAME]
$ code .
```