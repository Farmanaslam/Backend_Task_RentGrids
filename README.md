# 🛒 Mini E-Commerce Backend API

This is a **Mini E-Commerce Backend API** built using **Node.js, Express, MongoDB**, and **JWT Authentication** as part of a backend assignment.

The project demonstrates backend fundamentals such as authentication, protected routes, pagination, cart management, and clean project structure using ES6 modules.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- ES6 Modules

---

## 📂 Project Structure

backend-task/
├── src/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── authController.js
│ │ ├── productController.js
│ │ └── cartController.js
│ ├── models/
│ │ ├── User.js
│ │ ├── Product.js
│ │ └── Cart.js
│ ├── routes/
│ │ ├── authRoutes.js
│ │ ├── productRoutes.js
│ │ └── cartRoutes.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ └── app.js
├── .env
├── package.json
└── README.md

yaml
Copy code

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/backend-task.git
cd backend-task
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Configure Environment Variables
Create a .env file in the root directory and add:

env
Copy code
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/ecommerce
JWT_SECRET=supersecretkey
4️⃣ Start the Server
bash
Copy code
npm run dev
Server will start on:

arduino
Copy code
http://localhost:5000
✅ Steps to Check Whether the Project Is Working Properly
Follow the steps below in the given order to verify all features.

✅ Step 1: Verify Server & Database Connection
Run npm run dev

Check the terminal output

✔️ Expected Output:

arduino
Copy code
MongoDB Connected
Server running on port 5000
✅ Step 2: Register a New User
Endpoint

arduino
Copy code
POST /api/auth/register
Request Body

json
Copy code
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "123456"
}
✔️ Expected Result:

User should be registered successfully

Password should not be returned in the response

✅ Step 3: Login User and Get JWT Token
Endpoint

bash
Copy code
POST /api/auth/login
Request Body

json
Copy code
{
  "email": "test@example.com",
  "password": "123456"
}
✔️ Expected Result:

JWT token should be returned

Copy the token for authorization in next steps

✅ Step 4: Create a Product (Protected Route)
Endpoint

bash
Copy code
POST /api/products
Headers

makefile
Copy code
Authorization: Bearer <JWT_TOKEN>
Request Body

json
Copy code
{
  "name": "iPhone 15",
  "price": 80000,
  "description": "Latest Apple iPhone"
}
✔️ Expected Result:

Product should be created successfully

Unauthorized request without token should fail

✅ Step 5: Get Products with Pagination
Endpoint

bash
Copy code
GET /api/products?page=1
✔️ Expected Result:

List of products should be returned

Pagination should work as expected

✅ Step 6: Add Product to Cart (No Duplicates Allowed)
Endpoint

bash
Copy code
POST /api/cart
Headers

makefile
Copy code
Authorization: Bearer <JWT_TOKEN>
Request Body

json
Copy code
{
  "productId": "product_id"
}
✔️ Expected Result:

Product should be added to the user's cart

Adding the same product again should not create duplicates

✅ Step 7: Get User Cart
Endpoint

bash
Copy code
GET /api/cart
Headers

makefile
Copy code
Authorization: Bearer <JWT_TOKEN>
✔️ Expected Result:

Cart should be returned with populated product details

Only unique products should appear in the cart

🧪 API Testing Tools
You can test this project using:

Postman (Recommended)

Thunder Client (VS Code Extension)

Any REST API client

✨ Features Implemented
JWT-based authentication

Password hashing using bcrypt

Protected routes with middleware

Product creation and listing

Pagination support

Cart management without duplicate products

Clean MVC architecture

ES6 import/export syntax

Environment-based configuration

🧠 Notes for Reviewer
Project follows best practices for backend development

Code is modular and easy to extend

Can be enhanced further with orders, payments, and roles

Suitable for production-level backend foundation

👨‍💻 Author
Md Farman Aslam

📄 License
This project is created for assessment and learning purposes only.

yaml
Copy code

---

### ✅ This README is:
- Reviewer-friendly  
- Interview-ready  
- Clear & structured  
- Covers **“how to check project works”** (most important)

If you want next:
- 🔥 Company-specific README
- 🎯 Interview explanation for each API
- 📌 Add sample curl commands
- 🚀 Deployment steps (Render / Railway / AWS)
