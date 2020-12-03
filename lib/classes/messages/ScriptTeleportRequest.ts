// This file has been automatically generated by writeMessageClasses.js

import { Vector3 } from '../Vector3';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class ScriptTeleportRequestMessage implements MessageBase
{
    name = 'ScriptTeleportRequest';
    messageFlags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = Message.ScriptTeleportRequest;

    Data: {
        ObjectName: Buffer;
        SimName: Buffer;
        SimPosition: Vector3;
        LookAt: Vector3;
    };

    getSize(): number
    {
        return (this.Data['ObjectName'].length + 1 + this.Data['SimName'].length + 1) + 24;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        buf.writeUInt8(this.Data['ObjectName'].length, pos++);
        this.Data['ObjectName'].copy(buf, pos);
        pos += this.Data['ObjectName'].length;
        buf.writeUInt8(this.Data['SimName'].length, pos++);
        this.Data['SimName'].copy(buf, pos);
        pos += this.Data['SimName'].length;
        this.Data['SimPosition'].writeToBuffer(buf, pos, false);
        pos += 12;
        this.Data['LookAt'].writeToBuffer(buf, pos, false);
        pos += 12;
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjData: {
            ObjectName: Buffer,
            SimName: Buffer,
            SimPosition: Vector3,
            LookAt: Vector3
        } = {
            ObjectName: Buffer.allocUnsafe(0),
            SimName: Buffer.allocUnsafe(0),
            SimPosition: Vector3.getZero(),
            LookAt: Vector3.getZero()
        };
        varLength = buf.readUInt8(pos++);
        newObjData['ObjectName'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        varLength = buf.readUInt8(pos++);
        newObjData['SimName'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        newObjData['SimPosition'] = new Vector3(buf, pos, false);
        pos += 12;
        newObjData['LookAt'] = new Vector3(buf, pos, false);
        pos += 12;
        this.Data = newObjData;
        return pos - startPos;
    }
}

