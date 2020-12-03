// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class GroupAccountSummaryRequestMessage implements MessageBase
{
    name = 'GroupAccountSummaryRequest';
    messageFlags = MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = Message.GroupAccountSummaryRequest;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
        GroupID: UUID;
    };
    MoneyData: {
        RequestID: UUID;
        IntervalDays: number;
        CurrentInterval: number;
    };

    getSize(): number
    {
        return 72;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['GroupID'].writeToBuffer(buf, pos);
        pos += 16;
        this.MoneyData['RequestID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeInt32LE(this.MoneyData['IntervalDays'], pos);
        pos += 4;
        buf.writeInt32LE(this.MoneyData['CurrentInterval'], pos);
        pos += 4;
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        const newObjAgentData: {
            AgentID: UUID,
            SessionID: UUID,
            GroupID: UUID
        } = {
            AgentID: UUID.zero(),
            SessionID: UUID.zero(),
            GroupID: UUID.zero()
        };
        newObjAgentData['AgentID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentData['SessionID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentData['GroupID'] = new UUID(buf, pos);
        pos += 16;
        this.AgentData = newObjAgentData;
        const newObjMoneyData: {
            RequestID: UUID,
            IntervalDays: number,
            CurrentInterval: number
        } = {
            RequestID: UUID.zero(),
            IntervalDays: 0,
            CurrentInterval: 0
        };
        newObjMoneyData['RequestID'] = new UUID(buf, pos);
        pos += 16;
        newObjMoneyData['IntervalDays'] = buf.readInt32LE(pos);
        pos += 4;
        newObjMoneyData['CurrentInterval'] = buf.readInt32LE(pos);
        pos += 4;
        this.MoneyData = newObjMoneyData;
        return pos - startPos;
    }
}

