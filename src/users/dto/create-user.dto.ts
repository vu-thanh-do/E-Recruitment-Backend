import { IsEmail, IsNotEmpty, Min } from 'class-validator';

export class CreateUserDto {
  name: string;
  @IsNotEmpty({
    message: 'Không được để trống !',
  })
  @IsEmail(
    {},
    {
      message: 'Email không đúng định dạng ! ',
    },
  )
  email: string;
  @IsNotEmpty()
  password: string;
}
