import { ApiProperty } from '@nestjs/swagger';
import { Model, Table, Column, DataType } from 'sequelize-typescript';

// Enum for user roles
export enum UserRole {
    DEHQON = 'dehqon',
    TALABA = 'talaba',
    OLIM = 'olim',
    DASTRUCHI = 'dasturchi',
    FERMER = 'fermer',
    AGRONOM = 'agronom',
}

// Interface for the User model
export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    role: UserRole;
}

// Users table
@Table({ tableName: 'users', timestamps: false })
export class User extends Model<User, IUser> {
    @ApiProperty({
        example: 1,
        description: 'Foydalanuvchi ID raqami',
    })
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    })
    id: number;

    @ApiProperty({
        example: 'Leo',
        description: 'Ismni kiriting',
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    first_name: string;

    @ApiProperty({
        example: 'Messi',
        description: 'Familyani kiriting',
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name: string;

    @ApiProperty({
        example: 'leo.messi@gmail.com',
        description: 'Foydalanuvchi email manzili',
    })
    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    })
    email: string;

    @ApiProperty({
        example: 'mypassword123',
        description: 'Foydalanuvchi paroli',
    })
    @Column({
        type: DataType.STRING(25),
        allowNull: false,
    })
    password: string;

    @ApiProperty({
        example: UserRole.TALABA,
        description: "Foydalanuvchi roli: 'dehqon', 'talaba', 'dasturchi', 'fermer'. 'agronom', yoki 'olim'",
    })
    @Column({
        type: DataType.ENUM(...Object.values(UserRole)),
        allowNull: false,
        defaultValue: UserRole.TALABA, // Standart qiymat 'talaba'
    })
    role: UserRole;
}
