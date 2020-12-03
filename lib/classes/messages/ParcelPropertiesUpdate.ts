// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { Vector3 } from '../Vector3';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class ParcelPropertiesUpdateMessage implements MessageBase
{
    name = 'ParcelPropertiesUpdate';
    messageFlags = MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = Message.ParcelPropertiesUpdate;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    ParcelData: {
        LocalID: number;
        Flags: number;
        ParcelFlags: number;
        SalePrice: number;
        Name: Buffer;
        Desc: Buffer;
        MusicURL: Buffer;
        MediaURL: Buffer;
        MediaID: UUID;
        MediaAutoScale: number;
        GroupID: UUID;
        PassPrice: number;
        PassHours: number;
        Category: number;
        AuthBuyerID: UUID;
        SnapshotID: UUID;
        UserLocation: Vector3;
        UserLookAt: Vector3;
        LandingType: number;
    };

    getSize(): number
    {
        return (this.ParcelData['Name'].length + 1 + this.ParcelData['Desc'].length + 1 + this.ParcelData['MusicURL'].length + 1 + this.ParcelData['MediaURL'].length + 1) + 147;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeInt32LE(this.ParcelData['LocalID'], pos);
        pos += 4;
        buf.writeUInt32LE(this.ParcelData['Flags'], pos);
        pos += 4;
        buf.writeUInt32LE(this.ParcelData['ParcelFlags'], pos);
        pos += 4;
        buf.writeInt32LE(this.ParcelData['SalePrice'], pos);
        pos += 4;
        buf.writeUInt8(this.ParcelData['Name'].length, pos++);
        this.ParcelData['Name'].copy(buf, pos);
        pos += this.ParcelData['Name'].length;
        buf.writeUInt8(this.ParcelData['Desc'].length, pos++);
        this.ParcelData['Desc'].copy(buf, pos);
        pos += this.ParcelData['Desc'].length;
        buf.writeUInt8(this.ParcelData['MusicURL'].length, pos++);
        this.ParcelData['MusicURL'].copy(buf, pos);
        pos += this.ParcelData['MusicURL'].length;
        buf.writeUInt8(this.ParcelData['MediaURL'].length, pos++);
        this.ParcelData['MediaURL'].copy(buf, pos);
        pos += this.ParcelData['MediaURL'].length;
        this.ParcelData['MediaID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt8(this.ParcelData['MediaAutoScale'], pos++);
        this.ParcelData['GroupID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeInt32LE(this.ParcelData['PassPrice'], pos);
        pos += 4;
        buf.writeFloatLE(this.ParcelData['PassHours'], pos);
        pos += 4;
        buf.writeUInt8(this.ParcelData['Category'], pos++);
        this.ParcelData['AuthBuyerID'].writeToBuffer(buf, pos);
        pos += 16;
        this.ParcelData['SnapshotID'].writeToBuffer(buf, pos);
        pos += 16;
        this.ParcelData['UserLocation'].writeToBuffer(buf, pos, false);
        pos += 12;
        this.ParcelData['UserLookAt'].writeToBuffer(buf, pos, false);
        pos += 12;
        buf.writeUInt8(this.ParcelData['LandingType'], pos++);
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
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
            LocalID: number,
            Flags: number,
            ParcelFlags: number,
            SalePrice: number,
            Name: Buffer,
            Desc: Buffer,
            MusicURL: Buffer,
            MediaURL: Buffer,
            MediaID: UUID,
            MediaAutoScale: number,
            GroupID: UUID,
            PassPrice: number,
            PassHours: number,
            Category: number,
            AuthBuyerID: UUID,
            SnapshotID: UUID,
            UserLocation: Vector3,
            UserLookAt: Vector3,
            LandingType: number
        } = {
            LocalID: 0,
            Flags: 0,
            ParcelFlags: 0,
            SalePrice: 0,
            Name: Buffer.allocUnsafe(0),
            Desc: Buffer.allocUnsafe(0),
            MusicURL: Buffer.allocUnsafe(0),
            MediaURL: Buffer.allocUnsafe(0),
            MediaID: UUID.zero(),
            MediaAutoScale: 0,
            GroupID: UUID.zero(),
            PassPrice: 0,
            PassHours: 0,
            Category: 0,
            AuthBuyerID: UUID.zero(),
            SnapshotID: UUID.zero(),
            UserLocation: Vector3.getZero(),
            UserLookAt: Vector3.getZero(),
            LandingType: 0
        };
        newObjParcelData['LocalID'] = buf.readInt32LE(pos);
        pos += 4;
        newObjParcelData['Flags'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjParcelData['ParcelFlags'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjParcelData['SalePrice'] = buf.readInt32LE(pos);
        pos += 4;
        varLength = buf.readUInt8(pos++);
        newObjParcelData['Name'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        varLength = buf.readUInt8(pos++);
        newObjParcelData['Desc'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        varLength = buf.readUInt8(pos++);
        newObjParcelData['MusicURL'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        varLength = buf.readUInt8(pos++);
        newObjParcelData['MediaURL'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        newObjParcelData['MediaID'] = new UUID(buf, pos);
        pos += 16;
        newObjParcelData['MediaAutoScale'] = buf.readUInt8(pos++);
        newObjParcelData['GroupID'] = new UUID(buf, pos);
        pos += 16;
        newObjParcelData['PassPrice'] = buf.readInt32LE(pos);
        pos += 4;
        newObjParcelData['PassHours'] = buf.readFloatLE(pos);
        pos += 4;
        newObjParcelData['Category'] = buf.readUInt8(pos++);
        newObjParcelData['AuthBuyerID'] = new UUID(buf, pos);
        pos += 16;
        newObjParcelData['SnapshotID'] = new UUID(buf, pos);
        pos += 16;
        newObjParcelData['UserLocation'] = new Vector3(buf, pos, false);
        pos += 12;
        newObjParcelData['UserLookAt'] = new Vector3(buf, pos, false);
        pos += 12;
        newObjParcelData['LandingType'] = buf.readUInt8(pos++);
        this.ParcelData = newObjParcelData;
        return pos - startPos;
    }
}

