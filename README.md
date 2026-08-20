Markdown

# 🏥 MedCare Plus – Hospital Appointment System (Set A)

│ │ └── main.jsx

│ └── package.json

│

├── backend/

│ ├── models/

│ ├── routes/

│ ├── middleware/

│ ├── server.js

│ ├── .env.example

│ └── package.json

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

[http://localhost:5000](http://localhost:5000)

```

### 3. Frontend setup

```bash

cd ../frontend

npm install

npm run dev

```

Frontend runs at:

```text

[http://localhost:5173](http://localhost:5173)

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
