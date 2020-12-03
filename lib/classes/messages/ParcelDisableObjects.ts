// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class ParcelDisableObjectsMessage implements MessageBase
{
    name = 'ParcelDisableObjects';
    messageFlags = MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = Message.ParcelDisableObjects;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    ParcelData: {
        LocalID: number;
        ReturnType: number;
    };
    TaskIDs: {
        TaskID: UUID;
    }[];
    OwnerIDs: {
        OwnerID: UUID;
    }[];

    getSize(): number
    {
        return ((16) * this.TaskIDs.length) + ((16) * this.OwnerIDs.length) + 42;
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
        buf.writeUInt32LE(this.ParcelData['ReturnType'], pos);
        pos += 4;
        let count = this.TaskIDs.length;
        buf.writeUInt8(this.TaskIDs.length, pos++);
        for (let i = 0; i < count; i++)
        {
            this.TaskIDs[i]['TaskID'].writeToBuffer(buf, pos);
            pos += 16;
        }
        count = this.OwnerIDs.length;
        buf.writeUInt8(this.OwnerIDs.length, pos++);
        for (let i = 0; i < count; i++)
        {
            this.OwnerIDs[i]['OwnerID'].writeToBuffer(buf, pos);
            pos += 16;
        }
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
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
            ReturnType: number
        } = {
            LocalID: 0,
            ReturnType: 0
        };
        newObjParcelData['LocalID'] = buf.readInt32LE(pos);
        pos += 4;
        newObjParcelData['ReturnType'] = buf.readUInt32LE(pos);
        pos += 4;
        this.ParcelData = newObjParcelData;
        if (pos >= buf.length)
        {
            return pos - startPos;
        }
        let count = buf.readUInt8(pos++);
        this.TaskIDs = [];
        for (let i = 0; i < count; i++)
        {
            const newObjTaskIDs: {
                TaskID: UUID
            } = {
                TaskID: UUID.zero()
            };
            newObjTaskIDs['TaskID'] = new UUID(buf, pos);
            pos += 16;
            this.TaskIDs.push(newObjTaskIDs);
        }
        if (pos >= buf.length)
        {
            return pos - startPos;
        }
        count = buf.readUInt8(pos++);
        this.OwnerIDs = [];
        for (let i = 0; i < count; i++)
        {
            const newObjOwnerIDs: {
                OwnerID: UUID
            } = {
                OwnerID: UUID.zero()
            };
            newObjOwnerIDs['OwnerID'] = new UUID(buf, pos);
            pos += 16;
            this.OwnerIDs.push(newObjOwnerIDs);
        }
        return pos - startPos;
    }
}

