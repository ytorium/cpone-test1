import TwitterApi from "twitter-api-v2"

export const fetchUser = async (user_name : any) => {
  console.log("user1");
  const twitterClient = new TwitterApi({
    appKey: process.env.TWITTER_ID!,
    appSecret: process.env.TWITTER_SECRET!,
    accessToken: process.env.ACCESS_TOKEN!,
    accessSecret: process.env.ACCESS_SECRET!
  });
  //const twitterClient = new TwitterApi('6lzVZHTWWEaqocAewMyhNFdmL');
  //const readOnlyClient = twitterClient.readOnly;
  const userInfo = await twitterClient.v2.userByUsername(user_name);
  console.log(userInfo);
  console.log("user2");
  return userInfo;
}
