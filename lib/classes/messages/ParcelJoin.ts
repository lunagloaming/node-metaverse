// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class ParcelJoinMessage implements MessageBase
{
    name = 'ParcelJoin';
    messageFlags = MessageFlags.FrequencyLow;
    id = Message.ParcelJoin;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    ParcelData: {
        West: number;
        South: number;
        East: number;
        North: number;
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
        buf.writeFloatLE(this.ParcelData['West'], pos);
        pos += 4;
        buf.writeFloatLE(this.ParcelData['South'], pos);
        pos += 4;
        buf.writeFloatLE(this.ParcelData['East'], pos);
        pos += 4;
        buf.writeFloatLE(this.ParcelData['North'], pos);
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
        const newObjParcelData: {
            West: number,
            South: number,
            East: number,
            North: number
        } = {
            West: 0,
            South: 0,
            East: 0,
            North: 0
        };
        newObjParcelData['West'] = buf.readFloatLE(pos);
        pos += 4;
        newObjParcelData['South'] = buf.readFloatLE(pos);
        pos += 4;
        newObjParcelData['East'] = buf.readFloatLE(pos);
        pos += 4;
        newObjParcelData['North'] = buf.readFloatLE(pos);
        pos += 4;
        this.ParcelData = newObjParcelData;
        return pos - startPos;
    }
}

