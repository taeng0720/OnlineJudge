# oj-backend/Dockerfile
FROM registry.cn-hongkong.aliyuncs.com/oj-image/backend:1.6.1

# Set environment variables
ENV POSTGRES_DB=onlinejudge \
    POSTGRES_USER=onlinejudge \
    POSTGRES_PASSWORD=onlinejudge \
    JUDGE_SERVER_TOKEN=CHANGE_THIS

# Copy backend data
COPY ./data/backend /data
COPY ./data/OnlineJudgeDeploy/data/backend/dist /app/dist

# Expose necessary ports
EXPOSE 8000 1443
