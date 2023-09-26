const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const request = require("request");
const path = require("path");

const dotenv = require("dotenv")
dotenv.config()
console.log(process.env.TWILIO_MESSAGESID)

let supertokens = require("supertokens-node");
let Session = require("supertokens-node/recipe/session");
let {
  verifySession,
} = require("supertokens-node/recipe/session/framework/express");
let {
  middleware,
  errorHandler,
} = require("supertokens-node/framework/express");
let {
  TwilioService,
} = require("supertokens-node/recipe/passwordless/smsdelivery");
let Passwordless = require("supertokens-node/recipe/passwordless");
let Dashboard = require("supertokens-node/recipe/dashboard");

require("dotenv").config();

const usersRouter = require("./routes/users-route");
const videosRouter = require("./routes/videos-route");

const userController = require('./controllers/users-controller.js');

// Init Supertokens
const apiPort = process.env.REACT_APP_API_PORT || 3001;
const apiDomain = process.env.REACT_APP_API_URL || `https://api.playfullscreen.a2hosted.com`;
const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000;
const websiteDomain =
  process.env.REACT_APP_WEBSITE_URL || `https://playfullscreen.a2hosted.com`;
const laravelApi =
  process.env.LARAVEL_API || `https://dashboard.playfullscreen.a2hosted.com`;
const connectionURI = process.env.SUPERTOKEN_CONNECTION_URI;
const apiKey = process.env.SUPERTOKEN_API_KEY;
const twilioAccountSid = process.env.TWILIO_ACCOUNTSID;
const twilioAuthToken = process.env.TWILIO_AUTHTOKEN;
const twilioMessageSid = process.env.TWILIO_MESSAGESID;

const APP_NAME = "Playfullscreen";
supertokens.init({
  framework: "express",
  supertokens: {
    connectionURI: connectionURI,
    apiKey: apiKey,
  },
  appInfo: {
    appName: APP_NAME,
    apiDomain,
    websiteDomain,
  },
  recipeList: [
    Passwordless.init({
      contactMethod: "EMAIL_OR_PHONE",
      flowType: "USER_INPUT_CODE_AND_MAGIC_LINK",
      override: {
        apis: (originalImplementation) => {
          return {
            ...originalImplementation,
            consumeCodePOST: async (input) => {
              if (originalImplementation.consumeCodePOST === undefined) {
                throw Error("Should never come here");
              }

              let response = await originalImplementation.consumeCodePOST(
                input
              );

              if (response.status === "OK") {
                let { id, email, phoneNumber } = response.user;
                
                var objBody = { sp_user_id: id, email: email, phone: phoneNumber };
                const user = await userController.userSignIn(objBody);
                // console.log(laravelApi);
                // if (response.createdNewUser) {
                //   // TODO: post sign up logic
                //   console.log(id, email, phoneNumber);
                //   var objBody = { email: email, phone: phoneNumber };
                //   userController.userSignIn(objBody);
                // } else {
                //   console.log("signin");
                //   userController.userSignIn(objBody);
                // }
              }
              return response;
            },
          };
        },
      },
      smsDelivery: {
        service: new TwilioService({
          twilioSettings: {
            accountSid: twilioAccountSid,
            authToken: twilioAuthToken,
            opts: {},
            messagingServiceSid: twilioMessageSid,
          },
        }),
      },
    }),
    Session.init({
      override: {
        functions: (originalImplementation) => {
          return {
              ...originalImplementation,
              createNewSession: async function (input) {
                  let userId = input.userId;
                  const user = await Passwordless.getUserById({userId});
                  const furtherInfo = await userController.getUserByPhoneOrEmail(user);
                  console.log('d', furtherInfo)
                  // This goes in the access token, and is availble to read on the frontend.
                  input.accessTokenPayload = {
                      ...input.accessTokenPayload,
                      user: {...furtherInfo, sp_user_id: userId},
                  };

                  return originalImplementation.createNewSession(input);
              },
          };
        },
      }
    }),
    Dashboard.init({
      apiKey: apiKey,
    }),
  ],
});

const app = express();

app.use(
  cors({
    origin: websiteDomain,
    // allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    methods: ["GET", "PUT", "POST", "DELETE"],
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);
app.use(express.urlencoded({ extended: false }))
app.use(middleware());

app.use(express.json({ extended: true }));

app.get("/sessioninfo", verifySession(), async (req, res) => {
  let session = req.session;
  res.send({
      sessionHandle: session.getHandle(),
      userId: session.getUserId(),
      accessTokenPayload: session.getAccessTokenPayload(),
  });
});

app.use("/users", usersRouter);
app.use("/videos", videosRouter);

// if (process.env.NODE_ENV && process.env.NODE_ENV !== "development") {
  app.use("/", express.static(path.join(__dirname, "public", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "build", "index.html"));
  });
// }

app.use(errorHandler());

app.use((err, req, res, next) => {
  res.status(500).send("Internal error: " + err.message);
});

app.listen(apiPort, () =>
  console.log(`API Server listening on port ${apiPort}`)
);
