import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';
const glob = require('glob');  // Use `require` for glob

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express TS API',
      version: '1.0.0',
      description: 'API documentation with Swagger for Express + TypeScript',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
  },
  apis: [
  ...glob.sync('./src/routes/**/*.ts'),       // Automatically find all route files
  './src/docs/userDocs.ts',                  // Explicitly include userDocs
  './src/docs/cartDocs.ts',                  // Explicitly include cartDocs
],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
