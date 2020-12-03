// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class EmailMessageReplyMessage implements MessageBase
{
    name = 'EmailMessageReply';
    messageFlags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = Message.EmailMessageReply;

    DataBlock: {
        ObjectID: UUID;
        More: number;
        Time: number;
        FromAddress: Buffer;
        Subject: Buffer;
        Data: Buffer;
        MailFilter: Buffer;
    };

    getSize(): number
    {
        return (this.DataBlock['FromAddress'].length + 1 + this.DataBlock['Subject'].length + 1 + this.DataBlock['Data'].length + 2 + this.DataBlock['MailFilter'].length + 1) + 24;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.DataBlock['ObjectID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt32LE(this.DataBlock['More'], pos);
        pos += 4;
        buf.writeUInt32LE(this.DataBlock['Time'], pos);
        pos += 4;
        buf.writeUInt8(this.DataBlock['FromAddress'].length, pos++);
        this.DataBlock['FromAddress'].copy(buf, pos);
        pos += this.DataBlock['FromAddress'].length;
        buf.writeUInt8(this.DataBlock['Subject'].length, pos++);
        this.DataBlock['Subject'].copy(buf, pos);
        pos += this.DataBlock['Subject'].length;
        buf.writeUInt16LE(this.DataBlock['Data'].length, pos);
        pos += 2;
        this.DataBlock['Data'].copy(buf, pos);
        pos += this.DataBlock['Data'].length;
        buf.writeUInt8(this.DataBlock['MailFilter'].length, pos++);
        this.DataBlock['MailFilter'].copy(buf, pos);
        pos += this.DataBlock['MailFilter'].length;
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjDataBlock: {
            ObjectID: UUID,
            More: number,
            Time: number,
            FromAddress: Buffer,
            Subject: Buffer,
            Data: Buffer,
            MailFilter: Buffer
        } = {
            ObjectID: UUID.zero(),
            More: 0,
            Time: 0,
            FromAddress: Buffer.allocUnsafe(0),
            Subject: Buffer.allocUnsafe(0),
            Data: Buffer.allocUnsafe(0),
            MailFilter: Buffer.allocUnsafe(0)
        };
        newObjDataBlock['ObjectID'] = new UUID(buf, pos);
        pos += 16;
        newObjDataBlock['More'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjDataBlock['Time'] = buf.readUInt32LE(pos);
        pos += 4;
        varLength = buf.readUInt8(pos++);
        newObjDataBlock['FromAddress'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        varLength = buf.readUInt8(pos++);
        newObjDataBlock['Subject'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        varLength = buf.readUInt16LE(pos);
        pos += 2;
        newObjDataBlock['Data'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        varLength = buf.readUInt8(pos++);
        newObjDataBlock['MailFilter'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        this.DataBlock = newObjDataBlock;
        return pos - startPos;
    }
}

