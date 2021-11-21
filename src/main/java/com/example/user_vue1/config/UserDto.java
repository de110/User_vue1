package com.example.user_vue1.config;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {
    private String username;
    private String password;

    private String auth;
}