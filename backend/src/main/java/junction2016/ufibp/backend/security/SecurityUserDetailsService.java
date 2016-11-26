package junction2016.ufibp.backend.security;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 *
 * UserDetails service that reads the user credentials from the database, using a JPA repository.
 *
 *  Created by konstantin.petrukhnov@gmail.com on 2016-11-26.
 */
@Slf4j
@Service
public class SecurityUserDetailsService implements UserDetailsService {

    //@Autowired
    //private AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String identity) throws UsernameNotFoundException {

        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));

        return new org.springframework.security.core.userdetails.User(identity, "passdigest", authorities);

    }
}
