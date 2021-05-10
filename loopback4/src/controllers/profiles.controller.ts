import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Profiles} from '../models';
import {ProfilesRepository} from '../repositories';

export class ProfilesController {
  constructor(
    @repository(ProfilesRepository)
    public profilesRepository : ProfilesRepository,
  ) {}

  @post('/api/profiles')
  @response(200, {
    description: 'Profiles model instance',
    content: {'application/json': {schema: getModelSchemaRef(Profiles)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profiles, {
            title: 'NewProfiles',
            exclude: ['_id'],
          }),
        },
      },
    })
    profiles: Omit<Profiles, 'id'>,
  ): Promise<Profiles> {
    return this.profilesRepository.create(profiles);
  }

  @get('api/profiles/count')
  @response(200, {
    description: 'Profiles model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Profiles) where?: Where<Profiles>,
  ): Promise<Count> {
    return this.profilesRepository.count(where);
  }

  @get('/api/profiles')
  @response(200, {
    description: 'Array of Profiles model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Profiles, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Profiles) filter?: Filter<Profiles>,
  ): Promise<Profiles[]> {
    return this.profilesRepository.find(filter);
  }

  @patch('/api/profiles')
  @response(200, {
    description: 'Profiles PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profiles, {partial: true}),
        },
      },
    })
    profiles: Profiles,
    @param.where(Profiles) where?: Where<Profiles>,
  ): Promise<Count> {
    return this.profilesRepository.updateAll(profiles, where);
  }

  @get('/api/profiles/{id}')
  @response(200, {
    description: 'Profiles model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Profiles, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Profiles, {exclude: 'where'}) filter?: FilterExcludingWhere<Profiles>
  ): Promise<Profiles> {
    return this.profilesRepository.findById(id, filter);
  }

  @patch('/api/profiles/{id}')
  @response(204, {
    description: 'Profiles PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Profiles, {partial: true}),
        },
      },
    })
    profiles: Profiles,
  ): Promise<void> {
    await this.profilesRepository.updateById(id, profiles);
  }

  @put('/api/profiles/{id}')
  @response(204, {
    description: 'Profiles PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() profiles: Profiles,
  ): Promise<void> {
    await this.profilesRepository.replaceById(id, profiles);
  }

  @del('/api/profiles/{id}')
  @response(204, {
    description: 'Profiles DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.profilesRepository.deleteById(id);
  }
}
