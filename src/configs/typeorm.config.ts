import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// 데이터 베이스 연결
export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'tjsdn3032!',
  database: 'nest.js',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, //테이블 자동 생성
};
