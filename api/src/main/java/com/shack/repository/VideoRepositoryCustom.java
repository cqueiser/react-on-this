package com.shack.repository;


import com.shack.model.Video;

import java.util.List;

public interface VideoRepositoryCustom {
    List<Video> findTopVotes(int rows);
}
