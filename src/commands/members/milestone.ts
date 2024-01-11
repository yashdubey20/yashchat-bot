import { WAMessage } from "@whiskeysockets/baileys";
import { MsgInfoObj } from "../../interfaces/msgInfoObj";
import { Bot } from "../../interfaces/Bot";
import { getMilestoneText } from "../../db/milestoneDB";
import { prefix } from "../../utils/constants";

const handler = async (bot: Bot, msg: WAMessage, msgInfoObj: MsgInfoObj) => {
  const { reply } = msgInfoObj;

  const more = String.fromCharCode(8206);
  const readMore = more.repeat(4001);

  let message = `*─「 <{PVX}> MILESTONES 」 ─*

Send ${prefix}rank to know your rank with milestones.${readMore}

 *[DEFAULT MILESTONES]*
⭐ Main Admin of YASH
⭐ Sub-Admin of YASH
⭐ Most active member of YASH
⭐ Top 10 active member of YASH
⭐ Top 50 active member of YASH
⭐ Top 100 active member of YASH
⭐ Highest contribution in YASH funds
⭐ Huge Contribution in YASH funds
⭐ Contribution in YASH funds`;

  const getMilestoneTextRes = await getMilestoneText();
  if (getMilestoneTextRes.length) {
    message += `\n\n *[CUSTOM MILESTONES]*\nAdmin can give following milestones by ${prefix}milestoneadd #contact #sno\nEg: ${prefix}milestoneadd #919876.... #2`;
    getMilestoneTextRes.forEach((milestoneRes, index) => {
      message += `\n⭐ ${index + 1}. ${milestoneRes.milestone}`;
    });
  }

  await reply(message);
};

const milestone = () => {
  const cmd = ["milestone", "milestones"];

  return { cmd, handler };
};

export default milestone;
