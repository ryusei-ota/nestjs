import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model'
import { CreateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/create-one-user.args';
import { UsersService } from 'src/users/users.service';
import { FindFirstUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/find-first-user.args';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UpdateOneUserArgs } from 'src/@generated/prisma-nestjs-graphql/user/update-one-user.args';

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly userService: UsersService) {}

    @Query(() => User)
    user(
        @Args() args: FindFirstUserArgs
    ) {
        return this.userService.findFirst(args)
    }

    @Mutation(() => User)
    async createUser(
        @Args() args: CreateOneUserArgs
    ) {
        return this.userService.createUser(args);
    }

    @Mutation(() => User)
    update(
        @Args() args: UpdateOneUserArgs
    ) {
        return this.userService.update(args)
    }
}