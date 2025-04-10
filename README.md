# EduConnect: Online Learning Platform

## Project Overview

EduConnect is a comprehensive online learning platform designed to provide an engaging and dynamic learning experience for both users and administrators. It allows users to explore, enroll in, and track their progress in various courses. The platform also enables administrators to manage courses, monitor user enrollment, and ensure smooth course delivery. EduConnect leverages the power of JWT authentication for secure user management and provides dynamic course filtering and user role-specific functionality.

The platform aims to provide a user-friendly interface that streamlines the process of course enrollment, progress tracking, and content management. Admins can also add, update, and remove courses, ensuring the content remains relevant and up-to-date.

### Features:

#### For Users:

- **Course Listing:** Browse available courses by category or topic.
- **Course Enrollment:** Enroll in courses of interest and track progress.
- **Dynamic Course Filtering:** Users can filter courses based on categories, difficulty levels, and topics.
- **Course Search:** Easily search for courses by keyword or category.
- **JWT Authentication:** Secure login/logout for users to manage their courses and preferences.
- **User Profile:** Manage user data and track enrolled courses.
- **Interactive Dashboard:** Personalized dashboard displaying enrolled courses, progress, and upcoming lessons.

#### For Admins:

- **Course Management:** Admins can add, update, and delete courses, manage content and materials.
- **Enrollment Management:** View and manage user enrollments, including adding/removing users from courses.
- **Dynamic Course Creation:** Create new courses, assign categories, and define course content.
- **Reporting & Analytics:** Admins can view user statistics, course popularity, and performance metrics.
- **Admin Authentication:** Secure login/logout system using JWT.
- **Role-based Access Control:** Different functionalities based on user roles (admin/user).

## Group Members:

- **Orazymbetov Zhantore**
- **Nurtaza Ayaulym**
- **Kudryakov Andrey**

## Technologies Used:

- **Front-End:** Angular, TypeScript, HTML, CSS
- **Back-End:** Django, Django REST Framework (DRF)
- **Authentication:** JWT (JSON Web Tokens)
- **Styling:** Angular Material, CSS for custom design
- **Database:** PostgreSQL (or another relational database)

## Front-End (Angular):

- **Course Listing and Enrollment:** Users can browse and enroll in courses.
- **Admin Interface:** Admins have an interface to manage courses, user enrollments, and view reports.
- **JWT Authentication:** Secure authentication for users and admins to access the platform.
- **Routing and Dynamic Views:** Dynamic rendering of views based on user input (ngFor, ngIf).
- **Course Filtering:** Filters for browsing courses based on categories, difficulty levels, and topics.

### Key Features of the Front-End:

1. **Course Listing and Enrollment System:** Users can view courses and enroll in them with a single click.
2. **Admin Dashboard:** Admins can create, update, and delete courses, as well as view user enrollment data.
3. **JWT Authentication:** Both admins and users need to log in using JWT tokens to access secure routes.
4. **Routing Module:** Dynamic routing based on user interaction with components like course details, admin pages, and user profile.
5. **Use of Directives:** ngFor and ngIf used for rendering dynamic content (e.g., course lists, filtering).

## Back-End (Django):

- **Models:**
  - **Course:** Represents individual courses with attributes like title, description, category, and materials.
  - **User:** Represents users (both learners and admins), with authentication and role-based permissions.
  - **Enrollment:** Represents the relationship between users and courses, tracking which courses users have enrolled in.
  - **Category:** Categorizes courses into different subjects or topics (e.g., Programming, Data Science, etc.).
- **Relations:**
  - **Enrollment to User (ForeignKey):** An enrollment is tied to a user (foreign key relationship).
  - **Course to Category (ForeignKey):** Each course belongs to a category, linking courses to their respective categories.
- **Views and API:**
  - **CRUD Operations:** Admins can create, read, update, and delete courses and enrollments via API views.
  - **Token-based Authentication:** JWT tokens are used for secure user login/logout.
  - **FBV and CBV:** Functional-based views (FBVs) for simple operations, and class-based views (CBVs) for more complex scenarios like listing, updating, and deleting resources.

### Key Features of the Back-End:

1. **Course and Enrollment Management:** Admins can manage courses and enrollments using views with CRUD operations.
2. **Token-based Authentication:** Protects the platform with JWT, allowing only authenticated users to access certain resources.
3. **Model Relations:** Relations between models such as `User` and `Enrollment`, and `Course` and `Category` ensure structured data management.
4. **Serializers:** Use of serializers to convert complex data into JSON for API responses (using `ModelSerializer`).

### Project Flow:

1. **User Registration/Login:** Users register and log in using JWT authentication.
2. **Course Browsing:** After logging in, users can browse available courses, filter them by category, and view detailed course information.
3. **Course Enrollment:** Users can enroll in courses by clicking the "Enroll" button, which is tied to an API endpoint for updating their enrollments.
4. **Admin Features:** Admins can access a separate dashboard where they can add, modify, and delete courses, as well as view user enrollments and course performance.
5. **JWT Token Handling:** After login, a JWT token is generated, stored in local storage (or cookies), and sent with API requests for authorization.

## Installation Instructions

### Front-End (Angular):

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```
