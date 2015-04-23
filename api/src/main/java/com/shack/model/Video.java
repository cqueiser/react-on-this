package com.shack.model;

import javax.persistence.*;

@Entity
@Table(name = "videos")
public class Video {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "video_id", nullable = false, length = 20)
    private String videoId;

    @Column(name = "format_name", nullable = false, length = 100)
    private String formatName;

    @Column(name = "clip_title", nullable = false, length = 100)
    private String clipTitle;

    @Column(name = "source", nullable = false, length = 256)
    private String source;

    @Column(name = "image", nullable = false, length = 256)
    private String image;

    public Video() {}

    public Video(final String videoId, final String formatName, final String clipTitle, final String source, final String image) {
        this.videoId = videoId;
        this.formatName = formatName;
        this.clipTitle = clipTitle;
        this.source = source;
        this.image = image;
    }

    public String getVideoId() {
        return videoId;
    }

    public void setVideoId(final String videoId) {
        this.videoId = videoId;
    }

    public String getFormatName() {
        return formatName;
    }

    public void setFormatName(final String formatName) {
        this.formatName = formatName;
    }

    public String getClipTitle() {
        return clipTitle;
    }

    public void setClipTitle(final String clipTitle) {
        this.clipTitle = clipTitle;
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
