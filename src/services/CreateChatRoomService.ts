import { ObjectId } from "mongoose";
import { injectable } from "tsyringe";
import { ChatRoom } from "../schemas/ChatRoom";

type ChatRoomService = ChatRoom & {_id: ObjectId }

@injectable()
class CreateChatRoomService {
    async execute (idUsers: string[]){
        const room = await ChatRoom.create({
            idUsers
        });
        return room as unknown as ChatRoomService;
    }
}
export { CreateChatRoomService }