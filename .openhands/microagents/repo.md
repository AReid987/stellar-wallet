# Repository: StellarAgent

**Description**: The **Stellar Community Wallet** is a blockchain-based wallet designed to support **tokenized assets** and **community engagement** on the Stellar network.


## Directory Structure

### Current Development Focus

🎯 Stellar Community Wallet

Some of the significant sections of the repository

- ai-docs/: Instructions for AI Agents
- internal-docs/: internable documentation about the software system
- frontend/: User interface
- backend/: Server-side logic


### Setup:

- Run `pnpm install` to install dependencies
- Use `pnpm run dev` for development
- Run `pnpm test` for testing
- Run `pnpm lint` for linting

### Agent Guidelines:

- Follow ESLint configuration
- Write tests for all new features
  - Write example Test
  - Write Code for one discrete bit of logic
  - If test passes
    - Begin next discrete bit of logic until task complete
  - If test fails
    - Write code to pass test
- Use TypeScript for new code
- Update or create new documentation to describe the function, feature or vertical slice after completing each significant task.

- Use uv for Python package management
- Use uv instead of pip like `uv pip install`
- Use PNPM instead of NPM like `pnpm install`