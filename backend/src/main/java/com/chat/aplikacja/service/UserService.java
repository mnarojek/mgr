package com.chat.aplikacja.service;

import com.chat.aplikacja.exception.UserNotFoundException;
import com.chat.aplikacja.model.User;
import com.chat.aplikacja.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {
    private final UserRepository userRepo;

    @Autowired
    public UserService(UserRepository userRepo) {
        this.userRepo = userRepo;
    }


    public User addUser(User user){
        return userRepo.save(user);
    }

    public List<User> findAllUsers(){
        return userRepo.findAll();
    }

     public User updateUser(User user){
        return userRepo.save(user);
     }

     public void deleteUser(Long id){
        userRepo.deleteUserById(id);
     }

     public User findUserById(Long id){
        return userRepo.findUserByid(id).
                orElseThrow( () ->  new UserNotFoundException("User by id not found"));
     }

    public User findUserByLoginAndPassword(String userName, String password){
        return userRepo.findUserByUsernameAndPassword(userName,password).
                orElseThrow( () ->  new UserNotFoundException("User not found"));
    }
}
