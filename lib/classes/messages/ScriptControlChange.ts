// This file has been automatically generated by writeMessageClasses.js

import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class ScriptControlChangeMessage implements MessageBase
{
    name = 'ScriptControlChange';
    messageFlags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = Message.ScriptControlChange;

    Data: {
        TakeControls: boolean;
        Controls: number;
        PassToAgent: boolean;
    }[];

    getSize(): number
    {
        return ((6) * this.Data.length) + 1;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        const count = this.Data.length;
        buf.writeUInt8(this.Data.length, pos++);
        for (let i = 0; i < count; i++)
        {
            buf.writeUInt8((this.Data[i]['TakeControls']) ? 1 : 0, pos++);
            buf.writeUInt32LE(this.Data[i]['Controls'], pos);
            pos += 4;
            buf.writeUInt8((this.Data[i]['PassToAgent']) ? 1 : 0, pos++);
        }
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        if (pos >= buf.length)
        {
            return pos - startPos;
        }
        const count = buf.readUInt8(pos++);
        this.Data = [];
        for (let i = 0; i < count; i++)
        {
            const newObjData: {
                TakeControls: boolean,
                Controls: number,
                PassToAgent: boolean
            } = {
                TakeControls: false,
                Controls: 0,
                PassToAgent: false
            };
            newObjData['TakeControls'] = (buf.readUInt8(pos++) === 1);
            newObjData['Controls'] = buf.readUInt32LE(pos);
            pos += 4;
            newObjData['PassToAgent'] = (buf.readUInt8(pos++) === 1);
            this.Data.push(newObjData);
        }
        return pos - startPos;
    }
}

