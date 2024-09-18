# Afrikabal Web App

The **Afrikabal Web App** connects African farmers, investors, and buyers to global markets. It offers a platform for listing agricultural products and lands, facilitating investments, and enabling secure financial transactions. The app's dashboard allows farmers, agents, and investors to manage assets, transactions, and trends in the agricultural sector.

---

## Project Overview

This repository contains the **Afrikabal Web App**, built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/). The platform features a marketplace for agricultural products and land listings, a user dashboard for managing transactions, and a multi-user system with role-based access (agents, farmers, investors).

---

## Features

### 1. **Marketplace Hub**
   - List and browse farmland and agricultural products.
   - Search filters to locate specific products based on location, price, or type.
   - Investment options for buyers and investors, with detailed product or land listings.

### 2. **User Dashboard**
   - **Balances and Transactions**: Monitor digital wallet balance, view transactions, and track investments.
   - **Market Trends**: Analyze agricultural market trends to assist users in making informed decisions.
   - **Make Transactions**: Securely send and receive payments directly through the platform.

### 3. **Multi-User System / Role-Based Access**
   - **Agents**: Manage farmers, land listings, and agricultural products.
   - **Farmers**: Track assets, view produce and land sale statuses, and manage profiles.
   - **Investors/Buyers**: Monitor investments, check land and produce performance, and track purchases.

---

## Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Backend**: API integration (Nest JS)
- **Database**: PostgreSQL
- **State Management**: [Redux](https://redux.js.org/)
- **Styling**: TailwindCSS

---

## Getting Started

### Prerequisites

Ensure the following tools are installed on your machine:

- [Node.js](https://nodejs.org/en/) (v16.x or higher recommended)
- [Git](https://git-scm.com/)
- A package manager ([npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), or [pnpm](https://pnpm.io/))

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Afrikabal/afrikabal-web-app.git
   cd afrikabal-web-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the app running.

---

## Project Structure

- `app/` – Contains main pages and components.
- `components/` – Reusable UI components like buttons, cards, etc.
- `context/` – Contains the global context for state management.
- `hooks/` – Custom React hooks used in the app.
- `styles/` – Global and component-level styles.
- `utils/` – Utility functions and constants.
- `pages/` – Next.js page routing structure.

---

## Contributing

This section is to clearly walk you through how ethical and professional you can contribute to the project.

### 1. Clone the Repository

Start by **cloning** it locally:

```bash
git clone https://github.com/Afrikabal/afrikabal-web-app.git
cd afrikabal-web-app
```

### 2. Create a New Branch

Before working on a new feature or bug fix, create a new branch from `main`. Use the following conventions for branch names:

- **Features**: `feature/short-description`
- **Bug Fixes**: `fix/short-description`
- **Improvements**: `improve/short-description`

Example:

```bash
git checkout -b feature/add-marketplace-search
```

### 3. Make Your Changes

Edit the relevant files and implement the required feature. Test your changes locally by running the development server:

```bash
npm run dev
```

### 4. Commit and Push

Once your changes are complete, commit them:

```bash
git add .
git commit -m "Add search filter for marketplace"
```

Push your branch to the remote repository:

```bash
git push origin feature/add-marketplace-search
```

### 5. Open a Pull Request (PR)

Open a new Pull Request (PR) on GitHub. Select the `main` branch as the base and your branch as the compare branch.

In the PR description:
- Explain the changes you made.
- Link to any relevant issues or tasks.
- Provide testing instructions if necessary.

### 6. Code Review

The PR will be reviewed by a team member. Make any requested changes, and once approved, the PR will be merged into the `main` branch.

### Branch Naming Conventions

- **Features**: `feature/short-description` (e.g., `feature/add-wallet-balance`)
- **Bug Fixes**: `fix/short-description` (e.g., `fix/login-bug`)
- **Improvements**: `improve/short-description` (e.g., `improve-performance-dashboard`)

---

## Environment Variables

Create a `.env` file in the root directory to store sensitive environment variables:

```bash
NEXT_PUBLIC_API_URL=<your-api-url>
NEXT_PUBLIC_CHAIN_ID=<blockchain-network-id>
NEXT_PUBLIC_WALLET_CONTRACT=<contract-address>
```

Make sure the actual API URL and contract addresses are properly set up for interacting with the backend and blockchain.

---

## Code Guidelines

1. **Use TypeScript**: Ensure all files are typed properly for better code maintainability and safety.
2. **Component Structure**: Keep components small and modular. Use folders for each component with its associated styles and tests.
3. **Naming Conventions**: Use meaningful and descriptive names for components, variables, and functions.
4. **Styling**: Use Styled Components or CSS-in-JS for consistent styling across the app.
5. **State Management**: Use React Context API or Redux for global state. Keep it organized to ensure data flows predictably.

---

## Key Pages

Here’s a list of key pages for the **Afrikabal Web App**:

1. **Homepage**: Overview of the platform with key features.
2. **Product Listings**: A marketplace with farmland and agricultural product listings.
3. **Product Detail**: Detailed view of individual products or land, with options for investment or purchase.
4. **User Dashboard**: Manage investments, track transactions, and check market trends.
5. **Login/Signup**: Authentication portal for users.
6. **Account Settings**: Manage user profiles and preferences.
7. **Help/Support**: Access to FAQs and support resources.

---

## Testing

Before opening a Pull Request, test the app locally:

- Run the development server and check that all features function as expected.
- Test all user roles (agents, farmers, investors) to ensure role-based access is working.
- Make sure the transaction flow is smooth, from listing products to purchasing or investing in land.

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Styled Components](https://styled-components.com/docs)

---

## Questions?

If you have any questions or run into issues, feel free to reach out via Slack or open an issue in the repository.
