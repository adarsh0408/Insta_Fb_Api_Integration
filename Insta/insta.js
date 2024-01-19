const axios = require("axios");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const fbPageId = 103034802885767;
const client_id = 605462118403346;
client_secret = "4d02d34ed1ff139be390e04dd917c3cf";
long_lived_token =
  "EAAImqiJZBDRIBO4TbHxSCCZCRjid1XiLmlF5PL9ZAp4MZCeZBmeglEGfNEmAncCCMIdEK4bGjWKYqDVfZAEl58C9j2iWfYTxnJ172HWChJ1CG7MxtgQZALZAY52CZBcRLbrqzZBnoQrDGKfcWwwfSwPhyX6RVbbr2EEKrWtIZBM4VQj7EAfcZAxBRuRuNgGae49CYXhu";

imgurlArr = [
  {
    img: "https://www.shutterstock.com/shutterstock/photos/668593321/display_1500/stock-photo-large-beautiful-drops-of-transparent-rain-water-on-a-green-leaf-macro-drops-of-dew-in-the-morning-668593321.jpg",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ4T19rVPJITX87iH3DVy4HKCuNYe6aEeZezdD0rP3uA&s",
  },
];

videourlArr = [
  {
    video:
      "https://joy1.videvo.net/videvo_files/video/free/2014-12/large_watermarked/Raindrops_Videvo_preview.mp4",
  },
];


// get instagram account data
async function getInstagramAccountData(accessToken) {
  const params = {
    fields: "id,name",
    access_token: accessToken,
  };
  const endpoint = `https://graph.facebook.com/me?${params}&access_token=${accessToken}`;

  try {
    const response = await axios.get(endpoint);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data from Instagram:", error.message);
    return null;
  }
}

// getInstagramAccountData(accessToken)
//   .then(accountData => console.log(accountData))
//   .catch(error => console.error(error));

// Get Insta Business AccountId

async function getInstagramBusineeAccountId(accessToken) {
  const endpoint = `https://graph.facebook.com/v17.0/${fbPageId}?fields=instagram_business_account&access_token=${accessToken}`;

  try {
    const response = await axios.get(endpoint);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data from Instagram:", error.message);
    return null;
  }
}

// getInstagramBusineeAccountId(accessToken)
//   .then(accountData => console.log(accountData))
//   .catch(error => console.error(error));

// create container for post

async function genratePostContainer(accessToken) {
  const endpoint = `https://graph.facebook.com/v17.0/17841460808580717/media?image_url=${imgURL}&caption=&access_token=${accessToken}`;

  try {
    const response = await axios.post(endpoint);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data from Instagram:", error.message);
    return null;
  }
}

// genratePostContainer(accessToken)
//   .then(accountData => console.log(accountData))
//   .catch(error => console.error(error));

// upload story or post after getting the containerId
async function uploadPostOrStory(accessToken, containerId) {
  const endpoint = `https://graph.facebook.com/v17.0/17841460808580717/media_publish?creation_id=${containerId.id}&access_token=${accessToken}`;

  try {
    const response = await axios.post(endpoint);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data from Instagram:", error.message);
    return null;
  }
}

// uploadPostOrStory(accessToken,containerId)
//   .then(accountData => console.log(accountData))
//   .catch(error => console.error(error));

// Generate container for story

async function generateImageStoryContainer(accessToken) {
  try {
    const response = await axios.post(endpoint);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data from Instagram:", error.message);
    return null;
  }
}

// generateStoryContainer(accessToken,img)
//   .then(accountData => console.log(accountData))
//   .catch(error => console.error(error));

// Function to upload multiple stories

function multipleStories() {
  for (i = 0; i < imgurl.length; i++) {
    // console.log(imgurl[i].img);
    // generateStoryContainer(accessToken,imgurl[i].img)
    generateStoryContainer(accessToken, imgurl[i].img)
      .then((accountData) => console.log(accountData))
      .catch((error) => console.error(error));
  }
}
//  multipleStories()//first fun.

// Function to upload video story
async function generateVideoStoryContainer(accessToken) {
  // const endpoint = `https://graph.facebook.com/v17.0/17841460808580717/media?video_url=${video}&media_type=STORIES&access_token=${accessToken}`;

  try {
    const response = await axios.post(endpoint);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data from Instagram:", error.message);
    return null;
  }
}

// generateVideoStoryContainer(accessToken)
// .then(accountData => console.log(accountData))
// .catch(error => console.error(error));
// After getting the container ID use this container ID in uploadPost funtction and upload the story.

async function generateLongLivedToken() {
  endpoint = `https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=${client_id}&client_secret=${client_secret}&fb_exchange_token=EAAImqiJZBDRIBOxoXy6dZC8PbDB44aFPiwJUADBv6Fi8t3Vm2ZBxRzcgKCVn2duwCx7ntyguHgZCmrw64xCXTLEfxymw1uZCrAu3rgDJQZBE7Br2ANJHJVXJEiTRSdgLvW3GSCzYrPhvF1KCxruyrjIqZBZCndHjb9QyJm0diPQc6LAYoWTXbqyVNm6HCSgy6CLYp8q9ZCNpDKj7Q5DoJPT03a1wOvlGUxZCxJbvvi`;
  try {
    const response = await axios.post(endpoint);
    const data = response.data;
    return data;
  } catch (error) {
    console.error("Error fetching data from Instagram:", error.message);
    return null;
  }
}

app.post("/uploadImgStory", async (req, res) => {
  console.log(req.body);

  try {
    const { results } = req.body;
    let result = await uploadImageStoryQuery(results);
    console.log("result", result);
    return res.send(result);
  } catch (error) {
    return console.log("error", error);
  }
});

const uploadImageStoryQuery = async (imgurl) => {
  try {
    let result = [];
    // let access_Token = await generateLongLivedToken();

    if (imgurl.length > 0) {
      for (i = 0; i < imgurl.length; i++) {
        endpoint = `https://graph.facebook.com/v17.0/17841460808580717/media?image_url=${imgurl[i].img}&media_type=STORIES&caption=&access_token=${long_lived_token}`;
        let containerId = await generateImageStoryContainer(long_lived_token);
        if (!containerId) {
          return console.log("container id undefined");
        }
        var postImageStory = await uploadPostOrStory(
          long_lived_token,
          containerId
        );
        if (!postImageStory) {
          return console.log("story not uploaded, please try again later");
        }
        result.push(postImageStory);
      }
    }
    return result;
  } catch (error) {
    console.log("Something went wrong");
  }
};

// Upload video story

app.post("/uploadVideoStory", async (req, res) => {
  try {
    const { results } = req.body;
    let result = await uploadVideoStoryQuery(results);
    console.log("result", result);
    return res.send(result);
  } catch (error) {
    return console.log("error", error);
  }
});

const uploadVideoStoryQuery = async (videourl) => {
  try {
    let result = [];
    // let access_Token = await generateLongLivedToken();
    if (videourl.length > 0) {
      for (i = 0; i < videourl.length; i++) {
        endpoint = `https://graph.facebook.com/v17.0/17841460808580717/media?video_url=${videourl[i].video}&media_type=STORIES&caption=&access_token=${long_lived_token}`;
        let containerId = await generateVideoStoryContainer(long_lived_token);
        if (!containerId) {
          return console.log("container id undefined");
        }
        let postVideoStory = await uploadPostOrStory(
          long_lived_token,
          containerId
        );
        if (!postVideoStory) {
          return console.log("story not uploaded, please try again later");
        }
        result.push(postVideoStory);
      }
    }
    return result;
  } catch (error) {
    console.log("Something went wrong");
  }
};
app.listen(3000, () => {
  console.log("3000");
});
