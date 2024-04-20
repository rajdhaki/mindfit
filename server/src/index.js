import app from "./app.js"
import { dbConnection } from "./DB/DB.js"



dbConnection().then(app.listen(4000,()=> console.log(`Server is running at 4000`)))
.catch(e=> console.log("Connection is faild !!",e))

