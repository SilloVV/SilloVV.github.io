# API Chat IA - Wassil NAKIB

Cette API permet au chat du portfolio de communiquer avec l'IA Cerebras pour des réponses authentiques en tant que Wassil NAKIB.

## Installation

1. Installer les dépendances :
```bash
pip install -r requirements.txt
```

2. Créer le fichier `.env` avec votre clé API Cerebras :
```bash
cp .env.example .env
# Éditer .env et ajouter votre clé API Cerebras
```

3. Obtenir une clé API Cerebras sur https://cloud.cerebras.ai/

## Lancement

```bash
python api_server.py
```

L'API sera disponible sur `http://localhost:5000`

## Endpoints

- `POST /chat` - Envoie un message et reçoit une réponse IA
- `GET /health` - Vérification de l'état de l'API

## Configuration du portfolio

Le JavaScript du portfolio est déjà configuré pour utiliser cette API avec un fallback vers les réponses prédéfinies si l'API n'est pas disponible.