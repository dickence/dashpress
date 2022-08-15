import { SectionBox, SectionCenter } from "@gothicgeeks/design-system";
import { TitleLang } from "@gothicgeeks/shared";
import { useNavigationStack, useSetPageDetails } from "frontend/lib/routing";
import { META_USER_PERMISSIONS } from "shared/types";
import { AppLayout } from "../../../_layouts/app";
import {
  useEntityDiction,
  useEntitySlug,
  useSelectedEntityColumns,
} from "../../../hooks/entity/entity.config";
import { useEntityDataCreationMutation } from "../../../hooks/data/data.store";
import {
  EntityActionTypes,
  useEntityActionMenuItems,
} from "../../entity/constants";
import { BaseEntityForm } from "../_BaseEntityForm";

export function EntityCreate() {
  const entity = useEntitySlug();
  const entityDiction = useEntityDiction();

  const entityDataCreationMutation = useEntityDataCreationMutation(entity);

  const actionItems = useEntityActionMenuItems([
    EntityActionTypes.Create,
    EntityActionTypes.Types,
  ]);

  useSetPageDetails({
    pageTitle: `Create ${entityDiction.plural}`,
    viewKey: "CREATE_ENTITY",
    permission: META_USER_PERMISSIONS.APPLIED_CAN_ACCESS_ENTITY(entity),
  });

  const hiddenCreateColumns = useSelectedEntityColumns(
    "hidden_entity_create_columns"
  );

  const { canGoBack, goBack } = useNavigationStack();

  return (
    <AppLayout actionItems={actionItems}>
      <SectionCenter>
        <SectionBox
          title={TitleLang.create(entityDiction.singular)}
          backLink={
            canGoBack()
              ? {
                  action: goBack,
                  label: "Go Back",
                }
              : undefined
          }
        >
          <BaseEntityForm
            action="create"
            onSubmit={entityDataCreationMutation.mutateAsync}
            hiddenColumns={hiddenCreateColumns}
          />
        </SectionBox>
      </SectionCenter>
    </AppLayout>
  );
}