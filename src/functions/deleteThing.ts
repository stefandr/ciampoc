import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { getTableClient } from "../common/tableClient";

export const deleteThing = async (request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> => {
  context.log(`Http function processed request for url "${request.url}"`);

  const id = request.params.id;
  const tableClient = getTableClient();
  await tableClient.deleteEntity(id, id);

  return { status: 204 };
};
