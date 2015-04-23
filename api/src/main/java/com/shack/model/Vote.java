package com.shack.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@IdClass(VoteId.class)
@Table(name = "votes")
public class Vote {
    @Id
    @Column(name = "user", nullable = false, length = 50)
    private String user;
    @Id
    @Column(name = "video_id", nullable = false, length = 20)
    private String videoId;
    @Column(name = "likes", nullable = false)
    private boolean likes;

    public Vote() {}

    public Vote(String user, String videoId, boolean likes) {
        this.user = user;
        this.videoId = videoId;
        this.likes = likes;
    }

    public String getUser() {
        return user;
    }

    public void setUser(final String user) {
        this.user = user;
    }

    public String getVideoId() {
        return videoId;
    }

    public void setVideoId(final String videoId) {
        this.videoId = videoId;
    }

    public boolean isLikes() {
        return likes;
    }

    public void setLikes(final boolean likes) {
        this.likes = likes;
    }
}
