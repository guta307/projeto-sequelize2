const { Router } = require("express");

const PeopleControllers = require("../controllers/PeopleController");

const router = Router();

router.post("/v1CreateUser", PeopleControllers.createPeople);
router.post("/v1RestorePeople/:peopleId", PeopleControllers.restorePeople);

router.put("/v1UpdatePeople/:peopleId", PeopleControllers.updatePeople);

router.delete("/v1DeletePeople/:peopleId", PeopleControllers.deletePeople);

router.get("/v1ListPeople", PeopleControllers.listPeople);
router.get("/v1ListHosts", PeopleControllers.listHosts);
router.get("/v1ListParticipants", PeopleControllers.listParticipants);
router.get(
  "/v1GetPeopleFeedbacks/:peopleId",
  PeopleControllers.getFeedbackFromPeople
);
module.exports = router;
