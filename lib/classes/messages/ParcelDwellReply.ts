// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class ParcelDwellReplyMessage implements MessageBase
{
    name = 'ParcelDwellReply';
    messageFlags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = Message.ParcelDwellReply;

    AgentData: {
        AgentID: UUID;
    };
    Data: {
        LocalID: number;
        ParcelID: UUID;
        Dwell: number;
    };

    getSize(): number
    {
        return 40;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeInt32LE(this.Data['LocalID'], pos);
        pos += 4;
        this.Data['ParcelID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeFloatLE(this.Data['Dwell'], pos);
        pos += 4;
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        const newObjAgentData: {
            AgentID: UUID
        } = {
            AgentID: UUID.zero()
        };
        newObjAgentData['AgentID'] = new UUID(buf, pos);
        pos += 16;
        this.AgentData = newObjAgentData;
        const newObjData: {
            LocalID: number,
            ParcelID: UUID,
            Dwell: number
        } = {
            LocalID: 0,
            ParcelID: UUID.zero(),
            Dwell: 0
        };
        newObjData['LocalID'] = buf.readInt32LE(pos);
        pos += 4;
        newObjData['ParcelID'] = new UUID(buf, pos);
        pos += 16;
        newObjData['Dwell'] = buf.readFloatLE(pos);
        pos += 4;
        this.Data = newObjData;
        return pos - startPos;
    }
}

