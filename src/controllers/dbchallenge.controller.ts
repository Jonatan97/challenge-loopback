import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody,
  response
} from '@loopback/rest';
import {Dbchallenge} from '../models';
import {DbchallengeRepository} from '../repositories';

export class DbchallengeController {
  constructor(
    @repository(DbchallengeRepository)
    public dbchallengeRepository: DbchallengeRepository,
  ) { }

  @post('/dbchallenges')
  @response(200, {
    description: 'Dbchallenge model instance',
    content: {'application/json': {schema: getModelSchemaRef(Dbchallenge)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dbchallenge, {
            title: 'NewDbchallenge',
            exclude: ['id'],
          }),
        },
      },
    })
    dbchallenge: Omit<Dbchallenge, 'id'>,
  ): Promise<Dbchallenge> {
    return this.dbchallengeRepository.create(dbchallenge);
  }

  @get('/dbchallenges/count')
  @response(200, {
    description: 'Dbchallenge model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Dbchallenge) where?: Where<Dbchallenge>,
  ): Promise<Count> {
    return this.dbchallengeRepository.count(where);
  }

  @get('/dbchallenges')
  @response(200, {
    description: 'Array of Dbchallenge model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Dbchallenge, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Dbchallenge) filter?: Filter<Dbchallenge>,
  ): Promise<Dbchallenge[]> {
    return this.dbchallengeRepository.find(filter);
  }

  @patch('/dbchallenges')
  @response(200, {
    description: 'Dbchallenge PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dbchallenge, {partial: true}),
        },
      },
    })
    dbchallenge: Dbchallenge,
    @param.where(Dbchallenge) where?: Where<Dbchallenge>,
  ): Promise<Count> {
    return this.dbchallengeRepository.updateAll(dbchallenge, where);
  }

  @get('/dbchallenges/{id}')
  @response(200, {
    description: 'Dbchallenge model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Dbchallenge, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Dbchallenge, {exclude: 'where'}) filter?: FilterExcludingWhere<Dbchallenge>
  ): Promise<Dbchallenge> {
    return this.dbchallengeRepository.findById(id, filter);
  }

  @patch('/dbchallenges/{id}')
  @response(204, {
    description: 'Dbchallenge PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Dbchallenge, {partial: true}),
        },
      },
    })
    dbchallenge: Dbchallenge,
  ): Promise<void> {
    await this.dbchallengeRepository.updateById(id, dbchallenge);
  }

  @put('/dbchallenges/{id}')
  @response(200, {

    description: 'Dbchallenge PUT success',

  })
  async replaceById(

    @param.path.number('id') id: number,
    @requestBody() dbchallenge: Dbchallenge,
  ): Promise<void> {
    await this.dbchallengeRepository.replaceById(id, dbchallenge);
  }

  @del('/dbchallenges/{id}')
  @response(204, {
    description: 'Dbchallenge DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.dbchallengeRepository.deleteById(id);
  }
}
