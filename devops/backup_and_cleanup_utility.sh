#!/bin/bash

# Backup and Cleanup Utility
#   Build a backup script that:
#     Creates compressed backups of specified directories
#     Rotates old backups (keep last N days)
#     Verifies backup integrity
#     Sends notifications on success/failure
#     Handles exclusion patterns (.gitignore style)






# Configurable Inputs
SOURCE_DIR="$1"
BACKUP_DIR="./backups"
DAYS_TO_KEEP=7
IGNORE_FILE=".backupignore"


# Validate input
if [[ -z "$SOURCE_DIR" ]]; then
  echo "Usage: $0 <source_directory>"
  exit 1
fi


# Create backup directory if missing
if [[ ! -d  "$BACKUP_DIR" ]]; then
  mkdir -p "$BACKUP_DIR"
  echo "Created backup directory: $BACKUP_DIR"
else 
  echo "Backup directory already exists: $BACKUP_DIR"
fi



# Timestamp for backup name
TIMESTAMP=$(date "+%Y-%m-%d_%H-%M-%S")
BACKUP_NAME="backup_$TIMESTAMP.tar.gz"
BACKUP_PATH="$BACKUP_DIR/$BACKUP_NAME"



# Exclusion list
EXCLUDES=""

if [[ -f "$SOURCE_DIR/$IGNORE_FILE" ]]; then
  while read -r pattern; do
    EXCLUDES+="--exclude=$pattern "
  done < "$SOURCE_DIR/$IGNORE_FILE"
fi



# Create compressed backup
tar -czf "$BACKUP_PATH" "$SOURCE_DIR" $EXCLUDES -C "$SOURCE_DIR" .



# Verify backup integrity
if tar -tzf "$BACKUP_PATH" > /dev/null 2>&1; then
  echo "Backup created: $BACKUP_PATH"
else
  echo "Backup failed: $BACKUP_PATH"
  exit 1
fi



# Rotate old backups
find "$BACKUP_DIR" -type f -name "*.tar.gz" -mtime +$DAYS_TO_KEEP -exec rm {} \;



# Log result
echo "[$(date)] Backup completed: $BACKUP_NAME">> "$BACKUP_DIR/backup.log"







