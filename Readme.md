# EventSphere

EventSphere is a modern event booking and registration platform built with the MERN stack. It empowers students, clubs, and administrators to create, explore, and register for campus events with a seamless user experience and role-based access control.

## Features

### Core Functionality

- **Event Listing**  
  Users can browse all upcoming campus events in one place with a clean and intuitive layout.

- **User Registration & Login**  
  Secure account creation using hashed passwords with JWT-based authentication.

- **Role-Based Dashboards**  
  - **Users** can explore events and register.  
  - **Admins** can create, edit, and delete events.

- **Event Registration System**  
  Users can register for events by submitting their name, email, college, and phone number. All registration data is stored and managed through the backend.

### Google Sign-In Integration

- Google OAuth 2.0 login using Passport.js
- Users can sign in with their Google account
- Integrated with existing JWT-based authentication system

### Admin Features

- **Create Event:** Use a secure form to add new events including details like title, category, date, time, venue, and description
- **Upload Event Image:** Upload and manage event images using Cloudinary
- **Edit Event:** Modify any event detail including uploaded image

### UI/UX Design

- Fully responsive and mobile-friendly design
- Developed using React + Vite and styled with Tailwind CSS
- Dark-themed interface with a modern glassmorphism-inspired aesthetic
- Smooth animations, hover effects, and modals for an engaging user experience

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Router, Axios  
- **Backend:** Node.js, Express, MongoDB, Mongoose  
- **Authentication:** JWT, Passport.js (Google OAuth 2.0)  
- **Image Handling:** Cloudinary REST API for image uploads

