    findAll(): Promise<Company[]> {
        return this.companiesModel.findAll();
    }

    async findByName(name: string): Promise<Company[]> {
        return await this.companiesModel.sequelize.query(
            `SELECT * FROM company WHERE name = '${name}'`
        );
    }
