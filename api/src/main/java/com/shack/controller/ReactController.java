package com.shack.controller;

import com.shack.model.Video;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;


@RestController
public class ReactController {

    @RequestMapping("/greeting")
    public Collection<Video> greeting(@RequestParam(value="name", defaultValue="World") String name) {
        Collection videos = new ArrayList();
        Video video = new Video("MOVIE_123", "Madonna - Yeah", ".mp4", ".jpg");
        videos.add(video);
        return videos;
    }
}
