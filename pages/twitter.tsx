import Layout from "../components/layout"
import TwitterApi from "twitter-api-v2"

export default function Twitter() {

  console.log("user1");
  const twitterClient = new TwitterApi('6lzVZHTWWEaqocAewMyhNFdmL');
  const readOnlyClient = twitterClient.readOnly;
  async function getUser() {
    const user = await readOnlyClient.v2.userByUsername('ToriumYuris');
    console.log(user);
    return user
  }
  console.log("user2");

  // const userInfo = getUser()

  console.log(getUser());

  return (
    <Layout>
      <div>
       <p>Hello Mir</p>
      </div>
    </Layout>
  )
}
