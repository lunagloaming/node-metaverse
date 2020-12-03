// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class GroupRoleMembersReplyMessage implements MessageBase
{
    name = 'GroupRoleMembersReply';
    messageFlags = MessageFlags.Trusted | MessageFlags.FrequencyLow;
    id = Message.GroupRoleMembersReply;

    AgentData: {
        AgentID: UUID;
        GroupID: UUID;
        RequestID: UUID;
        TotalPairs: number;
    };
    MemberData: {
        RoleID: UUID;
        MemberID: UUID;
    }[];

    getSize(): number
    {
        return ((32) * this.MemberData.length) + 53;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['GroupID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['RequestID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt32LE(this.AgentData['TotalPairs'], pos);
        pos += 4;
        const count = this.MemberData.length;
        buf.writeUInt8(this.MemberData.length, pos++);
        for (let i = 0; i < count; i++)
        {
            this.MemberData[i]['RoleID'].writeToBuffer(buf, pos);
            pos += 16;
            this.MemberData[i]['MemberID'].writeToBuffer(buf, pos);
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
            GroupID: UUID,
            RequestID: UUID,
            TotalPairs: number
        } = {
            AgentID: UUID.zero(),
            GroupID: UUID.zero(),
            RequestID: UUID.zero(),
            TotalPairs: 0
        };
        newObjAgentData['AgentID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentData['GroupID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentData['RequestID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentData['TotalPairs'] = buf.readUInt32LE(pos);
        pos += 4;
        this.AgentData = newObjAgentData;
        if (pos >= buf.length)
        {
            return pos - startPos;
        }
        const count = buf.readUInt8(pos++);
        this.MemberData = [];
        for (let i = 0; i < count; i++)
        {
            const newObjMemberData: {
                RoleID: UUID,
                MemberID: UUID
            } = {
                RoleID: UUID.zero(),
                MemberID: UUID.zero()
            };
            newObjMemberData['RoleID'] = new UUID(buf, pos);
            pos += 16;
            newObjMemberData['MemberID'] = new UUID(buf, pos);
            pos += 16;
            this.MemberData.push(newObjMemberData);
        }
        return pos - startPos;
    }
}

