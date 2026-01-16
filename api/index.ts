import { app } from '../server/app';
import { registerRoutes } from '../server/routes';

// Register routes before exporting the app
// Note: We don't call app.listen() here, Vercel handles the connection
registerRoutes(app);

export default app;
