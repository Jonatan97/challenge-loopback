import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbchallengeDataSource} from '../datasources';
import {Dbchallenge, DbchallengeRelations} from '../models';

export class DbchallengeRepository extends DefaultCrudRepository<
  Dbchallenge,
  typeof Dbchallenge.prototype.id,
  DbchallengeRelations
> {
  constructor(
    @inject('datasources.dbchallenge') dataSource: DbchallengeDataSource,
  ) {
    super(Dbchallenge, dataSource);
  }
}
