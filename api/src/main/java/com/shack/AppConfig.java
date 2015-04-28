package com.shack;

import org.h2.tools.Server;
import org.springframework.boot.autoconfigure.web.WebMvcAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;

import java.sql.SQLException;

@Configuration
@EnableWebMvc
public class AppConfig extends WebMvcAutoConfiguration.WebMvcAutoConfigurationAdapter {

    @Bean
    public Server webServer() throws SQLException {
        return Server.createWebServer("-webAllowOthers", "-webPort", "8082").start();
    }
}
