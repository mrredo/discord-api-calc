import express, { Request, Response} from "express";
const app: express.Application = express();
app.get("/api/pdata/:number", (req: Request, res: Response) => {
    const number = req.params.number
    console.log("wdwdw")
    return res.send({
        permissions: permissionArray(Number(number)) ?? []
    })
})
app.set('json spaces', 2)
app.listen(8080, () => {
    console.log("API started!")
})
const permflags: any = {
    "0x1": "CREATE_INSTANT_INVITE",
    "0x2": "KICK_MEMBERS",
    "0x4": "BAN_MEMBERS",
    "0x8": "ADMINISTRATOR",
    "0x10": "MANAGE_CHANNELS",
    "0x20": "MANAGE_GUILD",
    "0x40": "ADD_REACTIONS",
    "0x80": "VIEW_AUDIT_LOG",
    "0x100": "PRIORITY_SPEAKER",
    "0x200": "STREAM",
    "0x400": "VIEW_CHANNEL",
    "0x800": "SEND_MESSAGES",
    "0x1000": "SEND_TTS_MESSAGES",
    "0x2000": "MANAGE_MESSAGES",
    "0x4000": "EMBED_LINKS",
    "0x8000": "ATTACH_FILES",
    "0x10000": "READ_MESSAGE_HISTORY",
    "0x20000": "MENTION_EVERYONE",
    "0x40000": "USE_EXTERNAL_EMOJIS",
    "0x80000": "VIEW_GUILD_INSIGHTS",
    "0x100000": "CONNECT",
    "0x200000": "SPEAK",
    "0x400000": "MUTE_MEMBERS",
    "0x800000": "DEAFEN_MEMBERS",
    "0x1000000": "MOVE_MEMBERS",
    "0x2000000": "USE_VAD",
    "0x4000000": "CHANGE_NICKNAME",
    "0x8000000": "MANAGE_NICKNAMES",
    "0x10000000": "MANAGE_ROLES",
    "0x20000000": "MANAGE_WEBHOOKS",
    "0x40000000": "MANAGE_EMOJIS_AND_STICKERS",
    "0x80000000": "USE_APPLICATION_COMMANDS",
    "0x100000000": "REQUEST_TO_SPEAK",
    "0x200000000": "MANAGE_EVENTS",
    "0x400000000": "MANAGE_THREADS ",
    "0x800000000": "CREATE_PUBLIC_THREADS",
    "0x1000000000": "CREATE_PRIVATE_THREADS",
    "0x2000000000": "USE_EXTERNAL_STICKERS",
    "0x4000000000": "SEND_MESSAGES_IN_THREADS",
    "0x8000000000": "START_EMBEDDED_ACTIVITIES",
    "0x10000000000": "MODERATE_MEMBERS"
}


function permissionArray(number: number) {
    let arr = []
    for(const key in permflags) {
        if(number & Number(key)) arr.push(permflags[key])
    }
    return arr
}
app.get("/", (req: Request, res: Response) => {
    res.send("go to '/api/pdata/{permission.number}' for perm to array")
})
app.use(function(req: Request, res: Response) {
    res.status(404)
    res.redirect("/")
})