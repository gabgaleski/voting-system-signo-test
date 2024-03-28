import express from 'express';
import route from './Routes';
import cors from 'cors';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.app.use(route);
    this.app.get('/', (_req, res) => res.json({ message: "OK" }));
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(cors({ 
    origin: '*'
    }));
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running: Port: ${port}`)
    })
  }

}

export default App;

// export const { app } = new App() para realização de testes