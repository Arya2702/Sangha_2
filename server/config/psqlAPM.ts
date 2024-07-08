import { Pool, PoolClient } from "pg";
import { pgDbConfig } from "./config";
import { query } from "express";

const pool = new Pool(pgDbConfig);

export async function fnDbQuery(methodName: string, queryText: string, queryParam?: any) {

    let client: PoolClient;
    let start;
    let qryResult;

    try{

        start = Date.now();
        client = await pool.connect();

        try{

            let qParam = queryParam ? queryParam : [];
            const qResult = await client.query(queryText, qParam);
            qryResult = {success: true, rows: qResult.rows, rowcount: qResult.rowCount};
        }

        catch(e: any){
            qryResult = {success: false, message: e.message};
            console.log(e);
        }

        finally{
            client.release()
        }
    }

    catch(e: any){
        qryResult = {success: false, connection_error: true, message: e.message};
        console.log(e);
    }

    finally{
        return qryResult;
    }
}

pool.on('error', (err: Error) =>{
    console.log('${process.pid}, PSQL Pool Error, ${err.message}, ${err.stack}')
})