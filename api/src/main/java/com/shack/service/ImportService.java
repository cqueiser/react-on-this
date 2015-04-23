package com.shack.service;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.shack.model.*;

import com.shack.repository.VideoRepository;
import com.shack.repository.VotingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.List;
import java.util.Random;

@Service
public class ImportService {

    @Autowired
    private VideoRepository videoRepo;

    @Autowired
    private VotingRepository votingRepo;

    @PostConstruct
    public void importVideos() {
        Random random = new Random();
        ObjectMapper mapper = new ObjectMapper();
        try {
            List<ImportVideo> videos;
            videos = mapper.readValue(this.getClass().getResourceAsStream("/data.json"), new TypeReference<List<ImportVideo>>() {});

            for (ImportVideo importVideo : videos) {

                for (MovieSource movieSource : importVideo.getMovieSources()) {
                    if (!movieSource.isToken_protected() && movieSource.getMime_type().contains("mp4") && "http".equals(movieSource.getProtocol())) {
                        Video video = new Video(
                                importVideo.getId(),
                                importVideo.getMovieFormatName(),
                                importVideo.getMovieClipTitle(),
                                movieSource.getUrl_template(),
                                "http://is.myvideo.de/" + importVideo.getThumbnail()
                        );
                        videoRepo.save(video);

                        for(int i=1; i<=5; i++) {
                            if (random.nextBoolean()) {
                                Vote vote = new Vote(
                                        "user_" + i,
                                        importVideo.getId(),
                                        random.nextBoolean()
                                );

                                votingRepo.save(vote);
                            }
                        }

                        break;
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
