package com.shack.service;

import com.shack.model.Video;
import com.shack.model.Vote;
import com.shack.repository.VideoRepository;
import com.shack.repository.VotingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class UserService {

    @Autowired
    private VotingRepository votingRepository;

    @Autowired
    private VideoRepository videoRepository;

    public void addVoting(final Vote vote) {
        votingRepository.save(vote);
    }

    public List<Video> getUserVideos(final String user) {
        List<Vote> votes = votingRepository.findByUserAndLikes(user, true);
        Collections.shuffle(votes);
        List<Video> videos = new ArrayList<>(votes.size());
        for (Vote vote : votes) {
            videos.add(videoRepository.findByVideoId(vote.getVideoId()));
        }
        return videos;
    }
}
