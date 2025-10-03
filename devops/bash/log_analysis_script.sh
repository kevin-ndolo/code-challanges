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
  exit 1
fi


# Handle compressed logs
if [[ "$LOG_FILE" == *.gz ]]; then
  LOG_CONTENT=$(zcat "$LOG_FILE")
  echo "Successfully loaded $(echo "$LOG_CONTENT" | wc -l) lines"
else
  LOG_CONTENT=$(cat "$LOG_FILE")
  echo "Successfully loaded $(echo "$LOG_CONTENT" | wc -l) lines"
fi


# Count unique IP addresses
UNIQUE_IPS=$(echo "$LOG_CONTENT" | awk '{print $1}' | sort | uniq | wc -l )
echo "Total number of unique ip addresses is: $UNIQUE_IPS"


# Most requested URLs
MOST_REQUESTED_URLS=$(echo "$LOG_CONTENT" | awk '{print $7}'| sort | uniq -c | head -5 )
echo "The most requested urls are $MOST_REQUESTED_URLS"



#   Identify error rates (4xx, 5xx responses)
TOTAL_REQUESTS=$(echo "$LOG_CONTENT" | wc -l)
echo "Total number of requests is $TOTAL_REQUESTS"

ERROR_4XX=$(echo "$LOG_CONTENT" | awk '$9 ~ /^4/ {count ++} END {print count+0}')
echo "Total number of 4XX errors is $ERROR_4XX"

ERROR_5XX=$(echo "$LOG_CONTENT" | awk '$9 ~ /^5/ {count ++} END {print count+0}')
echo "Total number of 5XX errors is $ERROR_5XX"

ERROR_4XX_RATE=$(awk "BEGIN {printf \"%.2f\", ($ERROR_4XX/$TOTAL_REQUESTS)*100}")
echo "4xx Error Rate: $ERROR_4XX_RATE%"

ERROR_5XX_RATE=$(awk "BEGIN {printf \"%.2f\", ($ERROR_5XX/$TOTAL_REQUESTS)*100}")
echo "5xx Error Rate: $ERROR_5XX_RATE%"