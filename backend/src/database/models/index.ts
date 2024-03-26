import { Sequelize } from 'sequelize';
import * as config from '../config/config';

const sequelize: Sequelize = new Sequelize(config);

export default sequelize;