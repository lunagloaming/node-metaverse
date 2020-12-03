// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class DirGroupsReplyMessage implements MessageBase
{
    name = 'DirGroupsReply';
    messageFlags = MessageFlags.Trusted | MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = Message.DirGroupsReply;

    AgentData: {
        AgentID: UUID;
    };
    QueryData: {
        QueryID: UUID;
    };
    QueryReplies: {
        GroupID: UUID;
        GroupName: Buffer;
        Members: number;
        SearchOrder: number;
    }[];

    getSize(): number
    {
        return this.calculateVarVarSize(this.QueryReplies, 'GroupName', 1) + ((24) * this.QueryReplies.length) + 33;
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
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.QueryData['QueryID'].writeToBuffer(buf, pos);
        pos += 16;
        const count = this.QueryReplies.length;
        buf.writeUInt8(this.QueryReplies.length, pos++);
        for (let i = 0; i < count; i++)
        {
            this.QueryReplies[i]['GroupID'].writeToBuffer(buf, pos);
            pos += 16;
            buf.writeUInt8(this.QueryReplies[i]['GroupName'].length, pos++);
            this.QueryReplies[i]['GroupName'].copy(buf, pos);
            pos += this.QueryReplies[i]['GroupName'].length;
            buf.writeInt32LE(this.QueryReplies[i]['Members'], pos);
            pos += 4;
            buf.writeFloatLE(this.QueryReplies[i]['SearchOrder'], pos);
            pos += 4;
        }
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
            QueryID: UUID
        } = {
            QueryID: UUID.zero()
        };
        newObjQueryData['QueryID'] = new UUID(buf, pos);
        pos += 16;
        this.QueryData = newObjQueryData;
        if (pos >= buf.length)
        {
            return pos - startPos;
        }
        const count = buf.readUInt8(pos++);
        this.QueryReplies = [];
        for (let i = 0; i < count; i++)
        {
            const newObjQueryReplies: {
                GroupID: UUID,
                GroupName: Buffer,
                Members: number,
                SearchOrder: number
            } = {
                GroupID: UUID.zero(),
                GroupName: Buffer.allocUnsafe(0),
                Members: 0,
                SearchOrder: 0
            };
            newObjQueryReplies['GroupID'] = new UUID(buf, pos);
            pos += 16;
            varLength = buf.readUInt8(pos++);
            newObjQueryReplies['GroupName'] = buf.slice(pos, pos + varLength);
            pos += varLength;
            newObjQueryReplies['Members'] = buf.readInt32LE(pos);
            pos += 4;
            newObjQueryReplies['SearchOrder'] = buf.readFloatLE(pos);
            pos += 4;
            this.QueryReplies.push(newObjQueryReplies);
        }
        return pos - startPos;
    }
}

