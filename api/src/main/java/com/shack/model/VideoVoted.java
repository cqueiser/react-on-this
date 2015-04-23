package com.shack.model;


public class VideoVoted extends Video{

    private int likes;

    private int dislikes;

    private int likeRatio;

    public VideoVoted() {}

    public VideoVoted(final String videoId, final String formatName, final String clipTitle, final String source, final String image, final int likes, final int dislikes, final int likeRatio) {
        super(videoId,formatName,clipTitle,source,image);
        this.likes = likes;
        this.dislikes = dislikes;
        this.likeRatio = likeRatio;
    }
    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public int getDislikes() {
        return dislikes;
    }

    public void setDislikes(int dislikes) {
        this.dislikes = dislikes;
    }

    public int getLikeRatio() {
        return likeRatio;
    }

    public void setLikeRatio(int likeRatio) {
        this.likeRatio = likeRatio;
    }
}
