import 'dotenv/config'
import app from "./src/app.js";
import { connectdb } from './src/Db/db.js';
const PORT = process.env.PORT || 3000;
await connectdb();
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});