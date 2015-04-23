package com.shack.service;

import com.shack.model.Video;
import com.shack.model.VideoVoted;
import com.shack.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Random;

@Service
public class VideoService {

    @Autowired
    private VideoRepository videoRepository;

    public Collection<Video> getVideos(final int rows) {
        List<Video> results = videoRepository.findAll();
        long seed = System.nanoTime();
        Collections.shuffle(results, new Random(seed));
        if (results.size() > rows) {
            return results.subList(0, rows);
        }
        return results;
    }

    public Collection<VideoVoted> getTopVideos(final int rows) {
        List<VideoVoted> results = videoRepository.findTopVotes(rows);
        return results;
    }
}
