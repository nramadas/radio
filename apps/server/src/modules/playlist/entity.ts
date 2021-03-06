import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { ulid } from 'ulid';

import { Playlist as PlaylistModel, Data } from '#lib/models/Playlist';
import { Channel } from '#server/modules/channel/entity';
import { Track } from '#server/modules/track/entity';

@Entity()
@Unique(['isDefaultInId'])
export class Playlist {
  @PrimaryColumn('varchar')
  id!: PlaylistModel['id'];

  @BeforeInsert()
  setId() {
    this.id = ulid();
  }

  @Column()
  channelId!: Channel['id'];

  @Column({ type: 'jsonb' })
  data!: Partial<Data>;

  @Column({ nullable: true })
  isDefaultInId?: Channel['id'];

  // relations
  @ManyToOne('Channel', 'playlists')
  channel!: Channel;

  @OneToOne('Channel', 'defaultPlaylist', { nullable: true })
  @JoinColumn()
  isDefaultIn?: Channel;

  @OneToMany('Track', 'playlist')
  tracks!: Track[];

  // metadata
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;

  @DeleteDateColumn()
  deleted!: Date;
}
