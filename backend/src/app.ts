import express from 'express';
import route from './Routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.app.use(route);
    this.app.get('/', (_req, res) => res.json({ message: "OK" }))
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running: Port: ${port}`)
    })
  }

}

export default App;

// export const { app } = new App() para realização de testes