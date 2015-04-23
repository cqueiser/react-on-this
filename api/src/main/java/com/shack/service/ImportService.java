package com.shack.service;


import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.shack.model.ImportVideo;
import com.shack.model.MovieSource;
import com.shack.model.Video;

import com.shack.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.IOException;
import java.util.List;

@Service
public class ImportService {

    @Autowired
    private VideoRepository videoRepo;

    @PostConstruct
    public void importData() {
        ObjectMapper mapper = new ObjectMapper();
        try {
            List<ImportVideo> videos;
            videos = mapper.readValue(this.getClass().getResourceAsStream("/data.json"), new TypeReference<List<ImportVideo>>() {});

            for (ImportVideo importVideo : videos) {

                for (MovieSource movieSource : importVideo.getMovieSources()) {
                    if (!movieSource.isToken_protected() && movieSource.getMime_type().contains("mp4")) {
                        Video video = new Video(
                                importVideo.getId(),
                                importVideo.getMovieFormatName(),
                                importVideo.getMovieClipTitle(),
                                movieSource.getUrl_template(),
                                "http://is.myvideo.de/" + importVideo.getThumbnail()
                        );
                        videoRepo.save(video);
                        break;
                    }
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
