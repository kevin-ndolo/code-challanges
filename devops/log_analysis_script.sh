#!/bin/bash



# Log Analysis Script
#   Write a bash script that analyzes web server logs:
#   Count unique IP addresses
#   Find the most requested URLs
#   Identify error rates (4xx, 5xx responses)
#   Generate a summary report with time



# Input: Path to log file (can be .log or .gz)
LOG_FILE="$1"

# Validate input
if [[ -z "$LOG_FILE" ]]; then
  echo "Usage: $0 <log_file_path>"
  exit1
fi


# Handle compressed logs
if [[ "$LOG_FILE" == *.gz ]]; then
  LOG_CONTENT=$(zcat "$LOG_FILE")
else
  LOG_CONTENT=$(cat "$LOG_FILE")
fi