import {Entity, model, property} from '@loopback/repository';

@model()
export class Profiles extends Entity {
  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'string',
  })
  avatar_url?: string;
  
  @property({
    type: 'string',
  })
  login?: string;

  @property({
    type: 'string',
  })
  type?: string;

  @property({
    type: 'string',
  })
  company?: string;

  @property({
    type: 'string',
  })
  location?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
    id: true
  })
  _id?: string;

  constructor(data?: Partial<Profiles>) {
    super(data);
  }
}

export interface ProfilesRelations {
  // describe navigational properties here
}

export type ProfilesWithRelations = Profiles & ProfilesRelations;
