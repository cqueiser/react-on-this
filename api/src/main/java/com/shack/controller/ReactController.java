package com.shack.controller;

import com.shack.model.Video;
import com.shack.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;


@RestController
public class ReactController {
    @Autowired
    private VideoService videoService;

    @RequestMapping("/video")
    public Collection<Video> greeting(@RequestParam(value="rows", defaultValue="10") int rows) {
        return videoService.getVideos(rows);
    }
}
