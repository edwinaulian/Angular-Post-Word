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
        return [...this.posts];
    }

    getPostUpdatedListenner() {
        return this.postUpdated.asObservable();
    }

    addPostsMethode(title: string, content: string) {
        const post: PostData = { title: title, content: content };
        this.posts.push(post);
        this.postUpdated.next([...this.posts]);
    }

}