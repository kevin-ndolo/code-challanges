#!/bin/bash




# Service Deployment Script
#   Write a deployment script that:
#     Stops the current service gracefully
#     Backs up current version
#     Deploys new version from artifact
#     Runs health checks
#     Rolls back on failure
#     Updates load balancer/reverse proxy





# Configurable paths
SERVICE_NAME="myapp"
SERVICE_DIR="/opt/$SERVICE_NAME"
BACKUP_DIR="/opt/${SERVICE_NAME}_backup"
ARTIFACT_PATH="./new_version.tar.gz"
HEALTH_CHECK_URL="http://localhost:8080/health"
NGINX_CONFIG="/etc/nginx/sites-enabled/$SERVICE_NAME.conf"




# Stop service gracefully
echo "Stopping service: $SERVICE_NAME"
systemctl stop $SERVICE_NAME


# Backup current version
echo "Backing up current version..."
if [[ -d "$SERVICE_DIR" ]]; then
  rm -rf "$BACKUP_DIR"
  cp -r "$SERVICE_DIR" "$BACKUP_DIR"
  echo "Backup created at $BACKUP_DIR"
else
  echo "No existing service directory found. Skipping backup."
fi


# Deploy new version
echo "Deploying new version..."
rm -rf "$SERVICE_DIR"
mkdir -p "$SERVICE_DIR"
tar -xzf "$ARTIFACT_PATH" -C "$SERVICE_DIR"


# Start service
echo "Starting service: $SERVICE_NAME"
systemctl start "$SERVICE_NAME"
sleep 5  # Give it time to start


# Health check
echo "Checking service health..."
STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$HEALTH_CHECK_URL")

if [[ "$STATUS" == "200" ]]; then
    echo "Deployment successful!"
else
  echo "Health check failed. Rolling back..."
  systemctl stop "$SERVICE_NAME"
  rm -rf "$SERVICE_DIR"
  cp -r "$BACKUP_DIR" "$SERVICE_DIR"
  systemctl start "$SERVICE_NAME"
  echo "Rolled back to previous version."
fi




#Reload reverse proxy
echo "Reloading Nginx..."
nginx -t && systemctl reload nginx

