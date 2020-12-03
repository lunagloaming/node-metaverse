// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class GroupNoticeRequestMessage implements MessageBase
{
    name = 'GroupNoticeRequest';
    messageFlags = MessageFlags.FrequencyLow;
    id = Message.GroupNoticeRequest;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    Data: {
        GroupNoticeID: UUID;
    };

    getSize(): number
    {
        return 48;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        this.Data['GroupNoticeID'].writeToBuffer(buf, pos);
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
        const newObjData: {
            GroupNoticeID: UUID
        } = {
            GroupNoticeID: UUID.zero()
        };
        newObjData['GroupNoticeID'] = new UUID(buf, pos);
        pos += 16;
        this.Data = newObjData;
        return pos - startPos;
    }
}

