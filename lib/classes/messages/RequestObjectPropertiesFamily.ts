// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class RequestObjectPropertiesFamilyMessage implements MessageBase
{
    name = 'RequestObjectPropertiesFamily';
    messageFlags = MessageFlags.Zerocoded | MessageFlags.FrequencyMedium;
    id = Message.RequestObjectPropertiesFamily;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    ObjectData: {
        RequestFlags: number;
        ObjectID: UUID;
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
        buf.writeUInt32LE(this.ObjectData['RequestFlags'], pos);
        pos += 4;
        this.ObjectData['ObjectID'].writeToBuffer(buf, pos);
        pos += 16;
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
        const newObjObjectData: {
            RequestFlags: number,
            ObjectID: UUID
        } = {
            RequestFlags: 0,
            ObjectID: UUID.zero()
        };
        newObjObjectData['RequestFlags'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjObjectData['ObjectID'] = new UUID(buf, pos);
        pos += 16;
        this.ObjectData = newObjObjectData;
        return pos - startPos;
    }
}

