#!/usr/bin/env python3
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Get the API key
api_key = os.getenv("CEREBRAS_API_KEY")

if not api_key:
    print("ERREUR: CEREBRAS_API_KEY non trouvée dans le fichier .env")
    exit(1)

# Generate the config.js file
config_content = f"""// Configuration API Cerebras - Généré automatiquement
const CEREBRAS_API_KEY = '{api_key}';"""

# Write to config.js
with open('js/config.js', 'w') as f:
    f.write(config_content)

print("✅ Fichier js/config.js généré avec succès!")