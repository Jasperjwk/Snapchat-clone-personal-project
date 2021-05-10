# Snapchat-clone-personal-project


# Hosting URL:  
https://snapchat-clone-personal-proj.web.app

# Tech in my project build

1) React
2) Redux
3) React-Router
4) Camera
5) Firebase Firestore Realtime db
6) Material UI
7) Google Authentication
8) Deploy using Firebase!
9) Front-end
10) Back-end

# Steps to deploy my project using firebase

1) npm install -g firebase-tools
2) firebase init (hosting > build > y > n)
3) npm run build
4) firebase use "project id"
5) firebase deploy

firebase use snapchat-clone-personal-proj

# My Personal Notes
npx create-react-app snapchat-clone-personal-project --template redux
npm install firebase
npm install react-webcam
npm install @material-ui/core
npm install @material-ui/icons
npm install react-router-dom
npm install uuid
npm i --save moment
npm install react-timeago
npm install react-countdown-circle-timer


Firebase - is basically a tool provided by google. It allows us to have loads of different things so we are powering up our authentication,
database, even the way we upload those snaps so they upload the images over to firebase, we handle that with firebase storage. 

position: relative; The element will remain in the natural flow of the page. It also makes the element positioned: it will act as an anchor point for the absolutely positioned pink block. Also, it will react to the following properties: top.

position: absolute; The element will not remain in the natural flow of the page. It will position itself according to the closest positioned ancestor. Because it's positioned, it will act as an anchor point for the absolutely positioned pink block.

CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.

contain. The replaced content is scaled to maintain its aspect ratio while fitting within the element's content box.


// Big pointer
const webcamRef = useRef(null);


    // It will do the function once and save the output
    // of the function so if it gets called again,
    // it knows what to do without the sort of heavyweight
    // of doing the calculation again
    const capture = useCallback (() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc);
        setImage(imageSrc);
    }, [webcamRef]) // When does it determine to rerun this function again?
    // It's if the dependency webcamRef changes, then what is will simply do is
    // to tell react to run the function again, it will rerun again. It will be
    // stronger when it is run for the 3rd, 4th, 5th time

// It gives me the history of web pages
// Eg: Imagine when we are on the web page, it 
// gives us the history of the webpage and push the page like a redirect
 const history = useHistory(); 

  /* Fills the entire page */
  height: 100vh;

// Pull selectCameraImage from data layer
 const cameraImage = useSelector(selectCameraImage);

.preview__footer {
    position: absolute;
    bottom: 0;
    right: 10px;
    transform: translate(-50% -50%);

 // this will generate a random string which is safe 
 // which prevents collisions with other ids
 const id = uuid();

 timestamp: moment(new Date()).format('MMMM Do YYYY, h:mm:ss a')

/* Takes up majority of the space */
flex: 1;

.chats__search > input {
    /* Remove the blue outline in search */
    outline: none;
    background-color: transparent;
    border: none;
    font-size: 12px;
    flex: 1;
    color: white;
}

.chats__search > input::placeholder

3D Effect - box-shadow: 1px -7px -7px -6px rgba(0, 0, 0, 0.44);

/* pull it upwards */
margin-top: -9px;

border-top-left-radius: 10px;
border-top-right-radius: 10px;

/* Hide scrollbar for Chrome, Safari and Opera */ 
.chats__posts::-webkit-scrollbar{ 
    display: none; 
}

/* Hide scrollbar for IE, Edge and Firefox */
.chats__posts{ 
    -ms-overflow-style: none;
     scrollbar-width: none; 
    }

// Whenever something changes in the db, 
// go ahead and give me the latest db of snapshot
// So if something is added to the database, it will be updated
.onSnapshot(snapshot => setPosts(snapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data

{/* If it is not read, render out stop rounded icon */}
{!read && <StopRoundedIcon/>}   

// If there's no merge, it will overwrite / delete everything in document
{merge: true}

.chatView__timer {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
}

{/* If user doesn't login, render the login screen */}
{!user? (
        <Login />
      ): (

    bottom: 0;
    left: 50%;
    /* first -50% is top and bottom, second 50% is left and right */
    transform: translate(-50%, -50%);

   /*  Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency. */
    opacity: 0.8;

.app__logo {
  object-fit: contain;
  height: 100px;
}
