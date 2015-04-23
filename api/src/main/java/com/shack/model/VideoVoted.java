package com.shack.model;


public class VideoVoted extends Video{

    private int likes;

    public VideoVoted() {}

    public VideoVoted(final String videoId, final String formatName, final String clipTitle, final String source, final String image, final int likes) {
        super(videoId,formatName,clipTitle,source,image);
        this.likes = likes;
    }
    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }
}
