// mongoose herramienta para moldear datos para enviar a mongodb
import { Schema, model } from "mongoose";
// esquema de datos para enviar a db de mongo
const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default model("note", schema);
