package com.shack.repository;


import com.shack.model.VideoVoted;

import java.util.List;

public interface VideoRepositoryCustom {
    List<VideoVoted> findTopVotes(int rows, String order);
}
