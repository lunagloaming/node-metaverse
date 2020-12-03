// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class DirFindQueryBackendMessage implements MessageBase
{
    name = 'DirFindQueryBackend';
    messageFlags = MessageFlags.Trusted | MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = Message.DirFindQueryBackend;

    AgentData: {
        AgentID: UUID;
    };
    QueryData: {
        QueryID: UUID;
        QueryText: Buffer;
        QueryFlags: number;
        QueryStart: number;
        EstateID: number;
        Godlike: boolean;
    };

    getSize(): number
    {
        return (this.QueryData['QueryText'].length + 1) + 45;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.QueryData['QueryID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt8(this.QueryData['QueryText'].length, pos++);
        this.QueryData['QueryText'].copy(buf, pos);
        pos += this.QueryData['QueryText'].length;
        buf.writeUInt32LE(this.QueryData['QueryFlags'], pos);
        pos += 4;
        buf.writeInt32LE(this.QueryData['QueryStart'], pos);
        pos += 4;
        buf.writeUInt32LE(this.QueryData['EstateID'], pos);
        pos += 4;
        buf.writeUInt8((this.QueryData['Godlike']) ? 1 : 0, pos++);
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjAgentData: {
            AgentID: UUID
        } = {
            AgentID: UUID.zero()
        };
        newObjAgentData['AgentID'] = new UUID(buf, pos);
        pos += 16;
        this.AgentData = newObjAgentData;
        const newObjQueryData: {
            QueryID: UUID,
            QueryText: Buffer,
            QueryFlags: number,
            QueryStart: number,
            EstateID: number,
            Godlike: boolean
        } = {
            QueryID: UUID.zero(),
            QueryText: Buffer.allocUnsafe(0),
            QueryFlags: 0,
            QueryStart: 0,
            EstateID: 0,
            Godlike: false
        };
        newObjQueryData['QueryID'] = new UUID(buf, pos);
        pos += 16;
        varLength = buf.readUInt8(pos++);
        newObjQueryData['QueryText'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        newObjQueryData['QueryFlags'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjQueryData['QueryStart'] = buf.readInt32LE(pos);
        pos += 4;
        newObjQueryData['EstateID'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjQueryData['Godlike'] = (buf.readUInt8(pos++) === 1);
        this.QueryData = newObjQueryData;
        return pos - startPos;
    }
}

