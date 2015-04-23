package com.shack;

import org.h2.tools.Server;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.sql.SQLException;

@Configuration
public class AppConfig {

    @Bean
    public Server webServer() throws SQLException {
        return Server.createWebServer("-webAllowOthers", "-webPort", "8082").start();
    }
}
