import TwitterApi from "twitter-api-v2"

export const fetchUser = async (user_name : any) => {
  console.log("user1");
  const twitterClient = new TwitterApi('6lzVZHTWWEaqocAewMyhNFdmL');
  const readOnlyClient = twitterClient.readOnly;
  const userInfo = await readOnlyClient.v2.get('users/1483136838600728587/tweets');
  ///userByUsername(user_name);
  console.log(userInfo);
  console.log("user2");
  return userInfo;
}
