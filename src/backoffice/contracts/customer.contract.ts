import { Contract } from './contract';
import { Injectable } from '@nestjs/common';
import { Flunt } from 'src/utils/flunt';
import { CreateCustomerDto } from '../dtos/create-customer-dto';

@Injectable()
export class CreateCustomerContract implements Contract {
  errors: any[];

  validate(model: CreateCustomerDto): boolean {
    const flunt = new Flunt();

    flunt.hasMinLen(model.name, 5, 'Nome inválido');
    flunt.isEmail(model.email, 'Email inválido');
    flunt.isFixedLen(model.document, 11, 'CPF inválido');

    this.errors = flunt.errors;

    return flunt.isValid();
  }
}
