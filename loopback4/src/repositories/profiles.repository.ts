import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Profiles, ProfilesRelations} from '../models';

export class ProfilesRepository extends DefaultCrudRepository<
  Profiles,
  typeof Profiles.prototype._id,
  ProfilesRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Profiles, dataSource);
  }
}
