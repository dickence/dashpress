import { rolesController } from "backend/roles/roles.controller";
import { CREATE_ROLE_FORM_SCHEMA } from "shared/form-schemas/roles/create";
import { requestHandler } from "../../../backend/lib/request";

export default requestHandler(
  {
    GET: async () => {
      return await rolesController.listRoles();
    },

    POST: async (getValidatedRequest) => {
      const validatedRequest = await getValidatedRequest([
        {
          _type: "requestBody",
          options: CREATE_ROLE_FORM_SCHEMA,
        },
      ]);
      return await rolesController.createRole(validatedRequest.requestBody);
    },
  },
  [
    {
      _type: "isCreator",
    },
  ]
);