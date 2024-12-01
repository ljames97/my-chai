# MyChai.

## Overview
MyChai is an ecommerce site for premium loose leaf teas and teaware. The project demonstrates best practices in frontend development, state management, and responsive design.

## Features
- Dynamic Product Listings: View products with images, prices, and descriptions.
- Theming: Light and dark mode for personalized user experience.
- Account Management: Login, register, and manage user accounts.

## Installation
To set up and run MyChai on your local machine, follow these steps:

1. Clone the repository:
  ```bash
  git clone https://github.com/ljames97/my-chai.git
  cd my-chai
  ```

2. Install Dependencies:
Ensure you have Node.js installed. Then run:
  ```bash
  npm install
  ```

3. MyChai uses Firebase for authentication and data storage. Set up a Firebase project and add your Firebase configuration to a .env file in the root directory.
  ```env
  VITE_FIREBASE_API_KEY=your_api_key
  VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
  VITE_FIREBASE_PROJECT_ID=your_project_id
  VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
  VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
  VITE_FIREBASE_APP_ID=your_app_id
  ```

4. Start the Application in Development Mode:
  Make sure base in vite.config.js is set to '/'
  ```bash
  npm run dev
  ```
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

5. Build and Serve the Application for Production:
  ```bash
  npm run build
  npm run preview
  ```
  Replace dist/index.html and dist/login.html with dist/public/index.html
  and dist/public./login.html respectively.
This will create a production build and serve it using Vite's preview server.