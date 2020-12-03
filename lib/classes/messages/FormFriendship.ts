// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class FormFriendshipMessage implements MessageBase
{
    name = 'FormFriendship';
    messageFlags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = Message.FormFriendship;

    AgentBlock: {
        SourceID: UUID;
        DestID: UUID;
    };

    getSize(): number
    {
        return 32;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentBlock['SourceID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentBlock['DestID'].writeToBuffer(buf, pos);
        pos += 16;
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        const newObjAgentBlock: {
            SourceID: UUID,
            DestID: UUID
        } = {
            SourceID: UUID.zero(),
            DestID: UUID.zero()
        };
        newObjAgentBlock['SourceID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentBlock['DestID'] = new UUID(buf, pos);
        pos += 16;
        this.AgentBlock = newObjAgentBlock;
        return pos - startPos;
    }
}

