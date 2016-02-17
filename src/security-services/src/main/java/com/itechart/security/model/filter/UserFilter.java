package com.itechart.security.model.filter;

/**
 * Filter for user data
 *
 * @author andrei.samarou
 */
public class UserFilter extends PageableFilter {
    /**
     * User role ID
     */
    private Long roleId;
    /**
     * User group ID
     */
    private Long groupId;
    /**
     * Only active users
     */
    private boolean active;
    /**
     * Substring for searching user by text attributes
     */
    private String text;

    public UserFilter() {
    }

    public UserFilter(Long roleId, Long groupId, boolean active, String text) {
        this.roleId = roleId;
        this.groupId = groupId;
        this.active = active;
        this.text = text;
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }
}