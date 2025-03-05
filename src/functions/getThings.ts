import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";
import { getTableClient } from "../common/tableClient";

export const getThings = async (request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> => {
  context.log(`Http function processed request for url "${request.url}"`);

  const tableClient = getTableClient();
  const thingsIterator = tableClient.listEntities();

  const things: any = [];
  for await (const thing of thingsIterator) {
    things.push(thing);
  }

  return { jsonBody: things };
};
