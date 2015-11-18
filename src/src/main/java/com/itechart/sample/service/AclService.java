package com.itechart.sample.service;

import com.itechart.sample.model.persistent.security.Principal;
import com.itechart.sample.model.persistent.security.acl.Acl;
import com.itechart.sample.model.security.ObjectIdentity;
import com.itechart.sample.model.security.Permission;

import java.util.List;
import java.util.Set;

/**
 * Service for managing of ACL entities
 *
 * @author andrei.samarou
 */
public interface AclService {

    Acl getAcl(Long aclId);

    Acl getAcl(ObjectIdentity objectIdentity);

    List<Acl> findAcls(List<ObjectIdentity> objectIdentities);

    List<Acl> findAclsWithAncestors(List<ObjectIdentity> objectIdentities);




    List<Acl> findAclWithAncestors(ObjectIdentity objectIdentity);




    Acl createAcl(ObjectIdentity objectIdentity, ObjectIdentity parentIdentity, Principal owner, Set<Permission> permissions);

    void saveAcl(Acl acl);

    void deleteAcl(Acl acl);
}