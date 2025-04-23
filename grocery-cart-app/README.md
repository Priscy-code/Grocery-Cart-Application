# Grocery Cart App

A simple, responsive React application that allows users to browse grocery items, add them to a cart, and manage their shopping experience.

## Features

- Browse a catalog of grocery items
- Add items to your shopping cart
- Adjust item quantities in the cart
- Remove items from the cart
- View the total price of all selected items
- Cart data persistence using LocalStorage
- Toast notifications for user actions
- Responsive design for all device sizes

## Tech Stack

- React
- TypeScript
- Tailwind CSS

## Project Structure

Grocery-cart-app/
--public/
---favicon.jpg
-src/
--components/
---caertItem,tsx
---Grocery.tsx
---GroceryItem.tsx
--data
---groceryData.ts
--interface
---groceryProp.ts

## Setup Instructions

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or yarn (v1.22.0 or higher)

### Installation

1. Clone the repository:
   bash
   git clone https://github.com/Priscy-code/Grocery-Cart-Application.git
   cd grocery-cart-app
  

2. Install dependencies:
   npm install
   # or
   yarn install

3. Start the development server:
   npm start
   # or
   yarn start

4. Open your browser and navigate to `http://localhost:3000`

### Build for Production

To create an optimized production build:
npm run build
# or
yarn build

The build artifacts will be stored in the `build/` directory.

## Usage

1. Browse the available grocery items on the left side of the screen (or top on mobile)
2. Click "Add to Cart" to add an item to your shopping cart
3. In the cart section, you can:
   - Adjust quantities using the + and - buttons
   - Remove items by clicking the × button
   - View the total price of all items in your cart
4. Your cart data will be saved automatically and persisted between sessions

## Testing

Run the test suite:

```bash
npm test
# or
yarn test
```

## Implementation Details

### State Management
- React hooks (useState, useEffect) for local state management
- LocalStorage for persisting cart data between sessions

### UI Components
- Clean component-based architecture
- Responsive design using Tailwind CSS
- Toast notifications for user feedback

### TypeScript
- Strong typing with interfaces for all data structures
- Type-safe props for all components
- Clear type definitions for functions and state

