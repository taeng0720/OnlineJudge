# oj-postgres/Dockerfile
FROM postgres:10-alpine

# Set environment variables
ENV POSTGRES_DB=onlinejudge \
    POSTGRES_USER=onlinejudge \
    POSTGRES_PASSWORD=onlinejudge

# Expose the default PostgreSQL port
EXPOSE 5432

# Use a custom init script if needed
# COPY init.sql /docker-entrypoint-initdb.d/
