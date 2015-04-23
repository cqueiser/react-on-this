package com.shack.controller;

import com.shack.model.Video;
import com.shack.model.VideoVoted;
import com.shack.model.Vote;
import com.shack.service.UserService;
import com.shack.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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

    @RequestMapping(name = "/vote", method = RequestMethod.POST)
    public void vote(@RequestBody Vote vote) {
        userService.addVoting(vote);
    }

    @RequestMapping("/myvideos/{user}")
    public Collection<Video> myVideos(final @PathVariable String user) {
        return userService.getUserVideos(user);
    }

    @RequestMapping("/topvideos")
    public Collection<VideoVoted> topVideos(final @RequestParam(value="rows", defaultValue="10") int rows, final @RequestParam(value="order", defaultValue="likes") String order) {
        return videoService.getTopVideos(rows,order);
    }

}
