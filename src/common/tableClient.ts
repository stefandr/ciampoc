import { TableClient } from "@azure/data-tables";

const connectionString = process.env.DATA_TABLE_CONNECTION_STRING || '';
const tableName = process.env.DATA_TABLE_NAME || '';

let tableClient: TableClient | undefined = undefined;

export const getTableClient = (): TableClient => {
  if (!tableClient) {
    tableClient = TableClient.fromConnectionString(connectionString, tableName);
  }
  return tableClient;
};
