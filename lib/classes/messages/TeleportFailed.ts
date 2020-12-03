// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class TeleportFailedMessage implements MessageBase
{
    name = 'TeleportFailed';
    messageFlags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = Message.TeleportFailed;

    Info: {
        AgentID: UUID;
        Reason: Buffer;
    };
    AlertInfo: {
        Message: Buffer;
        ExtraParams: Buffer;
    }[];

    getSize(): number
    {
        return (this.Info['Reason'].length + 1) + this.calculateVarVarSize(this.AlertInfo, 'Message', 1) + this.calculateVarVarSize(this.AlertInfo, 'ExtraParams', 1) + 17;
    }

    calculateVarVarSize(block: {[key: string]: any}[], paramName: string, extraPerVar: number): number
    {
        let size = 0;
        for (const bl of block)
        {
            size += bl[paramName].length + extraPerVar;
        }
        return size;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.Info['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt8(this.Info['Reason'].length, pos++);
        this.Info['Reason'].copy(buf, pos);
        pos += this.Info['Reason'].length;
        const count = this.AlertInfo.length;
        buf.writeUInt8(this.AlertInfo.length, pos++);
        for (let i = 0; i < count; i++)
        {
            buf.writeUInt8(this.AlertInfo[i]['Message'].length, pos++);
            this.AlertInfo[i]['Message'].copy(buf, pos);
            pos += this.AlertInfo[i]['Message'].length;
            buf.writeUInt8(this.AlertInfo[i]['ExtraParams'].length, pos++);
            this.AlertInfo[i]['ExtraParams'].copy(buf, pos);
            pos += this.AlertInfo[i]['ExtraParams'].length;
        }
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjInfo: {
            AgentID: UUID,
            Reason: Buffer
        } = {
            AgentID: UUID.zero(),
            Reason: Buffer.allocUnsafe(0)
        };
        newObjInfo['AgentID'] = new UUID(buf, pos);
        pos += 16;
        varLength = buf.readUInt8(pos++);
        newObjInfo['Reason'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        this.Info = newObjInfo;
        if (pos >= buf.length)
        {
            return pos - startPos;
        }
        const count = buf.readUInt8(pos++);
        this.AlertInfo = [];
        for (let i = 0; i < count; i++)
        {
            const newObjAlertInfo: {
                Message: Buffer,
                ExtraParams: Buffer
            } = {
                Message: Buffer.allocUnsafe(0),
                ExtraParams: Buffer.allocUnsafe(0)
            };
            varLength = buf.readUInt8(pos++);
            newObjAlertInfo['Message'] = buf.slice(pos, pos + varLength);
            pos += varLength;
            varLength = buf.readUInt8(pos++);
            newObjAlertInfo['ExtraParams'] = buf.slice(pos, pos + varLength);
            pos += varLength;
            this.AlertInfo.push(newObjAlertInfo);
        }
        return pos - startPos;
    }
}

