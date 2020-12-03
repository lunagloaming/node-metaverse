// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class AvatarPickerRequestMessage implements MessageBase
{
    name = 'AvatarPickerRequest';
    messageFlags = MessageFlags.FrequencyLow;
    id = Message.AvatarPickerRequest;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
        QueryID: UUID;
    };
    Data: {
        Name: Buffer;
    };

    getSize(): number
    {
        return (this.Data['Name'].length + 1) + 48;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['QueryID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt8(this.Data['Name'].length, pos++);
        this.Data['Name'].copy(buf, pos);
        pos += this.Data['Name'].length;
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjAgentData: {
            AgentID: UUID,
            SessionID: UUID,
            QueryID: UUID
        } = {
            AgentID: UUID.zero(),
            SessionID: UUID.zero(),
            QueryID: UUID.zero()
        };
        newObjAgentData['AgentID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentData['SessionID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentData['QueryID'] = new UUID(buf, pos);
        pos += 16;
        this.AgentData = newObjAgentData;
        const newObjData: {
            Name: Buffer
        } = {
            Name: Buffer.allocUnsafe(0)
        };
        varLength = buf.readUInt8(pos++);
        newObjData['Name'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        this.Data = newObjData;
        return pos - startPos;
    }
}

