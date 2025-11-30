package com.travel.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {

    @GetMapping("/public/hello")
    public String helloPublic() {
        return "Hello public!";
    }

    @GetMapping("/protected/hello")
    public String helloProtected() {
        return "Hello protected (you must be authenticated)";
    }
}
