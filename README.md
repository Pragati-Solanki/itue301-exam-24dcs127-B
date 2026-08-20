# 🏥 MedCare Plus – Hospital Appointment System (Set A)

A full-stack Hospital Appointment System developed using the MERN stack for the AWDF Internal Practical Examination. The application demonstrates React component architecture, client-side routing, RESTful API development, and MongoDB integration with Mongoose.

## 📌 Features

- Multi-page React application using React Router
- Reusable appointment card component with props
- Doctor listing page
- Appointment booking form using `useState`
- Express REST API with CRUD-ready endpoints
- Custom logging and global error-handling middleware
- MongoDB integration using Mongoose
- Schema validation with required fields and default values

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Axios

### Backend
- Node.js
- Express.js
- Mongoose
- MongoDB
- dotenv
- CORS

## 📁 Project Structure

```text
itue301-exam-24dcs127-A/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── api.js
│   │   └── main.jsx
│   └── package.json
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
cd itue301-exam-24dcs127-A
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=mongodb://127.0.0.1:27017/medcareplus
```

Start the backend:

```bash
npm run dev
```

Backend runs at:

```text
http://localhost:5000
```

### 3. Frontend setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend runs at:

```text
http://localhost:5173
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/v1/doctors` | Get all doctors |
| GET | `/api/v1/appointments` | Get all appointments |
| POST | `/api/v1/appointments` | Create a new appointment |

## 🗄️ MongoDB Schema

**Appointment**

| Field | Type | Validation |
|--------|------|------------|
| patientName | String | Required |
| doctorName | String | Required |
| date | String | Required |
| timeSlot | String | Required |
| status | String | Enum |
| createdAt | Date | Default: Date.now |

## 📷 Practical Evidence

1. React Application running in browser
2. Thunder Client displaying successful REST API response
3. MongoDB Compass showing stored appointment documents

## 👩‍💻 Author

**Pragati Solanki**

B.Tech Computer Science Engineering

AWDF Internal Practical Examination – Set A
