# KAWACH C2C

<div align="center">

![KAWACH Logo](frontend/images/logo.png)

**A defense-grade WebRTC communication platform for military and security operations**

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2016.0.0-brightgreen)](https://nodejs.org/)
[![Docker](https://img.shields.io/badge/docker-supported-blue)](https://www.docker.com/)

</div>

## 🔒 About KAWACH

KAWACH C2C is a free, open-source WebRTC-based video calling application specifically designed for defense personnel, military operations, and security-conscious organizations. Built with military-grade encryption and zero data collection policies, KAWACH provides a secure communication platform that meets the stringent security requirements of defense and intelligence communities.

### 🛡️ Defense & Military Applications

- **🎖️ Military Operations**: Secure communication for field operations and command centers
- **🏛️ Government Agencies**: Classified briefings and inter-agency coordination
- **🔐 Intelligence Services**: Covert operations and sensitive information sharing
- **🚁 Emergency Response**: Critical communication during crisis situations
- **📡 Remote Deployments**: Secure connectivity for personnel in remote locations
- **🎯 Tactical Communications**: Real-time coordination for tactical operations

### 🌟 Key Security Features

- **🔐 Military-Grade Encryption**: AES-256 encryption with DTLS/SRTP protocols for defense-level security
- **🚫 Zero Data Collection**: No logs, metadata, or personal information stored - perfect for classified operations
- **🛡️ Air-Gapped Deployment**: Can be deployed on isolated networks for maximum security
- **📱 Cross-Platform Compatibility**: Secure communication across all military devices and platforms
- **🖥️ Secure Screen Sharing**: Share tactical maps, intelligence reports, and operational data safely
- **📹 Local Recording Only**: All recordings stored locally on authorized devices, never on external servers
- **💬 Encrypted Messaging**: End-to-end encrypted text communication for operational coordination
- **🔒 Authentication Ready**: Supports integration with military authentication systems
- **🌐 Self-Hosted**: Complete control over infrastructure - no third-party dependencies
- **⚡ Low-Latency Communication**: Real-time coordination critical for time-sensitive operations

## 🚀 Quick Start

### Prerequisites

- Node.js (v16.0.0 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone 
   cd KAWACH
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.template .env
   # Edit .env file with your configuration
   ```

4. **Start the application**
   ```bash
   npm start
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:8080`

## 🐳 Docker Deployment

### Using Docker Compose

```bash
# Build and run with Docker Compose
docker-compose up -d
```

### Manual Docker Commands

```bash
# Build the image
npm run docker-build

# Run the container
npm run docker-run

# Run with environment file
npm run docker-rune
```

## 📁 Project Structure

```
KAWACH/
├── backend/                 # Server-side code
│   ├── api/                # API endpoints
│   ├── lib/                # Utility libraries
│   ├── ssl/                # SSL certificates
│   └── server.js           # Main server file
├── frontend/               # Client-side code
│   ├── css/               # Stylesheets
│   ├── html/              # HTML templates
│   ├── js/                # JavaScript files
│   └── images/            # Static assets
├── docs/                  # Documentation
├── tests/                 # Test files
└── .env.template          # Environment configuration template
```

## ⚙️ Configuration

### Environment Variables

Copy `.env.template` to `.env` and configure the following variables:

```env
# Server Configuration
PORT=8080
HOST=localhost

# Security Settings
HTTPS_ENABLED=false
SSL_CERT_PATH=./backend/ssl/cert.pem
SSL_KEY_PATH=./backend/ssl/key.pem

# WebRTC Configuration
STUN_SERVER_URL=stun:stun.l.google.com:19302
TURN_SERVER_URL=
TURN_USERNAME=
TURN_PASSWORD=

# Additional Features
SENTRY_DSN=
NGROK_ENABLED=false
NGROK_AUTH_TOKEN=
```

## 🔧 Development

### Development Mode

```bash
# Start with nodemon for auto-restart
npm run start-dev
```

### Testing

```bash
# Run tests
npm test
```

### Code Formatting

```bash
# Format code with Prettier
npm run lint
```

## 🌐 API Documentation

The application includes Swagger API documentation available at `/api/docs` when running the server.

### Key Endpoints

- `GET /` - Landing page
- `GET /home` - Main application interface
- `GET /client` - Client interface
- `POST /api/join` - Join a room
- `WebSocket` - Real-time communication via Socket.IO

## 🔒 Defense-Grade Security Architecture

### Military-Standard Encryption
- **AES-256 Encryption**: Industry-leading encryption standard used by defense organizations worldwide
- **WebRTC DTLS 1.2**: All media streams encrypted using Defense Transport Layer Security
- **SRTP**: Secure Real-time Transport Protocol with authenticated encryption for media streams
- **WSS**: Secure WebSocket connections with TLS 1.3 for signaling
- **Perfect Forward Secrecy**: Each session uses unique encryption keys that cannot be compromised retroactively

### Operational Security (OPSEC)
- **Zero-Knowledge Architecture**: Server has no access to call content or metadata
- **No Data Persistence**: Calls, messages, and metadata are never stored on any server
- **Peer-to-Peer Communication**: Direct encrypted channels between participants only
- **Local-Only Recording**: All recordings remain on authorized devices within secure perimeters
- **Memory Clearing**: Automatic clearing of sensitive data from system memory after sessions

### Defense Compliance Features
- **Air-Gap Compatible**: Can operate on completely isolated networks
- **TEMPEST Resistant**: Designed to minimize electromagnetic emanations
- **Multi-Factor Authentication Ready**: Integration support for military authentication systems
- **Audit Trail Capability**: Optional logging for compliance with defense regulations
- **Secure Boot Verification**: Ensures system integrity during startup

### Network Security
- **Content Security Policy (CSP)**: Prevents code injection attacks
- **HTTP Strict Transport Security (HSTS)**: Forces secure connections
- **X-Frame-Options**: Prevents clickjacking attacks
- **Certificate Pinning**: Prevents man-in-the-middle attacks
- **DDoS Protection**: Built-in protection against denial of service attacks

## 🌍 Deployment Options

### Defense Deployment Scenarios

1. **Secure Military Networks**
   - Deploy on classified networks (SIPR, JWICS)
   - Air-gapped deployment for maximum security
   - Integration with existing military infrastructure

2. **Forward Operating Bases (FOB)**
   - Tactical deployment for field operations
   - Satellite uplink compatibility
   - Ruggedized server configurations

3. **Government Data Centers**
   - High-availability deployment with redundancy
   - Compliance with government security standards
   - Integration with existing authentication systems

4. **Emergency Command Centers**
   - Rapid deployment for crisis response
   - Mobile command post compatibility
   - Backup communication systems

### Reverse Proxy

Example Nginx configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```


### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run the test suite
6. Submit a pull request


## 🙏 Acknowledgments

- Built with [WebRTC](https://webrtc.org/) technology
- Powered by [Socket.IO](https://socket.io/) for real-time communication
- UI components inspired by modern design principles

---
