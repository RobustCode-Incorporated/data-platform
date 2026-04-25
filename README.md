# Data Platform - E-Government Data Simulation System

**Version:** 1.0.0  
**Language:** JavaScript (100%)  
**License:** ISC

## 📋 Overview

The **Data Platform** is a sophisticated Node.js-based data engineering simulation system designed for e-government operations. It generates, processes, and simulates realistic citizen data flows through a PostgreSQL database, enabling comprehensive testing and validation of government service requests and citizen interactions.

This platform orchestrates complex data workflows combining citizen generation, request processing, and administrative workflows to create realistic simulations of government platform operations.

## 🏗️ Architecture

```
data-platform/
│
├── generators/                 # Data Generation Layer
│   ├── citizen.generator.js    # Creates realistic citizen profiles
│   ├── request.generator.js    # Generates citizen requests and petitions
│
├── simulators/                 # Business Logic & Simulation Layer
│   ├── activity.simulator.js   # Simulates citizen activity patterns
│   ├── admin.processor.js      # Processes administrative workflows
│
├── config/                     # Configuration Management
│   ├── communes.config.js      # Municipality/commune settings
│   ├── behavior.config.js      # Behavioral patterns and rules
│
├── services/                   # Business Services Layer
│   ├── citizen.service.js      # Citizen management services
│   ├── request.service.js      # Request handling services
│
├── utils/                      # Technical Utilities
│   ├── db.js                   # PostgreSQL connection pool
│   ├── random.js               # Randomization utilities
│
├── jobs/                       # Automation & Orchestration
│   ├── run.simulation.js       # Simulation orchestrator
│
├── package.json                # Project dependencies
└── test.js                     # Database connectivity testing
```

## 🔄 Data Flow Pipeline

The system implements a sophisticated data processing pipeline:

```
run.simulation.js (Orchestrator)
    ↓
activity.simulator.js (Activity Simulation)
    ↓
citizen.generator.js (Citizen Generation)
    ↓
request.generator.js (Request Generation)
    ↓
admin.processor.js (Administrative Processing)
    ↓
PostgreSQL (Data Persistence)
```

### Pipeline Description

1. **Orchestrator** (`run.simulation.js`): Initiates and coordinates the entire simulation lifecycle
2. **Activity Simulation** (`activity.simulator.js`): Simulates realistic citizen behavior and activity patterns
3. **Citizen Generation** (`citizen.generator.js`): Generates synthetic citizen profiles with realistic attributes
4. **Request Generation** (`request.generator.js`): Creates government service requests and petitions
5. **Administrative Processing** (`admin.processor.js`): Handles administrative workflows and request processing
6. **Persistence** (PostgreSQL): Stores all generated and processed data

## 🚀 Getting Started

### Prerequisites

- **Node.js:** v14.0.0 or higher
- **PostgreSQL:** v12 or higher
- **npm:** v6.0.0 or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RobustCode-Incorporated/data-platform.git
   cd data-platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   Create a `.env` file in the root directory:
   ```env
   # PostgreSQL Connection
   DATABASE_URL=postgresql://username:password@localhost:5432/data_platform
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=data_platform
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   
   # Simulation Settings
   SIMULATION_BATCH_SIZE=100
   SIMULATION_INTERVAL=5000
   FAKER_LOCALE=fr_FR
   ```

4. **Initialize the database:**
   ```bash
   npm run test:db
   ```

### Usage

#### Run the Simulation

```bash
npm start
```

This command executes the complete data simulation pipeline:
- Generates citizen profiles
- Creates citizen requests
- Simulates administrative processing
- Persists all data to PostgreSQL

#### Test Database Connection

```bash
npm run test:db
```

Verifies PostgreSQL connectivity and returns current timestamp.

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `@faker-js/faker` | ^10.4.0 | Realistic synthetic data generation |
| `dotenv` | ^17.4.2 | Environment variable management |
| `pg` | ^8.20.0 | PostgreSQL database driver |

## 🔧 Core Modules

### Generators
- **citizen.generator.js**: Generates realistic citizen data using Faker.js
- **request.generator.js**: Creates citizen requests with various types and statuses

### Simulators
- **activity.simulator.js**: Models citizen interaction patterns and behaviors
- **admin.processor.js**: Simulates administrative workflows and decision-making

### Services
- **citizen.service.js**: CRUD operations and citizen management
- **request.service.js**: Request lifecycle management and tracking

### Utilities
- **db.js**: PostgreSQL connection pool initialization
- **random.js**: Custom randomization functions for realistic data patterns

### Configuration
- **communes.config.js**: Municipality and regional settings
- **behavior.config.js**: Behavioral rules and activity patterns

## 📊 Database Schema

The platform expects PostgreSQL tables for:
- `citizens`: Citizen profile information
- `requests`: Citizen requests and petitions
- `request_history`: Request status tracking and history
- `activities`: Citizen activity logs

## 🛠️ Development

### Project Scripts

```json
{
  "start": "node data-platform/jobs/run.simulation.js",
  "test:db": "node test.js"
}
```

### Best Practices

1. **Environment Configuration**: Always use `.env` for sensitive credentials
2. **Connection Pooling**: Database connections are pooled through `pg` for performance
3. **Error Handling**: Comprehensive error logging for debugging
4. **Modular Design**: Each module has a single responsibility

## 🔐 Security Considerations

- Never commit `.env` files to version control
- Use environment variables for all credentials
- Implement proper database user permissions
- Validate all generated data before persistence

## 🐛 Troubleshooting

### Database Connection Failed
```bash
# Verify PostgreSQL is running
# Check .env file has correct DATABASE_URL
npm run test:db
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Port Already in Use
```bash
# Change DATABASE_URL in .env to use different port
DATABASE_URL=postgresql://user:pass@localhost:5433/data_platform
```

## 📈 Performance Optimization

- Use batch processing for large data sets
- Implement connection pooling (already configured)
- Monitor database query performance
- Archive historical data periodically

## 📄 License

ISC License - See LICENSE file for details

## 👥 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## ✍️ Author

**JEAN-LUC LUZEMBA**  
Data Engineering & Platform Development  
[LinkedIn Profile](https://www.linkedin.com/in/jean-luc-luzemba-01a157233/)

---

**Repository:** [RobustCode-Incorporated/data-platform](https://github.com/RobustCode-Incorporated/data-platform)  
**Last Updated:** 2026-04-25