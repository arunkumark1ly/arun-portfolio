# ArunKumar Kandasamy - Portfolio

A modern portfolio website built with React, Express, and Google Sheets integration for lead capture.

## Features

- **Modern UI**: Built with React, TypeScript, and TailwindCSS
- **Server-side**: Express.js backend with API endpoints
- **Lead Capture**: Email and phone collection before resume download
- **Google Sheets Integration**: All submissions stored in Google Sheets (no database required)
- **Resume Download**: PDF and DOCX formats available
- **Responsive Design**: Works on all devices

## Quick Start

### Prerequisites

- Node.js (v20+)
- npm or yarn
- Google Account (for Sheets integration)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd arun-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up Google Sheets integration (see [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md))

4. Configure environment variables:
```bash
cp .env.example .env
# Edit .env with your Google Sheets configuration
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:5000](http://localhost:5000)

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # React components
│   │   └── pages/         # Page components
├── server/                # Express backend
│   ├── google-sheets.ts   # Google Sheets integration
│   ├── storage.ts         # Data storage layer
│   └── routes.ts          # API routes
├── shared/                # Shared types and schemas
└── attached_assets/       # Static assets
```

## Key Changes from Database Version

This version has been migrated from PostgreSQL to Google Sheets:

- ✅ **No database setup required**
- ✅ **Zero maintenance overhead**
- ✅ **Easy data access through Google Sheets**
- ✅ **Automatic backups and version history**
- ✅ **Simple collaboration**

### What was removed:
- PostgreSQL database dependencies
- Drizzle ORM
- Database migrations
- Complex database configuration

### What was added:
- Google Sheets API integration
- Service account authentication
- Fallback logging system
- Static data storage for portfolio content

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - TypeScript type checking

## Google Sheets Integration

The application uses Google Sheets to store:
- Contact form submissions
- Resume download requests (email + phone)

Setup instructions are provided in [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md).

### Sheet Structure

- **Messages Sheet**: ID, Name, Email, Message, Created At
- **ResumeAccess Sheet**: ID, Email, Phone, Accessed At

## Environment Variables

```bash
# Google Sheets Configuration
GOOGLE_APPLICATION_CREDENTIALS="/path/to/service-account-key.json"
GOOGLE_SHEETS_SPREADSHEET_ID="your_spreadsheet_id"

# Server Configuration
PORT=5000
NODE_ENV=development
```

## Deployment

### Production Deployment

1. Build the application:
```bash
npm run build
```

2. Set production environment variables
3. Start the server:
```bash
npm run start
```

### Environment-Specific Notes

- **Development**: Uses Vite for hot reloading
- **Production**: Serves static files from `dist/`

## Security

- Service account keys should never be committed to version control
- Use environment variables for sensitive configuration
- Google Sheets permissions should be set to "Editor" for the service account

## Troubleshooting

### Common Issues

1. **Google Sheets not working**: Check service account permissions and spreadsheet ID
2. **Build errors**: Ensure all dependencies are installed
3. **Port conflicts**: Change PORT environment variable

See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for detailed troubleshooting.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details.

## Contact

- **Email**: kandasamy1ly@gmail.com
- **LinkedIn**: [arun1ly](https://linkedin.com/in/arun1ly)
- **GitHub**: [arunkumark1ly](https://github.com/arunkumark1ly)
