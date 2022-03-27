package com.chat.aplikacja;

import com.chat.aplikacja.model.User;
import com.chat.aplikacja.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserResouce {
    private final UserService userService;

    public UserResouce(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUsers (){
        List<User> users = userService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<User> getUsersById (@PathVariable("id")Long id){
        User user = userService.findUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<User> addUser(@RequestBody User user){
        User newUser = userService.addUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody UserLoginRequest request){
        User userByLoginAndPassword = userService.findUserByLoginAndPassword(request.getUserName(), request.getPassword());
        return  new ResponseEntity<>(userByLoginAndPassword, HttpStatus.OK);
    }


    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        User updatedUser = userService.updateUser(user);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @PutMapping("/delete/{id}")
    public ResponseEntity<User> deleteUser(@PathVariable("id")Long id){
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }



}
