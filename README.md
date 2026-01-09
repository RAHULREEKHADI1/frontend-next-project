# Project Name

This project is a web application with multiple pages and features, structured using route-based navigation.

## Table of Contents

- [Overview](#overview)
- [Routes](#routes)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)

## Overview

This project includes features for managing jobs, schedules, models, user authentication, and detailed step-by-step workflows. It is designed with modularity and scalability in mind.

---

## Routes

Here is a list of the routes available in the application:

### Home
- `/` — Landing page

### Data
- `/data` — Data overview

### Jobs
- `/jobs` — Jobs listing
- `/jobs/models` — Jobs models

### Authentication
- `/login` — Login page
- `/signup` — Signup page
- `/verification` — User verification

### Schedule
- `/schedule` — Schedule overview
- `/schedule/backtest` — Backtesting schedules
- `/schedule/compare` — Compare schedules
- `/schedule/details` — Schedule details

### Steps
- `/step/[id]` — Step details (dynamic route)
- `/step/settings/4` — Settings page 4
- `/step/settings/5` — Settings page 5
- `/step/settings/6` — Settings page 6

### View
- `/view` — General view page
- `/view/model/3` — Specific model view (dynamic route)

### Part
- `/part/[id]` — Part details (dynamic route)

---

## Setup

1. Clone the repository:

```bash
git clone https://github.com/RAHULREEKHADI1/frontend-next-project.git
