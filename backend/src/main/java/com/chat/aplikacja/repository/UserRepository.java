package com.chat.aplikacja.repository;

import com.chat.aplikacja.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    void deleteUserById(Long id);

    Optional<User> findUserByid(Long id);
    Optional<User> findUserByUsernameAndPassword(String Username, String password);

}
