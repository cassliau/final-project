const express = require("express");
const router = express.Router();

const cafeJSON = [
  {
    cafeId: "01",
    authorName: "Cassandra",
    authorUsername: "cassliau",
    authorId: "01",
    cafeName: "Café Leon Dore",
    neighborhood: "Nolita",
    address: "214 Mulberry Street, New York, NY",
    rating: [
      {
        overall: "5",
        coffee: "4",
        menu: "4",
        vibe: "4",
        space: "2",
        price: "3",
      },
    ],
  },
];

router.get("/", (req, res) => res.send(cafeJSON));

module.exports = router;
