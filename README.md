# HaikuApp

HaikuApp allows users to create, share, and manage haikus with customizable background images. Users can upload their own images, add a haiku, and easily edit, delete, or view their haikus. The app also supports user authentication for managing haikus securely.

## Features

- **User Authentication**: Users can register, log in, and log out.
- **Create Haikus**: Users can create new haikus by filling in three lines.
- **Upload Image**: Users can upload their own images to use as backgrounds for their haikus.
- **Display Haikus**: Haikus are displayed with their respective background images.
- **Edit Haikus**: Users can edit their existing haikus.
- **Delete Haikus**: Users can delete their haikus.

## Tech Stack

- **Frontend**: Next.js (React), Tailwind CSS, Cloudinary (for image handling)
- **Backend**: Node.js (server-side functions), Cloudinary API for image uploading
- **State Management**: React hooks (`useState`, `useEffect`)
- **Form Handling**: Custom form submission using `useState`
- **Authentication**: JWT (JSON Web Tokens) for secure user authentication

## Installation

### Prerequisites

1. Node.js and npm installed on your machine.
2. A Cloudinary account for image uploading and storing.
3. A basic understanding of how user authentication works with JWT (JSON Web Tokens).

### Setup

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/nailaphilip/haiku-app
   cd haikuapp
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create an `.env.local` file at the root of your project and add your Cloudinary credentials and secret for JWT:

   ```
   CLOUDINARY_URL=cloudinary://your-cloudinary-cloud-name:your-cloudinary-api-key@your-cloud-name
   JWT_SECRET=your_jwt_secret_key
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Authentication Flow

### 1. **Register**

Users can create a new account by providing their email and password. Upon successful registration, the user is logged in automatically.

### 2. **Login**

Once registered, users can log in using their email and password. A JWT token is issued upon successful login and is used for authentication in subsequent requests.

### 3. **Logout**

Users can log out, which invalidates the JWT token and ends their session.

### 4. **JWT Authentication**

JWT tokens are stored in cookies for session persistence. The token is sent with requests to ensure that users are authenticated when creating, editing, or deleting their haikus.

## Features and Functionality

### 1. **Create Haiku**

Users can fill in three text fields for the lines of their haiku and submit the form. The haiku is saved with a background image, which can be uploaded by the user.

### 2. **Upload Image**

Users can upload an image from their computer by selecting a file via the file input. The uploaded image is used as the background for the haiku text.

### 3. **Edit Haiku**

Users can navigate to an edit page where they can modify their existing haikus. The edited haiku is updated in the backend and reflected on the main page.

### 4. **Delete Haiku**

Users can delete a haiku by clicking the "Delete" icon next to it. This removes the haiku from the system.

## Cloudinary Integration

HaikuApp uses **Cloudinary** for image uploading and storage. When users upload an image, it is stored in Cloudinary's cloud storage and used as the background for the haiku.

To integrate Cloudinary into your app, you'll need to sign up for a Cloudinary account and obtain your API keys. Then, add your Cloudinary credentials to the `.env.local` file as shown above.

## Future Features

- **User Profiles**: Users can update their profiles, including a username, avatar, etc.
- **More Customization**: Users can customize the font style, color, and placement of their haiku text on the image.

## Contributing

Feel free to fork the repository, open issues, or submit pull requests.

### Bug Reports & Feature Requests

Please open an issue in this repository for any bugs or feature requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
