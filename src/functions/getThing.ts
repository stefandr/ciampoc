import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { getTableClient } from "../common/tableClient";

export const getThing = async (request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> => {
  context.log(`Http function processed request for url "${request.url}"`);

  const id = request.params.id;
  const tableClient = getTableClient();
  const thing = await tableClient.getEntity(id, id);

  return { jsonBody: thing };
};
