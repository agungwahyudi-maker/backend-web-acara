import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "1.0.0",
    title: "Dokumentasi API MERN Stack",
    description: "API Documentation",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Development Local server",
    },
    {
      url: "https://backend-web-acara-2025.vercel.app/api",
      description: "Deploy server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      LoginRequest: {
        identifier: "agung",
        password: "agung",
      },
      RegisterRequest: {
        fullName: "Joni joni",
        username: "joni2024",
        email: "joni@gmail.com",
        password: "123",
        consfirmPassword: "123",
      },
      ActivationRequest: {
        code: "asdd",
      },
    },
  },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({
  openapi: "3.0.0",
})(outputFile, endpointsFiles, doc);
