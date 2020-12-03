// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class RequestGodlikePowersMessage implements MessageBase
{
    name = 'RequestGodlikePowers';
    messageFlags = MessageFlags.FrequencyLow;
    id = Message.RequestGodlikePowers;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    RequestBlock: {
        Godlike: boolean;
        Token: UUID;
    };

    getSize(): number
    {
        return 49;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt8((this.RequestBlock['Godlike']) ? 1 : 0, pos++);
        this.RequestBlock['Token'].writeToBuffer(buf, pos);
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
        const newObjRequestBlock: {
            Godlike: boolean,
            Token: UUID
        } = {
            Godlike: false,
            Token: UUID.zero()
        };
        newObjRequestBlock['Godlike'] = (buf.readUInt8(pos++) === 1);
        newObjRequestBlock['Token'] = new UUID(buf, pos);
        pos += 16;
        this.RequestBlock = newObjRequestBlock;
        return pos - startPos;
    }
}

