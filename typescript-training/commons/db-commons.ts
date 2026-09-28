import { Client } from "pg";
import config from '../config/config.json' with {type: 'json'};
import { horrorMoviesList } from '../commons/queries.ts';

export class DBCommons {

    async getData(query: string): Promise<any> {


        // Create a configuration to connect with the database. 
        const dbConfig = new Client({
            host: config.db.host,
            port: config.db.port,
            database: config.db.database,
            user: config.db.username,
            password: config.db.password
        })

        //Connect with the database by using the above connection URL. 
        await dbConfig.connect();

        //Execute the query and store the database results in one of the variables. 
        const data = await dbConfig.query(query);

        //Close the database connection. 
        await dbConfig.end();

        //Return the records received from the database. 
        return data.rows;

    }


}


let db = new DBCommons();
console.log(await db.getData(horrorMoviesList));