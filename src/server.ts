import app from "./app";

//for call https local
const PORT: Number = 5050;

app.listen(PORT, (): void => console.log(`running on port ${PORT}`));
