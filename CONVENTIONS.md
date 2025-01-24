
# Stellar Community Wallet Conventions

## Overview
    
- This Conventions file provides a set of guidelines and best practices for the StellarAgent project.

## Purpose

### These conventions ensure that 

  - There is a clear and consistent approach to 
    - coding
    - documentation
    - project structure.
  - There is a single source of truth for which package management tools to use.
  - All parts of the project are documented
  - All code is linted and formatted
  - All code is tested

## Use Cases

- These conventions are ideal for the following use cases:
  - Coding
  - Documentation
  - Testing

## Usage

### JavaScript, Typescript, & Node.js

- DO NOT use 
  - npm <command>
- ALWAYS use
  - pnpm <command>

### Python

- DO NOT use
  - pip 
- Always use uv
  - For example 
- Add a python package to the  file with
  -  or 
  - then run
  `uv pip compile pyproject.toml -o requirements.txt`

  - followed by 
- Python packages and apps are created with the commands:
- uv init
- uv pip compile pyproject.toml -o requirements.txt
- uv pip install -r requirements.txt

## Coding

- Before writing any code, first write a plan.
- After writing a plan, break the plan into smaller tasks.
- For each task, first write a test.
- After writing a test, write the code.
- After writing the code, run the test.
- After running the test, fix any errors.
- After fixing any errors, run the test again.
- Continue running the test and fixing any errors until the test passes.
- When the test passes, commit the code.
- Repeat the process for each task.