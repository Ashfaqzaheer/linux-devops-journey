import os
import redis

# Read config from environment
r = redis.Redis(
    host=os.getenv("REDIS_HOST"),
    port=os.getenv("REDIS_PORT")
)

r.set("status", "Redis Connected")
print(r.get("status").decode())
