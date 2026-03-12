# Playwright Cucumber Automation

Automation testing framework using Playwright and Cucumber for end-to-end (E2E) testing.

## 🚀 Tech Stack

* Playwright
* Cucumber (BDD)
* Node.js
* JavaScript

## 📦 Installation

Clone repository:

git clone https://github.com/rizkyrahmadianto/playwright-cucumber-automation.git

Go to project directory:

cd playwright-cucumber-automation

Install dependencies:

npm install

Install Playwright browsers:

npx playwright install

## ⚙️ Environment Setup

Copy example environment file:

cp .env.example .env

Update configuration based on your environment.

## ▶️ Run Test

Run all tests:

npm test

Run specific feature:

npx cucumber-js features/login.feature

## 📁 Project Structure

playwright-cucumber-automation
│
├── features            # Cucumber feature files
├── step-definitions    # Step definitions
├── pages               # Page Object Model
├── hooks               # Cucumber hooks
├── utils               # Helper functions
├── .env.example        # Environment configuration example
├── package.json        # Node dependencies
└── README.md           # Project documentation

## 🧪 Example Test Scenario

Feature: Login

Scenario: User login successfully
Given user is on login page
When user enters valid credentials
Then user should be redirected to dashboard

## 👨‍💻 Author

QA Automation Engineer
