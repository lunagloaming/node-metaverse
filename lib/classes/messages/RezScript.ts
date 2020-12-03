// This file has been automatically generated by writeMessageClasses.js

import { UUID } from '../UUID';
import { MessageFlags } from '../../enums/MessageFlags';
import { MessageBase } from '../MessageBase';
import { Message } from '../../enums/Message';

export class RezScriptMessage implements MessageBase
{
    name = 'RezScript';
    messageFlags = MessageFlags.Zerocoded | MessageFlags.FrequencyLow;
    id = Message.RezScript;

    AgentData: {
        AgentID: UUID;
        SessionID: UUID;
        GroupID: UUID;
    };
    UpdateBlock: {
        ObjectLocalID: number;
        Enabled: boolean;
    };
    InventoryBlock: {
        ItemID: UUID;
        FolderID: UUID;
        CreatorID: UUID;
        OwnerID: UUID;
        GroupID: UUID;
        BaseMask: number;
        OwnerMask: number;
        GroupMask: number;
        EveryoneMask: number;
        NextOwnerMask: number;
        GroupOwned: boolean;
        TransactionID: UUID;
        Type: number;
        InvType: number;
        Flags: number;
        SaleType: number;
        SalePrice: number;
        Name: Buffer;
        Description: Buffer;
        CreationDate: number;
        CRC: number;
    };

    getSize(): number
    {
        return (this.InventoryBlock['Name'].length + 1 + this.InventoryBlock['Description'].length + 1) + 189;
    }

    // @ts-ignore
    writeToBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        this.AgentData['AgentID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['SessionID'].writeToBuffer(buf, pos);
        pos += 16;
        this.AgentData['GroupID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt32LE(this.UpdateBlock['ObjectLocalID'], pos);
        pos += 4;
        buf.writeUInt8((this.UpdateBlock['Enabled']) ? 1 : 0, pos++);
        this.InventoryBlock['ItemID'].writeToBuffer(buf, pos);
        pos += 16;
        this.InventoryBlock['FolderID'].writeToBuffer(buf, pos);
        pos += 16;
        this.InventoryBlock['CreatorID'].writeToBuffer(buf, pos);
        pos += 16;
        this.InventoryBlock['OwnerID'].writeToBuffer(buf, pos);
        pos += 16;
        this.InventoryBlock['GroupID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeUInt32LE(this.InventoryBlock['BaseMask'], pos);
        pos += 4;
        buf.writeUInt32LE(this.InventoryBlock['OwnerMask'], pos);
        pos += 4;
        buf.writeUInt32LE(this.InventoryBlock['GroupMask'], pos);
        pos += 4;
        buf.writeUInt32LE(this.InventoryBlock['EveryoneMask'], pos);
        pos += 4;
        buf.writeUInt32LE(this.InventoryBlock['NextOwnerMask'], pos);
        pos += 4;
        buf.writeUInt8((this.InventoryBlock['GroupOwned']) ? 1 : 0, pos++);
        this.InventoryBlock['TransactionID'].writeToBuffer(buf, pos);
        pos += 16;
        buf.writeInt8(this.InventoryBlock['Type'], pos++);
        buf.writeInt8(this.InventoryBlock['InvType'], pos++);
        buf.writeUInt32LE(this.InventoryBlock['Flags'], pos);
        pos += 4;
        buf.writeUInt8(this.InventoryBlock['SaleType'], pos++);
        buf.writeInt32LE(this.InventoryBlock['SalePrice'], pos);
        pos += 4;
        buf.writeUInt8(this.InventoryBlock['Name'].length, pos++);
        this.InventoryBlock['Name'].copy(buf, pos);
        pos += this.InventoryBlock['Name'].length;
        buf.writeUInt8(this.InventoryBlock['Description'].length, pos++);
        this.InventoryBlock['Description'].copy(buf, pos);
        pos += this.InventoryBlock['Description'].length;
        buf.writeInt32LE(this.InventoryBlock['CreationDate'], pos);
        pos += 4;
        buf.writeUInt32LE(this.InventoryBlock['CRC'], pos);
        pos += 4;
        return pos - startPos;
    }

    // @ts-ignore
    readFromBuffer(buf: Buffer, pos: number): number
    {
        const startPos = pos;
        let varLength = 0;
        const newObjAgentData: {
            AgentID: UUID,
            SessionID: UUID,
            GroupID: UUID
        } = {
            AgentID: UUID.zero(),
            SessionID: UUID.zero(),
            GroupID: UUID.zero()
        };
        newObjAgentData['AgentID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentData['SessionID'] = new UUID(buf, pos);
        pos += 16;
        newObjAgentData['GroupID'] = new UUID(buf, pos);
        pos += 16;
        this.AgentData = newObjAgentData;
        const newObjUpdateBlock: {
            ObjectLocalID: number,
            Enabled: boolean
        } = {
            ObjectLocalID: 0,
            Enabled: false
        };
        newObjUpdateBlock['ObjectLocalID'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjUpdateBlock['Enabled'] = (buf.readUInt8(pos++) === 1);
        this.UpdateBlock = newObjUpdateBlock;
        const newObjInventoryBlock: {
            ItemID: UUID,
            FolderID: UUID,
            CreatorID: UUID,
            OwnerID: UUID,
            GroupID: UUID,
            BaseMask: number,
            OwnerMask: number,
            GroupMask: number,
            EveryoneMask: number,
            NextOwnerMask: number,
            GroupOwned: boolean,
            TransactionID: UUID,
            Type: number,
            InvType: number,
            Flags: number,
            SaleType: number,
            SalePrice: number,
            Name: Buffer,
            Description: Buffer,
            CreationDate: number,
            CRC: number
        } = {
            ItemID: UUID.zero(),
            FolderID: UUID.zero(),
            CreatorID: UUID.zero(),
            OwnerID: UUID.zero(),
            GroupID: UUID.zero(),
            BaseMask: 0,
            OwnerMask: 0,
            GroupMask: 0,
            EveryoneMask: 0,
            NextOwnerMask: 0,
            GroupOwned: false,
            TransactionID: UUID.zero(),
            Type: 0,
            InvType: 0,
            Flags: 0,
            SaleType: 0,
            SalePrice: 0,
            Name: Buffer.allocUnsafe(0),
            Description: Buffer.allocUnsafe(0),
            CreationDate: 0,
            CRC: 0
        };
        newObjInventoryBlock['ItemID'] = new UUID(buf, pos);
        pos += 16;
        newObjInventoryBlock['FolderID'] = new UUID(buf, pos);
        pos += 16;
        newObjInventoryBlock['CreatorID'] = new UUID(buf, pos);
        pos += 16;
        newObjInventoryBlock['OwnerID'] = new UUID(buf, pos);
        pos += 16;
        newObjInventoryBlock['GroupID'] = new UUID(buf, pos);
        pos += 16;
        newObjInventoryBlock['BaseMask'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjInventoryBlock['OwnerMask'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjInventoryBlock['GroupMask'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjInventoryBlock['EveryoneMask'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjInventoryBlock['NextOwnerMask'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjInventoryBlock['GroupOwned'] = (buf.readUInt8(pos++) === 1);
        newObjInventoryBlock['TransactionID'] = new UUID(buf, pos);
        pos += 16;
        newObjInventoryBlock['Type'] = buf.readInt8(pos++);
        newObjInventoryBlock['InvType'] = buf.readInt8(pos++);
        newObjInventoryBlock['Flags'] = buf.readUInt32LE(pos);
        pos += 4;
        newObjInventoryBlock['SaleType'] = buf.readUInt8(pos++);
        newObjInventoryBlock['SalePrice'] = buf.readInt32LE(pos);
        pos += 4;
        varLength = buf.readUInt8(pos++);
        newObjInventoryBlock['Name'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        varLength = buf.readUInt8(pos++);
        newObjInventoryBlock['Description'] = buf.slice(pos, pos + varLength);
        pos += varLength;
        newObjInventoryBlock['CreationDate'] = buf.readInt32LE(pos);
        pos += 4;
        newObjInventoryBlock['CRC'] = buf.readUInt32LE(pos);
        pos += 4;
        this.InventoryBlock = newObjInventoryBlock;
        return pos - startPos;
    }
}

