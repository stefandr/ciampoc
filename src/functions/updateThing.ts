import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { getTableClient } from "../common/tableClient";

export const updateThing = async (request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> => {
  context.log(`Http function processed request for url "${request.url}"`);

  const id = request.params.id;
  const body: any = await request.json();
  const newThing = {
    partitionKey: id,
    rowKey: id,
    name: body.name || '',
    description: body.description || ''
  };

  const tableClient = getTableClient();
  await tableClient.updateEntity(newThing);

  return { jsonBody: newThing };
};
