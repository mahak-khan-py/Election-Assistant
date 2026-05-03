# GCP Deployment Guide for Election Assistant

To deploy this project to Google Cloud Platform (GCP) using Cloud Run, follow these steps:

## Prerequisites

1.  A Google Cloud account and a project created.
2.  Google Cloud SDK (`gcloud` CLI) installed locally.
3.  Docker installed and running.

## Step 1: Build and Push the Image

Open your terminal and run:

```bash
# Set your project ID
export PROJECT_ID="natural-oath-495207-p7"

# Build the Docker image
docker build -t gcr.io/$PROJECT_ID/election-assistant .

# Configure Docker for gcloud
gcloud auth configure-docker

# Push the image to Google Container Registry
docker push gcr.io/$PROJECT_ID/election-assistant
```

## Step 2: Deploy to Cloud Run

```bash
gcloud run deploy election-assistant \
  --image gcr.io/$PROJECT_ID/election-assistant \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

## Alternative: Using Artifact Registry

If you prefer Artifact Registry (recommended):

```bash
# Create a repository
gcloud artifacts repositories create election-repo \
    --repository-format=docker \
    --location=us-central1

# Build and push using Cloud Build (Easiest)
gcloud builds submit --tag us-central1-docker.pkg.dev/$PROJECT_ID/election-repo/election-assistant .

# Deploy
gcloud run deploy election-assistant \
    --image us-central1-docker.pkg.dev/$PROJECT_ID/election-repo/election-assistant \
    --region us-central1 \
    --allow-unauthenticated
```

Once deployed, you will receive a URL where the Election Assistant is live!
