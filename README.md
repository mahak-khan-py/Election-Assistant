# Vote Assistant - Indian Election Interactive Guide

Vote Assistant is a premium, interactive web application designed to educate users about the Indian electoral process (Lok Sabha and State Assemblies). It features a modern, responsive design and an integrated chat assistant to answer common questions.

## 🌟 Features

- **Interactive Timeline**: A visual journey through the election cycle.
- **How-to-Vote Guide**: A simplified 5-step guide for voters.
- **Educational Flashcards**: Master election terminology with ease.
- **Knowledge Quiz**: Test your understanding of the democratic process.
- **Smart Chat Assistant**: Get instant answers to election-related queries.

## 🚀 Getting Started

### Local Development

Since this is a vanilla HTML/CSS/JS project, you can simply open `index.html` in your browser.

Alternatively, if you have Python installed, you can run a simple server:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000`.

### Deployment to GCP

This project is pre-configured for **Google Cloud Run**.

1.  Refer to [deploy.md](./deploy.md) for detailed step-by-step instructions.
2.  Use the provided [Dockerfile](./Dockerfile) to build your container image.

## 🛠️ Project Structure

- `index.html`: The main application layout.
- `src/styles.css`: Custom design system and animations.
- `src/app.js`: Interactivity and logic.
- `src/data.js`: Content repository for the assistant.
- `Dockerfile`: Container configuration for Nginx hosting.

## 📄 License

This project is open-source and available under the MIT License.
