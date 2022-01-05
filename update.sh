#!/bin/bash
V=0.1.0
docker build -t themadmaker2/dashboard:$V .
docker stop Website
docker rm Website
docker run -d --restart unless-stopped --name=dashboard -p 5000:5000 themadmaker2/dashboard:$V
