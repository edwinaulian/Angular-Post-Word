import { PostData } from "./models/post-models";
import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostsServices {
    private posts: PostData[] = [
        { title: "edwin", content: "music" },
        { title: "ariel", content: "music" }
    ];
    private postUpdated = new Subject<PostData[]>();

    getPosts() {
        // return [...this.posts];
        return localStorage.getItem('dataPost') ? JSON.parse(localStorage.getItem('dataPost')) : [];
    }

    getPostUpdatedListenner() {
        return this.postUpdated.asObservable();
    }

    addPostsMethode(title: string, content: string) {
        const post: PostData = { title: title, content: content };
        this.posts.push(post);
        localStorage.setItem("dataPost", JSON.stringify([...this.posts]));
        this.postUpdated.next([...this.posts]);
    }

}