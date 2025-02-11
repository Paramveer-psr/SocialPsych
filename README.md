# SocialPsych

SocialPsych is a social media platform that allows users to connect, chat, and share posts. This project is built using a MERN stack (MongoDB, Express, React, Node.js).

## Features

- User Authentication (Sign Up, Sign In, Sign Out)
- User Profile Management
- Real-time Chat
- Create and View Posts
- Search Conversations

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Real-time Communication**: Socket.io
- **File Upload**: Multer, Cloudinary

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Paramveer-psr/socialpsych.git
   cd socialpsych
   ```

2. Install dependencies for both frontend and backend:

   ```bash
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the `backend` directory and add the following:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     CLOUDINARY_API_KEY=your_cloudinary_api_key
     CLOUDINARY_API_SECRET=your_cloudinary_api_secret
     CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
     ```

4. Start the development servers:
   - Backend:
     ```bash
     cd backend
     npm run dev
     ```
   - Frontend:
     ```bash
     cd frontend
     npm run dev
     ```

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Sign up for a new account or sign in with an existing account.
3. Create a profile by uploading an avatar and filling in your details.
4. Start chatting with other users and create posts.

## Project Structure

```
sociopsych/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── message.controller.js
│   │   │   ├── user.controller.js
│   │   ├── middlewares/
│   │   │   ├── multer.middleware.js
│   │   ├── models/
│   │   │   ├── message.model.js
│   │   │   ├── user.model.js
│   │   ├── routes/
│   │   │   ├── message.routes.js
│   │   │   ├── user.routes.js
│   │   ├── utils/
│   │   │   ├── asyncHandler.js
│   │   │   ├── ApiResponse.js
│   │   │   ├── ApiError.js
│   │   │   ├── cloudinary.js
│   │   ├── server.js
│   ├── .env
│   ├── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Avatar.jsx
│   │   │   ├── Chat.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── Post.jsx
│   │   │   ├── Sidebar.jsx
│   │   ├── routes/
│   │   │   ├── Chat.jsx
│   │   │   ├── CreatePost.jsx
│   │   │   ├── SetProfile.jsx
│   │   │   ├── SignIn.jsx
│   │   │   ├── SignUp.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── ProfilePage.jsx
│   │   ├── store/
│   │   │   ├── slices/
│   │   │   │   ├── authSlice.js
│   │   ├── utils/
│   │   │   ├── api/
│   │   │   │   ├── chat.js
│   │   │   │   ├── users.js
│   │   │   ├── ApiRoutes.js
│   │   ├── App.jsx
│   │   ├── index.js
│   ├── package.json
├── README.md
```

## API Endpoints

### User Routes

- **POST** `/api/user/sign-up` - Register a new user
- **POST** `/api/user/sign-in` - Login a user
- **POST** `/api/user/sign-out` - Logout a user
- **POST** `/api/user/set-profile` - Set user profile
- **GET** `/api/user/users` - Get all users

### Message Routes

- **GET** `/api/message/:chatId` - Get all messages in a chat
- **POST** `/api/message` - Send a new message

### Post Routes

- **POST** `/api/post/create` - Create a new post
- **GET** `/api/post` - Get all posts
- **GET** `/api/post/user/:username` - Get posts by a specific user
- **POST** `/api/post/like/:postId` - Like a post
- **POST** `/api/post/comment/:postId` - Comment on a post

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License.
