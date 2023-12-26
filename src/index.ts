import 'dotenv/config';
import app from './expressConfig';


app.listen(process.env.PORT || 3000, () => {
    console.log('server running successfully');
  });