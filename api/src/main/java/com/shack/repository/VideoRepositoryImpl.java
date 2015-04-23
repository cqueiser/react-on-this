package com.shack.repository;


import com.shack.model.Video;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

public class VideoRepositoryImpl implements VideoRepositoryCustom {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public List<Video> findTopVotes(int rows) {
        List<Video> results = jdbcTemplate.query(
                "SELECT count(vo.VIDEO_ID) as total, vi.* FROM VOTES vo JOIN VIDEOS vi ON vo.VIDEO_ID = vi.VIDEO_ID WHERE (vo.LIKES = TRUE) GROUP BY vo.VIDEO_ID ORDER BY total DESC LIMIT " + rows,
                new RowMapper<Video>() {
                    @Override
                    public Video mapRow(ResultSet rs, int rowNum) throws SQLException {
                        return new Video(rs.getString("VIDEO_ID"), rs.getString("FORMAT_NAME"), rs.getString("CLIP_TITLE"),
                                rs.getString("SOURCE"), rs.getString("IMAGE"));
                    }
                });

        return results;
    }
}
