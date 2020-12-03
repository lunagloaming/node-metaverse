// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class AvatarInterestsUpdateMessage implements MessageBase
{
    name = 'AvatarInterestsUpdate';
    messageFlags = MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = Message.AvatarInterestsUpdate;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
    };
    PropertiesData: {
        WantToMask: number;
        WantToText: Buffer;
        SkillsMask: number;
        SkillsText: Buffer;
        LanguagesText: Buffer;
    };

    getSize(): number
    {
        return (this.PropertiesData['WantToText'].length + 1 + this.PropertiesData['SkillsText'].length + 1 + this.PropertiesData['LanguagesText'].length + 1) + 40;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt32LE(this.PropertiesData['WantToMask'], pos);
        pos += 4;
        buf.writeUInt8(this.PropertiesData['WantToText'].length, pos++);
        this.PropertiesData['WantToText'].copy(buf, pos);
        pos += this.PropertiesData['WantToText'].length;
        buf.writeUInt32LE(this.PropertiesData['SkillsMask'], pos);
        pos += 4;
        buf.writeUInt8(this.PropertiesData['SkillsText'].length, pos++);
        this.PropertiesData['SkillsText'].copy(buf, pos);
        pos += this.PropertiesData['SkillsText'].length;
        buf.writeUInt8(this.PropertiesData['LanguagesText'].length, pos++);
        this.PropertiesData['LanguagesText'].copy(buf, pos);
        pos += this.PropertiesData['LanguagesText'].length;
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
        const newObjPropertiesData: {
            WantToMask: number,
            WantToText: Buffer,
            SkillsMask: number,
            SkillsText: Buffer,
            LanguagesText: Buffer
        } = {
            WantToMask: 0,
            WantToText: Buffer.allocUnsafe(0),
            SkillsMask: 0,
            SkillsText: Buffer.allocUnsafe(0),
            LanguagesText: Buffer.allocUnsafe(0)
        };
        newObjPropertiesData['WantToMask'] = buf.readUInt32LE(pos);
        pos += 4;
        varLength = buf.readUInt8(pos++);
        newObjPropertiesData['WantToText'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        newObjPropertiesData['SkillsMask'] = buf.readUInt32LE(pos);
        pos += 4;
        varLength = buf.readUInt8(pos++);
        newObjPropertiesData['SkillsText'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        varLength = buf.readUInt8(pos++);
        newObjPropertiesData['LanguagesText'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        this.PropertiesData = newObjPropertiesData;
        return pos - startPos;
    }
}

