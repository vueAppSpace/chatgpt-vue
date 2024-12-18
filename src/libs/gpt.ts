import type { ChatMessage } from "@/types";

export async function chat(messageList: ChatMessage[], apiKey: string) {
  try {
    //https://api.chatanywhere.org
    //https://api.chatanywhere.tech
    const result = await fetch("https://api.chatanywhere.org/v1/chat/completions", {
      method: "post",
      // signal: AbortSignal.timeout(8000),
      // 开启后到达设定时间会中断流式输出
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        stream: true,
        messages: messageList,
      }),
    });
    return result;
  } catch (error) {
    throw error;
  }
}
