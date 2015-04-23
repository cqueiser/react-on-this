package com.shack.controller;

import com.shack.model.Video;
import com.shack.model.Vote;
import com.shack.service.UserService;
import com.shack.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Collection;


@RestController
public class ReactController {
    @Autowired
    private VideoService videoService;

    @Autowired
    private UserService userService;

    @RequestMapping("/videos")
    public Collection<Video> videos(final @RequestParam(value="rows", defaultValue="10") int rows) {
        return videoService.getVideos(rows);
    }

    @RequestMapping("/vote")
    public void vote(@RequestParam Vote vote) {
        userService.addVoting(vote);
    }

    @RequestMapping("/myvideos/{user}")
    public Collection<Video> myVideos(final @PathVariable String user) {
        return userService.getUserVideos(user);
    }

    @RequestMapping("/topvideos")
    public Collection<Video> topVideos(final @RequestParam(value="rows", defaultValue="10") int rows) {
        return videoService.getTopVideos(rows);
    }

}
