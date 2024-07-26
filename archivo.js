version: '3'

services:
  apigateway:
    container_name: api_gateway
    restart: always
    build: ./ApiGateway
    ports:
      - "3000:3000"
    networks:
      - babyLink

  autentication:
    build:
      context: ./microAuth
    ports:
      - "7000:7000"
    networks:
      - babyLink


  informacion:
    build:
      context: ./informacion
    ports:
      - "3001:3001"
    networks:
      -babyLink

  chat:
    build:
      context: ./chat
    ports:
      - "4000:4000"
    networks:
      -babyLink

  

networks:
  babyLink: