import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ArticleCreationProps {
  title: string;
  subtitle: string;
}

@Table({tableName: 'articles'})
export class Article extends Model<Article, ArticleCreationProps> {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.INTEGER, unique: true})
  userId: number

  @Column({type: DataType.STRING })
  title: string;

  @Column({type: DataType.STRING })
  subtitle: string;

  @Column({type: DataType.STRING})
  img: string;

  @Column({type: DataType.INTEGER})
  views: number;

  @Column({type: DataType.STRING})
  created: string;
}
