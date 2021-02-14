import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: true}})
export class Dbchallenge extends Entity {

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id: number;

  @property({
    type: 'string',
  })
  title?: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'date',
  })
  day_time?: string;

  @property({
    type: 'string',
  })
  status?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Dbchallenge>) {
    super(data);
  }
}

export interface DbchallengeRelations {
  // describe navigational properties here
}

export type DbchallengeWithRelations = Dbchallenge & DbchallengeRelations;
