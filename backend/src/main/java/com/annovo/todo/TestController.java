package com.annovo.todo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/say")
    public String saySomething() {
        return "Hey-o";
    }
}
