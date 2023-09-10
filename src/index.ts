import express, { json } from "express";
import { matchRouter, statsRouter } from "./routes";
import { corsMiddleware } from "./middlewares/cors";



const app = express();
app.use(json());
app.use(corsMiddleware());

app.disable('x-powered-by');


app.use('/api/match', matchRouter);

app.use('/api/stats', statsRouter);



const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});

