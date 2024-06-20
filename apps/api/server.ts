import * as dotenv from 'dotenv';
import app from './app.ts';
dotenv.config();

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
