import { useAuthenticateUser } from "frontend/hooks/auth/useAuthenticateUser";
import { SETUP_CHECK_URL } from "frontend/hooks/setup/setup.store";
import { makeActionRequest } from "frontend/lib/data/makeRequest";
import { useWaitForResponseMutationOptions } from "frontend/lib/data/useMutate/useWaitForResponseMutationOptions";
import { ISetupUserForm } from "shared/form-schemas/setup/user";
import { ISuccessfullAuthenticationResponse } from "shared/types/auth/portal";
import { IDataSourceCredentials } from "shared/types/data-sources";

export function useSetupCredentialsMutation() {
  return useWaitForResponseMutationOptions<IDataSourceCredentials>({
    mutationFn: async (data) =>
      await makeActionRequest("POST", `/api/setup/credentials`, data),
    endpoints: [SETUP_CHECK_URL],
    successMessage: "Credentials Was Successfully Setup",
  });
}

export function useSetupUserMutation() {
  const authenticateUser = useAuthenticateUser();

  return useWaitForResponseMutationOptions<
    ISetupUserForm,
    ISuccessfullAuthenticationResponse
  >({
    mutationFn: async (data) =>
      await makeActionRequest("POST", `/api/setup/user`, data),
    endpoints: [SETUP_CHECK_URL],
    successMessage: "Account Was Successfully Setup",
    onSuccessActionWithFormData: (response) => {
      authenticateUser(response.token, true);
    },
  });
}
