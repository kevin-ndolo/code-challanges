#!/bin/bash


# System Health Monitor
#   Create a monitoring script that:
#     Checks CPU, memory, and disk usage
#     Monitors running services/processes
#     Sends alerts when thresholds are exceeded
#     Logs results with timestamps
#     Supports configuration via command line arguments



CPU_THRESHOLD=80
MEM_THRESHOLD=80
DISK_THRESHOLD=80
LOG_FILE="health.log"


#  Parse command-line arguments

while [[ $# -gt 0 ]]; do
  case "$1" in
    --cpu)
      CPU_THRESHOLD="$2"
      shift 2
      ;;
    --mem)
      MEM_THRESHOLD="$2"
      shift 2
      ;;
    --disk)
      DISK_THRESHOLD="$2"
      shift 2
      ;;
    --log)
      LOG_FILE="$2"
      shift 2
      ;;
    *)
      echo "Usage: $0 [--cpu %] [--disk %] [--disk %] [--log file]"
      exit 1
      ;;
  esac
done



# Timestamp
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")


# CPU usage (%)
CPU_USAGE=$(top -bn1 | grep "Cpus(s)" | awk '{print 100 - $8}')
CPU_ALERT="OK"
if ((${CPU_USAGE%.*} > CPU_THRESHOLD)); then
  CPU_ALERT="HIGH"
fi


# Memory Usage (%)
MEM_USAGE=$(free | awk '/Mem/ {printf("%.2f", $3/$2 * 100)}')
MEM_ALERT="OK"
if (( ${MEM_USAGE%.*} > MEM_THRESHOLD )); then
  MEM_ALERT="HIGH"
fi


# Disk Usage (% of root)
DISK_USAGE=$(df / | awk 'NR==2 {print $5}' | tr -d '%')
DISK_ALERT="OK"
if (( DISK_USAGE > DISK_THRESHOLD )); then
  DISK_ALERT="HIGH"
fi


# Running Services (basic check)
TOP_PROCESSES=$(ps -eo pid,comm,%cpu,%mem --sort=-%cpu | head -5)


# Log Summary
echo "[$TIMESTAMP] CPU: $CPU_USAGE% ($CPU_ALERT), MEM: $MEM_USAGE% ($MEM_ALERT), DISK: $DISK_USAGE% ($DISK_ALERT)" >> "$LOG_FILE"
echo "Top Processes:" >> "$LOG_FILE"
echo "$TOP_PROCESSES" >> "$LOG_FILE"
echo "----------------------------------------" >> "$LOG_FILE"


# Alert Output
echo "[$TIMESTAMP]"
echo "CPU Usage: $CPU_USAGE% ($CPU_ALERT)"
echo "Memory Usage: $MEM_USAGE% ($MEM_ALERT)"
echo "Disk Usage: $DISK_USAGE% ($DISK_ALERT)"
echo "Top Processes:"
echo "$TOP_PROCESSES"