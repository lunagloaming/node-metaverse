// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import * as Long from 'long';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class RegionIDAndHandleReplyMessage implements MessageBase
{
    name = 'RegionIDAndHandleReply';
    messageFlags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = Message.RegionIDAndHandleReply;

    ReplyBlock: {
        RegionID: UUID;
        RegionHandle: Long;
    };

    getSize(): number
    {
        return 24;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.ReplyBlock['RegionID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeInt32LE(this.ReplyBlock['RegionHandle'].low, pos);
        pos += 4;
        buf.writeInt32LE(this.ReplyBlock['RegionHandle'].high, pos);
        pos += 4;
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        const newObjReplyBlock: {
            RegionID: UUID,
            RegionHandle: Long
        } = {
            RegionID: UUID.zero(),
            RegionHandle: Long.ZERO
        };
        newObjReplyBlock['RegionID'] = new UUID(buf, pos);
        pos += 16;
        newObjReplyBlock['RegionHandle'] = new Long(buf.readInt32LE(pos), buf.readInt32LE(pos+4));
        pos += 8;
        this.ReplyBlock = newObjReplyBlock;
        return pos - startPos;
    }
}

