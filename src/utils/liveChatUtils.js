
const adjectives = [
  "cool", "crazy", "smart", "funny", "silent", "lazy", "fast", "epic", "savage", "angry", "sweet",
  "happy", "dark", "ninja", "coder", "techie", "vlog", "gamer", "travel", "foodie"
];

const names = [
  "ankit", "riya", "anushka", "arjun", "priya", "rohan", "harsh", "simran", "vivek", "aditya",
  "dev", "neha", "tanya", "shreya", "sid", "rahul", "shruti", "anu", "nikhil", "sneha"
];

const suffixes = ["", "_YT", "_vlogs", "123", "_official", "_x", "007", "_live", "pro", "_tv"];

export function getYouTubeUserName() {
  const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
  const name = names[Math.floor(Math.random() * names.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
  return `${adj}_${name}${suffix}`;
}


//msg 
const chatMessages = [
  "lol 😂",
  "OP bro!",
  "so cool!",
  "epic moment!",
  "legendary!",
  "what just happened?",
  "this is insane 🔥",
  "subscribed instantly!",
  "hello from Delhi 👋",
  "crazy part right here",
  "can't stop laughing 😄",
  "nice editing bro!",
  "who else noticed that?",
  "he’s so underrated!",
  "drop a like guys 👍",
  "full goosebumps moment!",
  "kya hi scene tha!",
  "the timing is perfect",
  "watched this 5 times already!",
  "never disappoints 🔥🔥🔥",
  "this should go viral",
  "respect from Mumbai 🙏",
  "so clean 🔥",
  "unreal bro, just wow",
  "that transition tho!"
];

export function getLiveChatMsg() {
  return chatMessages[Math.floor(Math.random() * chatMessages.length)];
}
