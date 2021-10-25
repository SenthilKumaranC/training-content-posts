let buttonState = "like";

const toggleButtonState = () => {

    /*if (buttonState === "like") {
        buttonState = "unlike"
    } else {
        buttonState = "like"
    }*/

    //ternary operation
    buttonState = buttonState === "like" ? "unlike" : "like";

    console.log(buttonState);
}

toggleButtonState();
toggleButtonState();
toggleButtonState();


const post = { content: "dffdfd", createdAt: new Date(), likes: 25 };

const { likes, content: xxx } = post;

console.log(xxx);

const props = { post: { content: "dffdfd", createdAt: { z: 3 }, likes: 25 }, a: "1" };

const { post } = props;
const { createdAt } = post
const { z } = createdAt;

console.log(content);




