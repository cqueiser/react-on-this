package com.shack.model;


public class MovieSource {
    private String mime_type;
    private String bit_rate;
    private boolean token_protected;
    private String token_template;
    private int token_duration;
    private String cdn;
    private String protocol;
    private String url_template;

    public String getMime_type() {
        return mime_type;
    }

    public void setMime_type(String mime_type) {
        this.mime_type = mime_type;
    }

    public String getBit_rate() {
        return bit_rate;
    }

    public void setBit_rate(String bit_rate) {
        this.bit_rate = bit_rate;
    }

    public boolean isToken_protected() {
        return token_protected;
    }

    public void setToken_protected(boolean token_protected) {
        this.token_protected = token_protected;
    }

    public String getToken_template() {
        return token_template;
    }

    public void setToken_template(String token_template) {
        this.token_template = token_template;
    }

    public int getToken_duration() {
        return token_duration;
    }

    public void setToken_duration(int token_duration) {
        this.token_duration = token_duration;
    }

    public String getCdn() {
        return cdn;
    }

    public void setCdn(String cdn) {
        this.cdn = cdn;
    }

    public String getProtocol() {
        return protocol;
    }

    public void setProtocol(String protocol) {
        this.protocol = protocol;
    }

    public String getUrl_template() {
        return url_template;
    }

    public void setUrl_template(String url_template) {
        this.url_template = url_template;
    }
}
