import {Component} from "angular2/core";
import {Config} from "./config.service";
import {Video} from "./video";
import {VideoPlayerComponent} from "./videoplayer.component";
import {PlaylistComponent} from "./playlist.component";

@Component({
    selector: "my-app",
    templateUrl: "app/templates/app.component.html",
    directives: [PlaylistComponent, VideoPlayerComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;
    videos: Array<Video>;
    video: Video;

    constructor() {
        this.videos = [
            new Video(1, "Baahubali: The Beginning", "ASSd6SmcH_s", "In the ancient Kingdom of Mahishmati in India, Sivagami, the queen mother emerges from a cave adjoining a big waterfall."),
            new Video(2, "Baahubali 2 The Conclusion", "IWB8lLGlfsk", "the much awaited movie....now u will know why Kattappa killed Bahubali...."),
            new Video(3, "Magadheera", "cZsgbK4qY-I", "Magadheera is a 2009 Telugu historical drama- romance film directed by S. S. Rajamouli. The film stars Ram Charan Teja and Kajal Aggarwal in the lead roles, while actors Srihari and Dev Gill play other prominent roles..")
        ];
        this.video = this.videos[0];
    }

    onVideoSelected(video: Video) {
        this.video = video;
    }
}
