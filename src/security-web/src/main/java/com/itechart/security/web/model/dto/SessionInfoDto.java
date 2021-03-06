package com.itechart.security.web.model.dto;

import java.util.Set;

/**
 * For storing information about the logged user's session.
 * It isn't related to HTTP session and only stores logged user's
 * information and authentication token
 *
 * @author andrei.samarou
 */
public class SessionInfoDto {

    private String username;
    private Set<String> roles;
    private String token;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public void setRoles(Set<String> roles) {
        this.roles = roles;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
