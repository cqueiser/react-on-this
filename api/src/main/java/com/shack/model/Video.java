package com.shack.model;

public class Video {
    String id;

    String title;

    String source;

    String image;

    public Video(final String id, final String title, final String source, final String image) {
        this.id = id;
        this.title = title;
        this.source = source;
        this.image = image;
    }

    public String getId() {
        return id;
    }

    public void setId(final String id) {
        this.id = id;
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
