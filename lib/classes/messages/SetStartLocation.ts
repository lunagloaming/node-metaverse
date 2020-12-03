// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { Vector3 } from '../Vector3';
import * as Long from 'long';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class SetStartLocationMessage implements MessageBase
{
    name = 'SetStartLocation';
    messageFlags = MessageFlags.Trusted | MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = Message.SetStartLocation;

    StartLocationData: {
        AgentID: UUID;
        RegionID: UUID;
        LocationID: number;
        RegionHandle: Long;
        LocationPos: Vector3;
        LocationLookAt: Vector3;
    };

    getSize(): number
    {
        return 68;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.StartLocationData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.StartLocationData['RegionID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt32LE(this.StartLocationData['LocationID'], pos);
        pos += 4;
        buf.writeInt32LE(this.StartLocationData['RegionHandle'].low, pos);
        pos += 4;
        buf.writeInt32LE(this.StartLocationData['RegionHandle'].high, pos);
        pos += 4;
        this.StartLocationData['LocationPos'].writeToBuffer(buf, pos, false);
        pos += 12;
        this.StartLocationData['LocationLookAt'].writeToBuffer(buf, pos, false);
        pos += 12;
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        const newObjStartLocationData: {
            AgentID: UUID,
            RegionID: UUID,
            LocationID: number,
            RegionHandle: Long,
            LocationPos: Vector3,
            LocationLookAt: Vector3
        } = {
            AgentID: UUID.zero(),
            RegionID: UUID.zero(),
            LocationID: 0,
            RegionHandle: Long.ZERO,
            LocationPos: Vector3.getZero(),
            LocationLookAt: Vector3.getZero()
        };
        newObjStartLocationData['AgentID'] = new UUID(buf, pos);
        pos += 16;
        newObjStartLocationData['RegionID'] = new UUID(buf, pos);
        pos += 16;
        newObjStartLocationData['LocationID'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjStartLocationData['RegionHandle'] = new Long(buf.readInt32LE(pos), buf.readInt32LE(pos+4));
        pos += 8;
        newObjStartLocationData['LocationPos'] = new Vector3(buf, pos, false);
        pos += 12;
        newObjStartLocationData['LocationLookAt'] = new Vector3(buf, pos, false);
        pos += 12;
        this.StartLocationData = newObjStartLocationData;
        return pos - startPos;
    }
}

