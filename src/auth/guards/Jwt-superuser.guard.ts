import { BadRequestException, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class JwtSuperUserGuard extends AuthGuard('jwt'){
   handleRequest<TUser = any>(err: any, user: any): TUser {
      if(!user || err){
         throw err || new BadRequestException('user not logged')
      }

      if(!user.isSuperUser){
         throw new BadRequestException('user logged is not super user')
      }

      return user
    } 
}
