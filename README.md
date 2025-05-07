# Automated Email Sequencer

`Automated Email Sequencer` is a `MERN Stack` web application that allows users to create and manage automated email sequences using a flowchart interface. This application uses `React Flow` for visualizing the flowchart, `Agenda` for email scheduling, and `Nodemailer` for sending emails.

## Features

- **Flowchart Interface**: Intuitive interface for creating email sequences.
- **Node Types**:
  - **Lead-Source**: Defines the recipient of the email sequence.
  - **Cold-Email**: Represents an email to be sent with a subject and content.
  - **Wait/Delay**: Adds a delay between emails.
- **Scheduling**: Automatically schedules and sends emails based on the flowchart.
- **Modal Forms**: Easy-to-use forms for adding and editing nodes.
- **Backend Integration**: Node and edge data are sent to the backend to start the email sequence process.

## Technologies Used

- **Frontend**:
  - React
  - React Flow
  - Axios
  - Modal from react-modal
- **Backend**:
  - Node.js
  - Express
  - Agenda
  - Nodemailer
  - MongoDB (via Mongoose)

## Installation

### Create .env

Create .env files for both frontend and backend separately and fill them as per .env.sample

### Install dependencies

```bash
# Backend

cd backend
npm install

# Frontend

cd frontend
npm install
```

### Start the Backend & Frontend

```bash
# Backend

cd backend
npm run dev

# Frontend

cd frontend
npm run dev
```

### Open the application

Open your browser and navigate to http://localhost:5173 to view the application.

## API Documentation

### Base URL

```
Development: http://localhost:3000
Production: https://automatic-email-scheduler-rh87.vercel.app
```

### Endpoints

#### Start Email Sequence Process

Initiates an email sequence based on the provided flowchart configuration.

- **URL**: `/api/sequence/start-process`
- **Method**: `POST`
- **Content-Type**: `application/json`

##### Request Body

```json
{
  "nodes": [
    {
      "id": "1",
      "data": {
        "label": "Lead-Source\n- (example@email.com)"
      },
      "position": {
        "x": 100,
        "y": 100
      }
    },
    {
      "id": "2",
      "data": {
        "label": "Cold-Email\n- (Subject) Email content"
      },
      "position": {
        "x": 100,
        "y": 200
      }
    },
    {
      "id": "3",
      "data": {
        "label": "Wait/Delay\n- (2 min)"
      },
      "position": {
        "x": 100,
        "y": 300
      }
    }
  ],
  "edges": [
    {
      "id": "1-2",
      "source": "1",
      "target": "2"
    },
    {
      "id": "2-3",
      "source": "2",
      "target": "3"
    }
  ]
}
```

##### Response

###### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Process started successfully"
}
```

###### Error Response (400 Bad Request)
```json
{
  "success": false,
  "message": "Nodes and edges are required"
}
```

###### Error Response (500 Internal Server Error)
```json
{
  "success": false,
  "message": "Internal server error",
  "error": "Error message details"
}
```

##### Example Usage (JavaScript/Axios)
```javascript
const response = await axios.post(
  `${API_URL}/api/sequence/start-process`,
  {
    nodes: [...],
    edges: [...]
  },
  {
    headers: {
      'Content-Type': 'application/json'
    }
  }
);
```



###### Success Response (200 OK)
```json
{
  "status": "ok"
}
```

## Notes

- The API follows RESTful conventions
- All timestamps are in ISO 8601 format
- Rate limiting may apply in production
- CORS is enabled for specified origins only
