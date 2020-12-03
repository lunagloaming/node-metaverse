// This file has been automatically generated by writeMessageClasses.js

import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class ParcelOverlayMessage implements MessageBase
{
    name = 'ParcelOverlay';
    messageFlags = MessageFlags.Trusted | MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = Message.ParcelOverlay;

    ParcelData: {
        SequenceID: number;
        Data: Buffer;
    };

    getSize(): number
    {
        return (this.ParcelData['Data'].length + 2) + 4;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        buf.writeInt32LE(this.ParcelData['SequenceID'], pos);
        pos += 4;
        buf.writeUInt16LE(this.ParcelData['Data'].length, pos);
        pos += 2;
        this.ParcelData['Data'].copy(buf, pos);
        pos += this.ParcelData['Data'].length;
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjParcelData: {
            SequenceID: number,
            Data: Buffer
        } = {
            SequenceID: 0,
            Data: Buffer.allocUnsafe(0)
        };
        newObjParcelData['SequenceID'] = buf.readInt32LE(pos);
        pos += 4;
        varLength = buf.readUInt16LE(pos);
        pos += 2;
        newObjParcelData['Data'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        this.ParcelData = newObjParcelData;
        return pos - startPos;
    }
}

