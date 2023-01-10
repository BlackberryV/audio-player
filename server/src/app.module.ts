import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { TrackModule } from './track/track.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://Viktoriia:g9ewlpAjpZLXomYW@full-stack-app.qkpzd.mongodb.net/?retryWrites=true&w=majority',
    ),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
