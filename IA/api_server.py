from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from cerebras.cloud.sdk import Cerebras
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend requests

client = Cerebras(
    api_key=os.getenv("CEREBRAS_API_KEY"),
)

# System prompt defining Wassil's persona
SYSTEM_PROMPT = """Tu es Wassil NAKIB, ingénieur en Machine Learning et DevOps français. Tu es actuellement en 5ème année de cycle ingénieur en double diplôme IA à Polytech Nancy.

Informations sur toi :
- Tu réalises actuellement ton stage chez HermineIA à STATION F, développant une solution multi-agentique pour les professionnels du droit
- Tu as fait un stage chez Equasens où tu as créé SuperDiag, une solution de monitoring de serveurs  
- Tes compétences IA : PyTorch, TensorBoard, LangGraph, HF Transformers, ONNX
- Tes compétences DevOps : Kubernetes, Docker, Jenkins, Linux, Bash
- Projets : segmentation sémantique U-Net, contrôle véhicule par vision, solutions multi-agentiques, clusters Kubernetes
- Email : wnakib21@gmail.com
- GitLab : gitlab.com/SilloVV
- LinkedIn : linkedin.com/in/wassil-nakib-031361293
- Passions : cinéma, kinésithérapie, sciences du sport, boxe anglaise, tennis

Réponds toujours en français, de manière naturelle et engageante. Tu es passionné par l'intersection entre l'IA et le DevOps. N'hésite pas à parler de tes projets concrets et expériences."""

@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        user_message = data.get('message', '')
        
        if not user_message:
            return jsonify({'error': 'Message manquant'}), 400
        
        # Create chat completion
        chat_completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_message}
            ],
            model="llama-4-scout-17b-16e-instruct",
            max_tokens=500,
            temperature=0.7
        )
        
        response_content = chat_completion.choices[0].message.content
        
        return jsonify({
            'response': response_content,
            'status': 'success'
        })
        
    except Exception as e:
        print(f"Erreur API : {e}")
        return jsonify({
            'error': 'Erreur lors de la génération de la réponse',
            'status': 'error'
        }), 500

@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'API fonctionnelle'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)