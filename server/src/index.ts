import app from "./app";
import { port } from "./config";

try{
    app.listen(port, (): void => {
        console.log(`Server is listening on port ${port}`)
    })
}
catch(err){
    throw err
}