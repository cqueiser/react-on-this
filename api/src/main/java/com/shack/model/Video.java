package com.shack.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "videos")
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "video_id", nullable = false, length = 20)
    private String videoId;

    @Column(name = "title", nullable = false, length = 100)
    private String title;

    @Column(name = "source", nullable = false, length = 256)
    private String source;

    @Column(name = "image", nullable = false, length = 256)
    private String image;

    public Video(final String videoId, final String title, final String source, final String image) {
        this.videoId = videoId;
        this.title = title;
        this.source = source;
        this.image = image;
    }

    public String getVideoId() {
        return videoId;
    }

    public void setVideoId(final String videoId) {
        this.videoId = videoId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(final String title) {
        this.title = title;
    }

    public String getSource() {
        return source;
    }

    public void setSource(final String source) {
        this.source = source;
    }

    public String getImage() {
        return image;
    }

    public void setImage(final String image) {
        this.image = image;
    }
}
