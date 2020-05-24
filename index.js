const server = require("./server");
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log("<<<<SERVER ON 5000>>>>");
});
