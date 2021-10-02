import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty({
    type: String,
    description: 'name of user',
  })
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  created_at: Date;
}
