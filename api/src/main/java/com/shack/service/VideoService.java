package com.shack.service;

import com.shack.model.Video;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Random;

public class VideoService {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public Collection<Video> getVideos(final int rows) {
        List<Video> results = jdbcTemplate.query(
                "SELECT * from videos",
                new RowMapper<Video>() {
                    @Override
                    public Video mapRow(ResultSet rs, int rowNum) throws SQLException {
                        return new Video(rs.getString("id"), rs.getString("title"),
                                rs.getString("source"), rs.getString("image"));
                    }
                });
        long seed = System.nanoTime();
        Collections.shuffle(results, new Random(seed));
        if (results.size() > rows) {
            return results.subList(0, rows);
        }
        return results;
    }
}
