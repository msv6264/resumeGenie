# 💼 Resume Genie

Resume Genie is an AI-powered resume builder that generates ATS-friendly resumes from user profiles like GitHub or LinkedIn. It uses Cohere's large language model to craft professional summaries, skill sets, and experience sections — tailored to the user's chosen job role and preferences.

---

## ✨ Features

- 🔍 Extracts details from GitHub links or LinkedIn CSV files
- 🤖 Uses **Cohere AI** for content generation (profile summary, experience, skills, etc.)
- 🧠 Automatically aligns resume content with job roles (e.g., Web Developer, ML Engineer)
- 📄 Downloads formatted resumes as **PDF**
- ⚡ Clean, responsive UI built with **React**
- 🔧 API-powered backend using **Flask / Express**

---
## Frontend Setup
cd client
npm install
npm start

---
## Backend Setup (Flask)
cd server
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
