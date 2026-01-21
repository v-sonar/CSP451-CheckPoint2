# User Authentication

## Description
- Provides login endpoint at `/auth/login`
- Validates username and password
- Returns success or error messages in JSON
- Future improvements: connect to database for real user verification

## Usage
- POST request to `/auth/login` with JSON body:
  ```json
  {
    "username": "admin",
    "password": "password"
  }
