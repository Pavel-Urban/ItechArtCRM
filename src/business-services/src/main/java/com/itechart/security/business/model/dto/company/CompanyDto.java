package com.itechart.security.business.model.dto.company;

public class CompanyDto {

    private Long id;
    private String name;
    // TODO assignee
    private String logoUrl;
    private CompanyTypeDto companyType;
    private BusinessSphereDto businessSphere;
    private EmployeeNumberCategoryDto employeeNumberCategory;
    private String commentary;

    // TODO address

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLogoUrl() {
        return logoUrl;
    }

    public void setLogoUrl(String logUrl) {
        this.logoUrl = logUrl;
    }

    public CompanyTypeDto getCompanyType() {
        return companyType;
    }

    public void setCompanyType(CompanyTypeDto companyType) {
        this.companyType = companyType;
    }

    public BusinessSphereDto getBusinessSphere() {
        return businessSphere;
    }

    public void setBusinessSphere(BusinessSphereDto businessSphere) {
        this.businessSphere = businessSphere;
    }

    public EmployeeNumberCategoryDto getEmployeeNumberCategory() {
        return employeeNumberCategory;
    }

    public void setEmployeeNumberCategory(EmployeeNumberCategoryDto employeeNumberCategory) {
        this.employeeNumberCategory = employeeNumberCategory;
    }

    public String getCommentary() {
        return commentary;
    }

    public void setCommentary(String commentary) {
        this.commentary = commentary;
    }
}
