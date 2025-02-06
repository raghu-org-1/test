
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Company } from './company.model';

@Injectable()
export class CompanyService {
    constructor(
        @InjectModel(Company)
        private companiesModel: typeof Company
    ) {}

    findAll(): Promise<Company[]> {
        return this.companiesModel.findAll();
    }

    async findByName(name: string): Promise<Company[]> {
        return await this.companiesModel.sequelize.query(
            `SELECT * FROM company WHERE name = '${name}'`
        );
    }
}
