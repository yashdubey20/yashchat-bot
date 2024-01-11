import { WAMessage } from "@whiskeysockets/baileys";
import { MsgInfoObj } from "../../interfaces/msgInfoObj";
import { Bot } from "../../interfaces/Bot";

const handler = async (bot: Bot, msg: WAMessage, msgInfoObj: MsgInfoObj) => {
  const { reply } = msgInfoObj;
  const more = String.fromCharCode(8206);
  const readMore = more.repeat(4001);

  const text = `*─「 <{YASH}> RULES 」 ─*
  ${readMore}
✔ Rule 01 -
_Do not spam in the grp._

✔ Rule 02 -
_Do not send any inappropriate content in the grp._

✔ Rule 03 -
_Do not promote hate speech in the group. Any discussion pertaining to hatred for religion, community, race, etc is strictly prohibited._

✔ Rule 04 -
_Do not swear on someone else's parents just because they roasted you badly._

✔ Rule 05 -
_Only the admin who removed a member can add them back again._

✔ Rule 06 -
_Do not use someone else's real picture for any malicious purpose like making stickers, memes and spreading it._

✔ Rule 07 -
_No promotion of any kind is allowed in the group._

✔ Rule 08 -
_Do not give any spoilers of any new movie or series._

✔ Rule 09 -
_Only numbers starting with the code +91 (i.e. Indians) are allowed to join._

✔ Rule 10 -
_Do any transaction with any member at your own risk._

*You may get a warning or ban if you're found breaking any of the above rules. PVX is a growing community, we'll appreciate if you follow these rules and help us grow more.* ❤️`;

  await reply(text);
};

const rules = () => {
  const cmd = ["rules", "r", "rule"];

  return { cmd, handler };
};

export default rules;
