# Backend Generator

A tool to generate custom Node.js/Express backend projects with predefined templates.

## Features

- **Simple Form Interface**: Easy-to-use React frontend for configuring backend components
- **Customizable Structure**: Generate backends with custom directory and file names
- **Template-Based**: Uses predefined templates for controllers, models, middleware, routes, schemas, and utilities
- **ZIP Download**: Automatically packages and downloads the generated backend as a ZIP file

## Project Structure

```
Backend-Generator/
├── backend/                    # Node.js backend server
│   ├── server.js              # Express server setup
│   ├── routes/generate.js     # ZIP generation endpoint
│   └── readBackend/           # Template source files
│       ├── controllers/       # Controller templates
│       ├── Models/           # Model and schema templates
│       ├── middleware/       # Middleware templates
│       ├── routes/           # Route templates
│       └── utils.js          # Utility functions
├── frontend/                  # React application
│   ├── src/components/       # Form component
│   └── package.json          # Frontend dependencies
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Backend-Generator
   ```

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server**

   ```bash
   cd backend
   npm start
   ```

   The backend will run on `http://localhost:3000`

2. **Start the frontend development server**

   ```bash
   cd frontend
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## How to Use

1. **Enter Directory Name**: Provide a name for your main backend directory
2. **Configure Components**: Fill in the names for:
   - Controller
   - Middleware
   - Model
   - Schema
   - Utility
3. **Generate Backend**: Click the "Generate & Download Backend" button
4. **Download**: The application will automatically download a ZIP file containing your backend structure

## Generated Backend Structure

The generated backend will include:

```
your-project-name/
├── controllers/
│   └── [controllerName].js
├── middleware/
│   └── [middlewareName].js
├── Models/
│   ├── [modelName].js
│   └── schemas/
│       └── [schemaName].js
├── routes/
│   └── [routeName].js
├── utils/
│   └── [utilName].js
├── package.json
├── package-lock.json
└── config.js
```

## Technologies Used

### Backend

- **Express.js**: Web framework
- **Mongoose**: MongoDB ODM
- **JWT**: Authentication
- **bcrypt**: Password hashing
- **archiver**: ZIP file creation
- **CORS**: Cross-origin resource sharing

### Frontend

- **React**: UI library
- **TypeScript**: Type safety
- **Vite**: Build tool
- **TailwindCSS**: Styling
- **Axios**: HTTP client
- **Lucide React**: Icons

## API Endpoints

- `POST /generate`: Generates and downloads a ZIP file with the backend structure

### Request Body

```json
{
  "directoryName": "string",
  "controllerFileName": "string",
  "middlewareFileName": "string",
  "modelFileName": "string",
  "routeFileName": "string",
  "schemaFileName": "string",
  "utilFileName": "string"
}
```

## Development

### Backend Development

- The backend uses Express.js with a modular structure
- Templates are stored in `backend/readBackend/`
- The generate route creates ZIP files using the archiver library

### Frontend Development

- Built with React and TypeScript
- Uses Vite for fast development
- Styled with TailwindCSS
- Form validation and error handling included

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.
