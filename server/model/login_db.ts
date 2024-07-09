import { fnDbQuery } from "../config/psqlAPM";

export class loginDBQry{

    constructor() {}
async login(email: String){
    const qryText = "select*from resreg where email = lower($1)";
    const queryParam = [email];
    return fnDbQuery("login", qryText, queryParam);
}}