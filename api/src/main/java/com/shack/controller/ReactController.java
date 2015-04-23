package com.shack.controller;

import com.shack.model.Video;
import com.shack.model.Vote;
import com.shack.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;


@RestController
public class ReactController {
    @Autowired
    private VideoService videoService;

    @RequestMapping("/videos")
    public Collection<Video> greeting(@RequestParam(value="rows", defaultValue="10") int rows) {
        //return videoService.getVideos(rows);
        Collection<Video> videos = new ArrayList<>();
        videos.add(new Video("MOVIE_11584253", "She Keeps Bees", "Is What It Is", "http://is.myvideo.de/movie23/95/11584253.mp4", "http://is.myvideo.de/movie23/95/thumbs/11584253_1.jpg"));
        videos.add(new Video("MOVIE_11582975", "Pato Siebenhaar", "Fuld Af Løgn", "http://is.myvideo.de/movie18/db/11582975.mp4", "http://is.myvideo.de/movie18/db/thumbs/11582975_1.jpg"));
        return videos;
    }

    @RequestMapping("/vote")
    public void vote(@RequestParam Vote vote) {

    }
}
