import { app } from "@azure/functions";
import { createThing } from "./functions/createThing";
import { deleteThing } from "./functions/deleteThing";
import { getThing } from "./functions/getThing";
import { getThings } from "./functions/getThings";
import { updateThing } from "./functions/updateThing";

app.http('getThings', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'things',
  handler: getThings
});

app.http('createThing', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'things',
  handler: createThing
});

app.http('getThing', {
  methods: ['GET'],
  authLevel: 'anonymous',
  route: 'things/{id}',
  handler: getThing
});

app.http('updateThing', {
  methods: ['PUT'],
  authLevel: 'anonymous',
  route: 'things/{id}',
  handler: updateThing
});

app.http('deleteThing', {
  methods: ['DELETE'],
  authLevel: 'anonymous',
  route: 'things/{id}',
  handler: deleteThing
});
