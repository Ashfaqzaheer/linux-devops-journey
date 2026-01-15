THRESHOLD=80
USAGE=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')

if [ "$USAGE" -gt "$THRESHOLD" ]; then
	echo "WARNING: Disk usage is above ${THRESHOLD}%"
else

	echo "Disk usage is under control"
fi
