import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";
import { UserRole } from "../model/user.model";

export class CreateUserDto {
    @ApiProperty({
        example: 'Leo',
        description: 'Foydalanuvchining ismi',
    })
    @IsString()
    @IsNotEmpty()
    first_name: string

    @ApiProperty({
        example: 'Messi',
        description: 'Foydalanuvchining familiyasi',
    })
    @IsString()
    @IsNotEmpty()
    last_name: string

    @ApiProperty({
        example: 'leo.messi@gmail.com',
        description: 'Foydalanuvchi email manzili',
    })
    @IsString()
    @IsNotEmpty()
    email: string

    @ApiProperty({
        example: 'mypassword123',
        description: 'Foydalanuvchi paroli',
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(12)
    password: string

    @ApiProperty({
        example: UserRole.TALABA,
        description: "Foydalanuvchi roli: 'dehqon', 'talaba', yoki 'olim'",
    })
    @IsString()
    @IsNotEmpty()
    @IsEnum(UserRole)
    role: UserRole
}
