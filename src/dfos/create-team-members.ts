import { IsNotEmpty, Length } from "class-validator";

export class CreateTeamMemberBody {
    @IsNotEmpty()
    @Length(5,100)
    name: string;
    @IsNotEmpty({
        message: 'Essa função nao permite ser vazia'
    })
    function: string;
}