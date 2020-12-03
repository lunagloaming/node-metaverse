// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class AtomicPassObjectMessage implements MessageBase
{
    name = 'AtomicPassObject';
    messageFlags = MessageFlags.Trusted | MessageFlags.FrequencyHigh;
    id = Message.AtomicPassObject;

    TaskData: {
        TaskID: UUID;
        AttachmentNeedsSave: boolean;
    };

    getSize(): number
    {
        return 17;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.TaskData['TaskID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt8((this.TaskData['AttachmentNeedsSave']) ? 1 : 0, pos++);
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        const newObjTaskData: {
            TaskID: UUID,
            AttachmentNeedsSave: boolean
        } = {
            TaskID: UUID.zero(),
            AttachmentNeedsSave: false
        };
        newObjTaskData['TaskID'] = new UUID(buf, pos);
        pos += 16;
        newObjTaskData['AttachmentNeedsSave'] = (buf.readUInt8(pos++) === 1);
        this.TaskData = newObjTaskData;
        return pos - startPos;
    }
}

