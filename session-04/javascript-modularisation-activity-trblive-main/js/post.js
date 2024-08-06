// post.js
// define a Post class

import {updateDOM} from "./domUpdate.js";

export class Post {
    constructor(title, content) {
        this.title = title;
        this.content = content;
    }

    addPost() {
        const postContainer = document.getElementById("postContainer");
        const post = document.createElement("div");
        post.classList.add("post", "box");

        const postTitle = document.createElement("h3");
        postTitle.classList.add("subtitle", "is-3", "has-text-primary");
        updateDOM(postTitle, this.title);

        const postContent = document.createElement("p");
        updateDOM(postContent, this.content);

        post.appendChild(postTitle);
        post.appendChild(postContent);
        postContainer.appendChild(post);
    }
}

export default class addPost {
}