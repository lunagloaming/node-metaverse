// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class DenyTrustedCircuitMessage implements MessageBase
{
    name = 'DenyTrustedCircuit';
    messageFlags = MessageFlags.FrequencyLow;
    id = Message.DenyTrustedCircuit;

    DataBlock: {
        EndPointID: UUID;
    };

    getSize(): number
    {
        return 16;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.DataBlock['EndPointID'].writeToBuffer(buf, pos);
        pos += 16;
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        const newObjDataBlock: {
            EndPointID: UUID
        } = {
            EndPointID: UUID.zero()
        };
        newObjDataBlock['EndPointID'] = new UUID(buf, pos);
        pos += 16;
        this.DataBlock = newObjDataBlock;
        return pos - startPos;
    }
}

