package com.shack.model;


import java.util.List;

public class ImportVideo {
    private String id;
    private String thumbnail;
    private String movieClipTitle;
    private  String movieFormatName;
    private List<MovieSource> movieSources;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public void setThumbnail(String thumbnail) {
        this.thumbnail = thumbnail;
    }

    public String getMovieClipTitle() {
        return movieClipTitle;
    }

    public void setMovieClipTitle(String movieClipTitle) {
        this.movieClipTitle = movieClipTitle;
    }

    public String getMovieFormatName() {
        return movieFormatName;
    }

    public void setMovieFormatName(String movieFormatName) {
        this.movieFormatName = movieFormatName;
    }

    public List<MovieSource> getMovieSources() {
        return movieSources;
    }

    public void setMovieSources(List<MovieSource> movieSources) {
        this.movieSources = movieSources;
    }
}
