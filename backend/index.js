import app from "./src/app.js";
const PORT = process.env.APP_PORT || 8081;

app.listen(PORT, () => {
  console.log(`app is running on http://localhost:${PORT}`);
});
