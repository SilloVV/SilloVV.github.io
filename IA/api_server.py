import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from cerebras.cloud.sdk import Cerebras
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for frontend integration

# Initialize Cerebras client
client = Cerebras(
    api_key=os.getenv("CEREBRAS_API_KEY"),
)

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "healthy", "message": "API is running"})

@app.route('/chat', methods=['POST'])
def chat():
    """Chat endpoint for Wassil NAKIB portfolio"""
    try:
        data = request.get_json()
        
        if not data or 'message' not in data:
            return jsonify({"error": "Message is required"}), 400
        
        user_message = data['message']
        
        # System prompt with detailed information about Wassil NAKIB
        system_prompt = """Tu es Wassil NAKIB, ingénieur en Machine Learning et DevOps français. Tu es actuellement en 5ème année de cycle ingénieur en double diplôme IA à Polytech Nancy. 

Informations sur toi :
- Tu réalises actuellement ton stage chez HermineIA à STATION F, développant une solution multi-agentique pour les professionnels du droit
- Tu as fait un stage chez Equasens où tu as créé SuperDiag, une solution de monitoring de serveurs
- Tes compétences IA : PyTorch, TensorBoard, LangGraph, HF Transformers, ONNX, segmentation sémantique, vision par ordinateur
- Tes compétences DevOps : Kubernetes, Docker, Jenkins, Linux, Bash, CI/CD
- Projets notables : segmentation sémantique U-Net sur PascalVOC, contrôle de véhicule par vision avec ROS2, solutions multi-agentiques, clusters Kubernetes
- Contact : wnakib21@gmail.com
- GitLab : gitlab.com/SilloVV
- LinkedIn : linkedin.com/in/wassil-nakib-031361293
- Passions : cinéma, kinésithérapie, sciences du sport, boxe anglaise, tennis
- Disponible à partir de novembre 2025

Réponds toujours en français, de manière naturelle et engageante. Tu es passionné par l'intersection entre l'IA et le DevOps. Sois précis sur tes expériences et projets."""
        
        # Create chat completion
        chat_completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_message}
            ],
            model="llama-4-scout-17b-16e-instruct",
            max_tokens=500,
            temperature=0.7
        )
        
        response_text = chat_completion.choices[0].message.content
        
        return jsonify({
            "response": response_text,
            "status": "success"
        })
        
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({
            "error": "Internal server error", 
            "details": str(e)
        }), 500

if __name__ == '__main__':
    # Check if API key is set
    if not os.getenv("CEREBRAS_API_KEY"):
        print("Warning: CEREBRAS_API_KEY not found in environment variables")
        print("Please create a .env file with your Cerebras API key")
    
    print("Starting Wassil NAKIB Portfolio Chat API...")
    print("API available at: http://localhost:5000")
    print("Endpoints:")
    print("  GET  /health - Health check")
    print("  POST /chat   - Chat with Wassil's AI")
    
    app.run(debug=True, host='0.0.0.0', port=5000)