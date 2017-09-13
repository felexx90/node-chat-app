"use strict";
import app from "./server/index";

const PORT = process.env.PORT || "3000";

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});