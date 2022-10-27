import apiSchema from "./schema";
import query from "./queries";
import mutation from "./mutations";

export const resolver = {
  ...query,
  ...mutation,
};

export const schema = apiSchema;
