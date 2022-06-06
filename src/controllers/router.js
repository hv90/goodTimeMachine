import { createConnection, insertIntoTable } from "../models/mysql/index.js";

export function router(app) {
  app.get("/", async (req, res) => {
    // res.redirect(200, "http://localhost:3000/src/views/formulary/");
    res.redirect("http://localhost:3000/src/views/formulary/");
    const { query } = req;

    try {
      insertIntoTable(query);
    } catch (e) {
      console.error("error: ", e);
    }
  });
}
