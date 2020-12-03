// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { Vector3 } from '../Vector3';
import { Quaternion } from '../Quaternion';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class AvatarSitResponseMessage implements MessageBase
{
    name = 'AvatarSitResponse';
    messageFlags = MessageFlags.Trusted | MessageFlags.Zerocoded | MessageFlags.FrequencyHigh;
    id = Message.AvatarSitResponse;

    SitObject: {
        ID: UUID;
    };
    SitTransform: {
        AutoPilot: boolean;
        SitPosition: Vector3;
        SitRotation: Quaternion;
        CameraEyeOffset: Vector3;
        CameraAtOffset: Vector3;
        ForceMouselook: boolean;
    };

    getSize(): number
    {
        return 66;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.SitObject['ID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt8((this.SitTransform['AutoPilot']) ? 1 : 0, pos++);
        this.SitTransform['SitPosition'].writeToBuffer(buf, pos, false);
        pos += 12;
        this.SitTransform['SitRotation'].writeToBuffer(buf, pos);
        pos += 12;
        this.SitTransform['CameraEyeOffset'].writeToBuffer(buf, pos, false);
        pos += 12;
        this.SitTransform['CameraAtOffset'].writeToBuffer(buf, pos, false);
        pos += 12;
        buf.writeUInt8((this.SitTransform['ForceMouselook']) ? 1 : 0, pos++);
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        const newObjSitObject: {
            ID: UUID
        } = {
            ID: UUID.zero()
        };
        newObjSitObject['ID'] = new UUID(buf, pos);
        pos += 16;
        this.SitObject = newObjSitObject;
        const newObjSitTransform: {
            AutoPilot: boolean,
            SitPosition: Vector3,
            SitRotation: Quaternion,
            CameraEyeOffset: Vector3,
            CameraAtOffset: Vector3,
            ForceMouselook: boolean
        } = {
            AutoPilot: false,
            SitPosition: Vector3.getZero(),
            SitRotation: Quaternion.getIdentity(),
            CameraEyeOffset: Vector3.getZero(),
            CameraAtOffset: Vector3.getZero(),
            ForceMouselook: false
        };
        newObjSitTransform['AutoPilot'] = (buf.readUInt8(pos++) === 1);
        newObjSitTransform['SitPosition'] = new Vector3(buf, pos, false);
        pos += 12;
        newObjSitTransform['SitRotation'] = new Quaternion(buf, pos);
        pos += 12;
        newObjSitTransform['CameraEyeOffset'] = new Vector3(buf, pos, false);
        pos += 12;
        newObjSitTransform['CameraAtOffset'] = new Vector3(buf, pos, false);
        pos += 12;
        newObjSitTransform['ForceMouselook'] = (buf.readUInt8(pos++) === 1);
        this.SitTransform = newObjSitTransform;
        return pos - startPos;
    }
}

