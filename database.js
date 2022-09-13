import mongoose from 'mongoose';

const { USERNAME_DB, PASSWORD_DB, CLUSTER_DB, NAME_DB } = process.env;

const dbConnection = () => {
  mongoose.connect(
    `mongodb+srv://${USERNAME_DB}:${PASSWORD_DB}@${CLUSTER_DB}.mongodb.net/${NAME_DB}?retryWrites=true&w=majority`
  );
  
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });
};

export default dbConnection;
