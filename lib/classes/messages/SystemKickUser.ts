// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class SystemKickUserMessage implements MessageBase
{
    name = 'SystemKickUser';
    messageFlags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = Message.SystemKickUser;

    AgentInfo: {
        AgentID: UUID;
    }[];

    getSize(): number
    {
        return ((16) * this.AgentInfo.length) + 1;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        const count = this.AgentInfo.length;
        buf.writeUInt8(this.AgentInfo.length, pos++);
        for (let i = 0; i < count; i++)
        {
            this.AgentInfo[i]['AgentID'].writeToBuffer(buf, pos);
            pos += 16;
        }
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        if (pos >= buf.length)
        {
            return pos - startPos;
        }
        const count = buf.readUInt8(pos++);
        this.AgentInfo = [];
        for (let i = 0; i < count; i++)
        {
            const newObjAgentInfo: {
                AgentID: UUID
            } = {
                AgentID: UUID.zero()
            };
            newObjAgentInfo['AgentID'] = new UUID(buf, pos);
            pos += 16;
            this.AgentInfo.push(newObjAgentInfo);
        }
        return pos - startPos;
    }
}

