---

# Kubernetes Multi-Service Application

This project demonstrates Kubernetes deployment of a simple multi-service web application. It includes a Flask web server, a PostgreSQL database, and a Redis cache. The setup mirrors a typical Docker Compose workflow, but is fully translated into Kubernetes-native manifests.

## Architecture Overview

```
[Ingress]
   |
[web-service] (LoadBalancer)
   |
[webapp-deployment] (Flask app)
   |        |
   |        +--> [redis-service] --> [redis Deployment]
   |
   +--> [db-service] --> [db StatefulSet] + [PersistentVolumeClaim]
```

## Components

### 1. Deployment (`webapp-deployment`)
- Deploys 4 replicas of the Flask web application.
- Injects environment variables from a `ConfigMap` and a `Secret`.
- Exposes port `5000` (Flask default).
- Includes resource limits for CPU and memory.

### 2. Services (`service.yaml`)
- `web-service`: Exposes the Flask app via a `LoadBalancer` on port `80 → 5000`.
- `db-service`: Headless `ClusterIP` service for stable DNS to the Postgres `StatefulSet`.
- `redis-service`: Internal `ClusterIP` service for Redis.

### 3. ConfigMap (`configmap.yaml`)
- Stores non-sensitive configuration such as:
  - `FLASK_ENV`
  - `LOG_LEVEL`
  - `CACHE_TTL_SECONDS`
  - `API_BASE_URL`
- Injected into the web app as environment variables.

### 4. Secret (`secret.yaml`)
- Stores sensitive values:
  - `POSTGRES_USER`
  - `POSTGRES_PASSWORD`
  - `POSTGRES_DB`
- Injected into the Postgres container via environment variables.

### 5. StatefulSet (`statefulset.yaml`)
- Manages the Postgres database.
- Ensures stable network identity and persistent storage.
- Uses a `volumeClaimTemplate` to bind to a `PersistentVolumeClaim`.

### 6. PersistentVolumeClaim (`pvc.yaml`)
- Requests 1Gi of storage for Postgres data.
- Bound automatically by the `StatefulSet`.

### 7. Ingress (`ingress.yaml`)
- Routes HTTP traffic from `webapp.local` to the `web-service`.
- Requires an Ingress Controller (e.g., NGINX).
- For local testing, add to `/etc/hosts`:
  ```
  127.0.0.1 webapp.local
  ```

## Getting Started

Apply manifests in order:

```bash
kubectl apply -f configmap.yaml
kubectl apply -f secret.yaml
kubectl apply -f pvc.yaml
kubectl apply -f statefulset.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl apply -f ingress.yaml
```

1. Ensure your ingress controller is running.
2. Access the app at: `http://webapp.local/`

## Notes
- The database and cache are internal-only; only the web app is exposed externally.

