import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
const glob = require('glob');

const options = {
  definition: {
    openapi: '3.0.0', // Must have openapi version
    info: {
      title: 'Express TS API',
      version: '1.0.0',
      description: 'API documentation with Swagger for Express + TypeScript',
    },
    servers: [
      {
        url: 'http://localhost:8000',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    // Global security requirement (optional)
    // This applies to all endpoints unless overridden
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    ...glob.sync('./src/routes/**/*.ts'), // Your route files with swagger comments
    './src/docs/authDocs.ts',             // Additional doc files
    './src/docs/userDocs.ts',
    './src/docs/cartDocs.ts',
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
