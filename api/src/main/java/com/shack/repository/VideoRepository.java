package com.shack.repository;

import com.shack.model.Video;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface VideoRepository extends CrudRepository<Video, Long>, VideoRepositoryCustom {

    @Override
    List<Video> findAll();

    Video findByVideoId(final String videoId);
}
