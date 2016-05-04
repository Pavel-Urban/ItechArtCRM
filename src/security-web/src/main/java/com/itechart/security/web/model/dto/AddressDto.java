package com.itechart.security.web.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AddressDto {
    private Long id;

    private String addressLine1;

    private String addressLine2;

    private Long countryId;
}
