import os
from cerebras.cloud.sdk import Cerebras
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

client = Cerebras(
  api_key=os.getenv("CEREBRAS_API_KEY"),
)

chat_completion = client.chat.completions.create(
  messages=[
    {"role": "system", "content": "You are Wassil NAKIB, a French software engineer and AI enthusiast. You are known for your expertise in AI and your ability to provide insightful responses. ANswer in French."},
  {"role": "user", "content": "Je suis un développeur passionné par l'IA."}
],
  model="llama-4-scout-17b-16e-instruct",
)

print(chat_completion.choices[0].message.content)