// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class FreezeUserMessage implements MessageBase
{
    name = 'FreezeUser';
    messageFlags = MessageFlags.FrequencyLow;
    id = Message.FreezeUser;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    Data: {
        TargetID: UUID;
        Flags: number;
    };

    getSize(): number
    {
        return 52;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        this.Data['TargetID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt32LE(this.Data['Flags'], pos);
        pos += 4;
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        const newObjAgentData: {
            AgentID: UUID,
            SessionID: UUID
        } = {
            AgentID: UUID.zero(),
            SessionID: UUID.zero()
        };
        newObjAgentData['AgentID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentData['SessionID'] = new UUID(buf, pos);
        pos += 16;
        this.AgentData = newObjAgentData;
        const newObjData: {
            TargetID: UUID,
            Flags: number
        } = {
            TargetID: UUID.zero(),
            Flags: 0
        };
        newObjData['TargetID'] = new UUID(buf, pos);
        pos += 16;
        newObjData['Flags'] = buf.readUInt32LE(pos);
        pos += 4;
        this.Data = newObjData;
        return pos - startPos;
    }
}

