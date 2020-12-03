// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class LogTextMessageMessage implements MessageBase
{
    name = 'LogTextMessage';
    messageFlags = MessageFlags.Trusted | MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = Message.LogTextMessage;

    DataBlock: {
        FromAgentId: UUID;
        ToAgentId: UUID;
        GlobalX: number;
        GlobalY: number;
        Time: number;
        Message: Buffer;
    }[];

    getSize(): number
    {
        return this.calculateVarVarSize(this.DataBlock, 'Message', 2) + ((52) * this.DataBlock.length) + 1;
    }

    calculateVarVarSize(block: {[key: string]: any}[], paramName: string, extraPerVar: number): number
    {
        let size = 0;
        for (const bl of block)
        {
            size += bl[paramName].length + extraPerVar;
        }
        return size;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        const count = this.DataBlock.length;
        buf.writeUInt8(this.DataBlock.length, pos++);
        for (let i = 0; i < count; i++)
        {
            this.DataBlock[i]['FromAgentId'].writeToBuffer(buf, pos);
            pos += 16;
            this.DataBlock[i]['ToAgentId'].writeToBuffer(buf, pos);
            pos += 16;
            buf.writeDoubleLE(this.DataBlock[i]['GlobalX'], pos);
            pos += 8;
            buf.writeDoubleLE(this.DataBlock[i]['GlobalY'], pos);
            pos += 8;
            buf.writeUInt32LE(this.DataBlock[i]['Time'], pos);
            pos += 4;
            buf.writeUInt16LE(this.DataBlock[i]['Message'].length, pos);
            pos += 2;
            this.DataBlock[i]['Message'].copy(buf, pos);
            pos += this.DataBlock[i]['Message'].length;
        }
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        if (pos >= buf.length)
        {
            return pos - startPos;
        }
        const count = buf.readUInt8(pos++);
        this.DataBlock = [];
        for (let i = 0; i < count; i++)
        {
            const newObjDataBlock: {
                FromAgentId: UUID,
                ToAgentId: UUID,
                GlobalX: number,
                GlobalY: number,
                Time: number,
                Message: Buffer
            } = {
                FromAgentId: UUID.zero(),
                ToAgentId: UUID.zero(),
                GlobalX: 0,
                GlobalY: 0,
                Time: 0,
                Message: Buffer.allocUnsafe(0)
            };
            newObjDataBlock['FromAgentId'] = new UUID(buf, pos);
            pos += 16;
            newObjDataBlock['ToAgentId'] = new UUID(buf, pos);
            pos += 16;
            newObjDataBlock['GlobalX'] = buf.readDoubleLE(pos);
            pos += 8;
            newObjDataBlock['GlobalY'] = buf.readDoubleLE(pos);
            pos += 8;
            newObjDataBlock['Time'] = buf.readUInt32LE(pos);
            pos += 4;
            varLength = buf.readUInt16LE(pos);
            pos += 2;
            newObjDataBlock['Message'] = buf.slice(pos, pos + varLength);
            pos += varLength;
            this.DataBlock.push(newObjDataBlock);
        }
        return pos - startPos;
    }
}

