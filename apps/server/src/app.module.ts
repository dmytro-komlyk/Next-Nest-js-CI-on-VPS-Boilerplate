import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TrpcModule } from '@server/trpc/trpc.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TrpcModule,
    UserModule,
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
