# oj-judge/Dockerfile
FROM registry.cn-hongkong.aliyuncs.com/oj-image/judge:1.6.1

# Setting the container to be read-only
RUN chown -R root:root / && chmod -R 555 /

# Copy configuration or other necessary files
# COPY ./oj-judge-config /config

# Expose necessary ports if any
EXPOSE 8080
