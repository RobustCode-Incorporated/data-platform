# data-platform

## architecture 
'''
data-platform/
│
├── generators/           # création de données
│   ├── citizen.generator.js
│   ├── request.generator.js
│
├── simulators/           # comportement dynamique
│   ├── activity.simulator.js
│   ├── admin.processor.js
│
├── config/               # configuration data
│   ├── communes.config.js
│   ├── behavior.config.js
│
├── services/             # logique métier data
│   ├── citizen.service.js
│   ├── request.service.js
│
├── utils/                # fonctions techniques
│   ├── db.js
│   ├── random.js
│
├── jobs/                 # automatisation
│   ├── run.simulation.js
│
└── README.md

'''
## Exemple de flux réel
'''
run.simulation.js
    ↓
activity.simulator.js
    ↓
citizen.generator.js
    ↓
request.generator.js
    ↓
admin.processor.js
    ↓
PostgreSQL

'''

