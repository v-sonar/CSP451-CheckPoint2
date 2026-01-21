# Conflict Resolution Report (≈300 words)

## 1) Conflict Scenario
The conflict happened in the file `README.md` when trying to merge two feature branches into `main`:  
- **Branches involved:** `feature/user-authentication` and `feature/database-connection`.  
- **Changes made:**  
  - `feature/user-authentication` added a line describing the login route feature.  
  - `feature/database-connection` added a line describing the database connection module.  

Since both branches modified the same lines, Git couldn’t automatically decide which version to keep, causing a merge conflict.


## 2) What You Saw
When opening `README.md`, Git inserted conflict markers that looked like this: <<<<<<< HEAD, =======, >>>>>>> feature/database-connection
These markers clearly showed the conflicting sections from each branch. I also took a screenshot of this view in VS Code to document the conflict.

## 3) Resolution Strategy
Explain:
To fix the conflict:  
1. I manually combined both changes into one clean section

2. I removed all `<<<<<<<`, `=======`, and `>>>>>>>` lines.  
3. I staged the resolved file: then git add README.md
4. I committed the resolution: git commit -m "fix(merge): resolve conflict in README.md"
5. I verified the app still runs with npm run dev, and the features function as expected.


## 4) Prevention Methods
To reduce conflicts in real projects:

Pull changes from main frequently to keep branches up to date.

Avoid editing the same lines in multiple branches simultaneously.

Communicate with team members about which files are being worked on.

Keep branches small and focused, and merge often rather than letting branches diverge too much.

Following these steps minimizes conflicts and makes collaboration smoother and more efficient


Which file conflicted:
README.md

Which branches were involved:

feature/user-authentication

feature/database-connection

What each branch changed:

feature/user-authentication added the line:
Feature: User Authentication added with login route

feature/database-connection added the line:
Feature: Database connection module added

The conflict happened because both branches edited the same part of the README at the same time, so Git didn’t know which change to keep.
