Blog Application
A full-stack blog application built using React.js for the frontend and Node.js with Express.js for the backend. The app allows users to create, view, edit, and delete blog posts, with features such as image uploads and category-based filtering. The blog posts are stored in a MongoDB database, and the entire project is deployed to Vercel for the frontend and backend hosting.

Features :~
1. Create Posts: Users can create blog posts with a title, description, and image.
2. View Posts: All blogs can be viewed, and users can filter them based on categories like Travel, Food, Tech, and more.
3. Edit Posts: Users can edit their blog posts, including the title, description, and image.
4. Delete Posts: Blogs can be deleted by users.
5. Category Filtering: Blogs are categorized (Travel, Food, Tech, etc.) and can be filtered by category.
6. Image Upload: Users can upload images for their blogs.

Technology Stack :~

* Frontend: React.js, Bootstrap, Axios
* Backend: Node.js, Express.js
* Database: MongoDB with Mongoose
* State Management: React's built-in state and hooks
* File Upload: Multer for image uploads
* Deployment: Vercel for both frontend and backend.

Installation and Setup :~

1. Clone the repository:
=> git clone https://github.com/HeetMorker/Blog.git

2. Navigate to the project directory :
=> cd blog

3. Install dependencies for the frontend and backend:

* For frontend :
    cd frontend
    npm install

* For backend :
    cd backend
    npm install

4. Setup environment variables for the backend: Create a .env file in the backend directory and add the following :
    MONGO_URI=your_mongodb_uri
    PORT=5000

5. Start the backend server:
    cd backend
    npm start

6. Start the frontend development server:
    cd frontend
    npm start

7. Open your browser and visit http://localhost:3000.

Deployment:~


API Endpoints :~

* GET /api/blogs: Fetch all blogs
* POST /api/blogs/add: Add a new blog post
* PUT /api/blogs/:id: Update an existing blog post by ID
* DELETE /api/blogs/:id: Delete a blog post by ID
* GET /api/blogs/:id: Get a single blog post by ID
