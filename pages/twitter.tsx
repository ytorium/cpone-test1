import Layout from "../components/layout"
import TwitterApi from "twitter-api-v2"

export default function Twitter() {

  console.log("user1");
  const twitterClient = new TwitterApi('6lzVZHTWWEaqocAewMyhNFdmL');
  const readOnlyClient = twitterClient.readOnly;
  //async function example() {
  //  const user = await readOnlyClient.v2.userByUsername('YToimich');
  //  console.log(user);
  //}
  console.log("user2");

  return (
    <Layout>
      <div>
       <p>Hello Mir</p>
      </div>
    </Layout>
  )
}