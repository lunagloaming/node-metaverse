// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class ImagePacketMessage implements MessageBase
{
    name = 'ImagePacket';
    messageFlags = MessageFlags.Trusted | MessageFlags.FrequencyHigh;
    id = Message.ImagePacket;

    ImageID: {
        ID: UUID;
        Packet: number;
    };
    ImageData: {
        Data: Buffer;
    };

    getSize(): number
    {
        return (this.ImageData['Data'].length + 2) + 18;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.ImageID['ID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt16LE(this.ImageID['Packet'], pos);
        pos += 2;
        buf.writeUInt16LE(this.ImageData['Data'].length, pos);
        pos += 2;
        this.ImageData['Data'].copy(buf, pos);
        pos += this.ImageData['Data'].length;
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjImageID: {
            ID: UUID,
            Packet: number
        } = {
            ID: UUID.zero(),
            Packet: 0
        };
        newObjImageID['ID'] = new UUID(buf, pos);
        pos += 16;
        newObjImageID['Packet'] = buf.readUInt16LE(pos);
        pos += 2;
        this.ImageID = newObjImageID;
        const newObjImageData: {
            Data: Buffer
        } = {
            Data: Buffer.allocUnsafe(0)
        };
        varLength = buf.readUInt16LE(pos);
        pos += 2;
        newObjImageData['Data'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        this.ImageData = newObjImageData;
        return pos - startPos;
    }
}

