# Collaboration Workflow Report

## 1) Issues Created

For this project I created three GitHub issues — one for each major feature I worked on. This helped me keep track of what I was building and made it easier to link each Pull Request to a clear goal.

Issue #1 — User Authentication Feature  
This issue was created to track the work for the login feature. It described adding a login route, controller logic and basic validation/error messages so users would get meaningful feedback when logging in.

Issue #2 — Database Connection Feature  
This issue covered setting up the SQLite database connection and helper functions like `addUser`, `getUser` and `listUsers`. I also included a simple `/db-test` route so I could manually verify the database was working.

Issue #3 — API Endpoints Feature
This issue covered building the REST API — creating controllers and routes for user data, integrating them in `app.js`, and writing documentation so others know how to use the endpoints.

Linking each issue to its corresponding branch and PR helped keep my workflow organized and made it clear what each piece of work was meant to accomplish.

---

## 2) PR Summary (3 PRs)

## Pull Request: [Feature] User Authentication**
- Linked issue: #1  
- Key changes:I added the authentication controller and routes, hooked them into the app, and added simple validation and error handling so that only valid login attempts would succeed. I also added documentation describing how the auth system works.
Screenshots included? Yes — I included a screenshot of the login UI/output to show the feature working.

### Pull Request: [Feature] Database Connection**
- Linked issue: #2  
- Key changes: I implemented a SQLite database connection, wrote helper functions for basic user operations, and added a test route that returns a list of users. I also documented how this works in `/docs/database.md`.
- Screenshots included? No — since this feature was backend‑only, I didn’t include UI screenshots.

### Pull Request: [Feature] API Endpoints**
- Linked issue: #3  
- Key changes: I created the API controllers and routes (GET and POST for users), integrated them into the main app, and wrote documentation showing how to use them in `/docs/api.md`.
- Screenshots included? Yes — I added example API responses from Postman to show the endpoints working.

Overall, each PR clearly explained what was done, why it was done, and tied back to the original issue.

---

## 3) Review Simulation Evidence

As part of this assignment, I simulated code reviews using GitHub’s review tools — this means adding comments on each PR and using “Request changes” at least once.

**User Authentication PR**  
- Comment 1: *“Consider adding password validation length check..”* — This encourages better input validation.  
- Comment 2: *“Could show a loading spinner during login request..”* — This helps someone else reading the code later.

**Database Connection PR**  
- Comment 1: *“Make sure database connections are closed properly.”* — A practical suggestion for clean code.  
- Comment 2: *“Consider moving helper functions to a separate utils file..”* — Improves readability.

**API Endpoints PR**  
- Comment 1: *“
Add error handling for getUser route.

”* — This improves robustness.  
- Comment 2: *“Consider adding pagination for listUsers endpoint..”* — Helps users of the API understand what to expect.

For the API Endpoints PR, I chose **Request changes** instead of Approve after writing comments. I then:

Thanks for the contribution! Before this PR can be merged, please address the following:

Add input validation for the API endpoints.
Include error handling logic for missing required fields.
Please push fixes and request another review when done.
   ```bash
   git add .
   git commit -m "fix(api): address requested review changes"
   git push origin feature/api-endpoints


## 4) Merge Strategy
For all of the Pull Requests, I used Squash and merge on GitHub. Using squash and merge keeps the history on the main branch clean because it combines all the small commits from a feature branch into a single meaningful commit. This makes the project history easier to read and makes reverting or debugging specific features much simpler compared to having many small WIP commits
