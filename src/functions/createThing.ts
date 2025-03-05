import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { getTableClient } from "../common/tableClient";
import { randomUUID } from "crypto";

export const createThing = async (request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> => {
  context.log(`Http function processed request for url "${request.url}"`);

  const body: any = await request.json();
  const newId = randomUUID();
  const newThing = {
    partitionKey: newId,
    rowKey: newId,
    id: newId,
    name: body.name || '',
    description: body.description || ''
  };

  const tableClient = getTableClient();
  await tableClient.createEntity(newThing);

  return { jsonBody: newThing };
};
