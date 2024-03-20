import { Knex } from 'knex';
import { BaseRepository, IBasicRepository } from './baseRepository';

export interface Project {
  id: number; // ID
  type: string; // Project datasource type. ex: bigquery, mysql, postgresql, mongodb, etc
  displayName: string; // Project display name
  projectId: string; // BigQuery project id
  datasetId: string; // BigQuery datasetId
  credentials: string; // Project credentials, big query specific
  catalog: string; // Catalog name
  schema: string; // Schema name
  sampleDataset: string; // Sample dataset name
}

export interface IProjectRepository extends IBasicRepository<Project> {
  getCurrentProject: () => Promise<Project>;
}

export class ProjectRepository
  extends BaseRepository<Project>
  implements IProjectRepository
{
  constructor(knexPg: Knex) {
    super({ knexPg, tableName: 'project' });
  }

  public async getCurrentProject() {
    const projects = await this.findAll({
      order: 'id',
      limit: 1,
    });
    if (!projects.length) {
      throw new Error('No project found');
    }
    return projects[0];
  }
}