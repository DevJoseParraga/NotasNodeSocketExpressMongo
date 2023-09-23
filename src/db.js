import { connect } from "mongoose";

export const connectDB = async () => {
    try{
        await connect("mongodb+srv://devjoseparraga:2062b276Jp@cluster0.g9dqg2h.mongodb.net/?retryWrites=true&w=majority")
        console.log('====================================');
        console.log("db conectada");
        console.log('====================================');
    } catch (error){
        console.log(error);
    }


}