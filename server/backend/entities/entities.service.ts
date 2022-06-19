import { BadRequestError } from "../lib/errors";
import { SchemasService, schemasService } from "../schema/schema.service";
import { IJsonSchemaModel } from "../schema/schema.types";
import { IEntityField } from "./types";

export class EntitiesService {
  constructor(private schemasService: SchemasService) {}

  private getJsonSchemaModels = (): Record<string, IJsonSchemaModel> => {
    return Object.fromEntries(
      this.schemasService
        .listJsonSchemaModels()
        .map((model) => [model.name, model])
    );
  };

  getEntityFields = (entity: string): IEntityField[] => {
    return this.getEntityFromSchema(entity).fields;
  };

  getEntityPrimaryField(entity: string): string {
    return this.getEntityFields(entity).find(({ isId }) => isId)?.name;
  }

  validateEntityField(entity: string, field: unknown) {
    if (!this.getEntityFields(entity).find(({ name }) => name === field)) {
      throw new BadRequestError(`Invalid field '${field}' for ${entity}`);
    }
    return field as string;
  }

  validateEntityFields(entity: string, fields: string[]) {
    fields.forEach((field) => {
      this.validateEntityField(entity, field);
    });
  }

  getEntityFromSchema = (entity: string): IJsonSchemaModel => {
    return this.getJsonSchemaModels()[entity];
  };

  getAllEntities = () => {
    return this.schemasService.listJsonSchemaModels().map(({ name }) => ({
      value: name,
      label: name,
    }));
  };
}

export const entitiesService = new EntitiesService(schemasService);
