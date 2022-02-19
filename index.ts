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
function permissionArray(number: number) {
    let arr = []
    if(number & 0x1) arr.push("CREATE_INSTANT_INVITE")
    if(number & 0x2) arr.push("KICK_MEMBERS")
    if(number & 0x4) arr.push("BAN_MEMBERS")
    if(number & 0x8) arr.push("ADMINISTRATOR")
    if(number & 0x10) arr.push("MANAGE_CHANNELS")
    if(number & 0x20) arr.push("MANAGE_GUILD")
    if(number & 0x40) arr.push("ADD_REACTIONS")
    if(number & 0x80) arr.push("VIEW_AUDIT_LOG")
    if(number & 0x100) arr.push("PRIORITY_SPEAKER")
    if(number & 0x200) arr.push("STREAM")
    if(number & 0x400) arr.push("VIEW_CHANNEL")
    if(number & 0x800) arr.push("SEND_MESSAGES")
    if(number & 0x1000) arr.push("SEND_TTS_MESSAGES")
    if(number & 0x2000) arr.push("MANAGE_MESSAGES")
    if(number & 0x4000) arr.push("EMBED_LINKS")
    if(number & 0x8000) arr.push("ATTACH_FILES")
    if(number & 0x10000) arr.push("READ_MESSAGE_HISTORY")
    if(number & 0x20000) arr.push("MENTION_EVERYONE")
    if(number & 0x40000) arr.push("USE_EXTERNAL_EMOJIS")
    if(number & 0x80000) arr.push("VIEW_GUILD_INSIGHTS")
    if(number & 0x100000) arr.push("CONNECT")
    if(number & 0x200000) arr.push("SPEAK")
    if(number & 0x400000) arr.push("MUTE_MEMBERS")
    if(number & 0x800000) arr.push("DEAFEN_MEMBERS")
    if(number & 0x1000000) arr.push("MOVE_MEMBERS")
    if(number & 0x2000000) arr.push("USE_VAD")
    if(number & 0x4000000) arr.push("CHANGE_NICKNAME")
    if(number & 0x8000000) arr.push("MANAGE_NICKNAMES")
    if(number & 0x10000000) arr.push("MANAGE_ROLES")
    if(number & 0x20000000) arr.push("MANAGE_WEBHOOKS")
    if(number & 0x40000000) arr.push("MANAGE_EMOJIS_AND_STICKERS")
    if(number & 0x80000000) arr.push("USE_APPLICATION_COMMANDS")
    if(number & 0x100000000) arr.push("REQUEST_TO_SPEAK")
    if(number & 0x200000000) arr.push("MANAGE_EVENTS")
    if(number & 0x400000000) arr.push("MANAGE_THREADS")
    if(number & 0x800000000) arr.push("CREATE_PUBLIC_THREADS")
    if(number & 0x1000000000) arr.push("CREATE_PRIVATE_THREADS")
    if(number & 0x2000000000) arr.push("USE_EXTERNAL_STICKERS")
    if(number & 0x4000000000) arr.push("SEND_MESSAGES_IN_THREADS")
    if(number & 0x8000000000) arr.push("START_EMBEDDED_ACTIVITIES")
    if(number & 0x10000000000) arr.push("MODERATE_MEMBERS")
    return arr
    }
app.get("/", (req: Request, res: Response) => {
    res.send("go to '/api/pdata/{permission.number}' for perm to array")
})
app.use(function(req: Request, res: Response) {
    res.status(404)
    res.redirect("/")
})