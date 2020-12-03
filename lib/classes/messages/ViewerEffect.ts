// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class ViewerEffectMessage implements MessageBase
{
    name = 'ViewerEffect';
    messageFlags = MessageFlags.Zerocoded | MessageFlags.FrequencyMedium;
    id = Message.ViewerEffect;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    Effect: {
        ID: UUID;
        AgentID: UUID;
        Type: number;
        Duration: number;
        Color: Buffer;
        TypeData: Buffer;
    }[];

    getSize(): number
    {
        return this.calculateVarVarSize(this.Effect, 'TypeData', 1) + ((41) * this.Effect.length) + 33;
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
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        const count = this.Effect.length;
        buf.writeUInt8(this.Effect.length, pos++);
        for (let i = 0; i < count; i++)
        {
            this.Effect[i]['ID'].writeToBuffer(buf, pos);
            pos += 16;
            this.Effect[i]['AgentID'].writeToBuffer(buf, pos);
            pos += 16;
            buf.writeUInt8(this.Effect[i]['Type'], pos++);
            buf.writeFloatLE(this.Effect[i]['Duration'], pos);
            pos += 4;
            this.Effect[i]['Color'].copy(buf, pos);
            pos += 4;
            buf.writeUInt8(this.Effect[i]['TypeData'].length, pos++);
            this.Effect[i]['TypeData'].copy(buf, pos);
            pos += this.Effect[i]['TypeData'].length;
        }
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
        if (pos >= buf.length)
        {
            return pos - startPos;
        }
        const count = buf.readUInt8(pos++);
        this.Effect = [];
        for (let i = 0; i < count; i++)
        {
            const newObjEffect: {
                ID: UUID,
                AgentID: UUID,
                Type: number,
                Duration: number,
                Color: Buffer,
                TypeData: Buffer
            } = {
                ID: UUID.zero(),
                AgentID: UUID.zero(),
                Type: 0,
                Duration: 0,
                Color: Buffer.allocUnsafe(0),
                TypeData: Buffer.allocUnsafe(0)
            };
            newObjEffect['ID'] = new UUID(buf, pos);
            pos += 16;
            newObjEffect['AgentID'] = new UUID(buf, pos);
            pos += 16;
            newObjEffect['Type'] = buf.readUInt8(pos++);
            newObjEffect['Duration'] = buf.readFloatLE(pos);
            pos += 4;
            newObjEffect['Color'] = buf.slice(pos, pos + 4);
            pos += 4;
            varLength = buf.readUInt8(pos++);
            newObjEffect['TypeData'] = buf.slice(pos, pos + varLength);
            pos += varLength;
            this.Effect.push(newObjEffect);
        }
        return pos - startPos;
    }
}

