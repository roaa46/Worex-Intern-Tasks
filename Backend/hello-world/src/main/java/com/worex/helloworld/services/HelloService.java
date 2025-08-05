package com.worex.helloworld.services;

import org.springframework.stereotype.Service;

@Service
public class HelloService {
    public String sayHelloWorld() {
        return "Hello World from API";
    }
}
