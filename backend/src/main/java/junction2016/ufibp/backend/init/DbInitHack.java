package junction2016.ufibp.backend.init;

import junction2016.ufibp.backend.model.GuestIdentity;
import junction2016.ufibp.backend.model.WelcomeCard;
import junction2016.ufibp.backend.repository.IdentityRepository;
import junction2016.ufibp.backend.repository.WelcomeCardRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

/**
 * Created by konstantin.petrukhnov@gmail.com on 2016-11-26.
 */
@Slf4j
@Service
public class DbInitHack {

    @Autowired
    private WelcomeCardRepository welcomeCardRepository;

    @Autowired
    private IdentityRepository identityRepository;

    @PostConstruct
    public void createDbIfEmpty() {

        //skip if data is there
        if(welcomeCardRepository.getDefault().size()>1) {
            return;
        }

        //default welcome

        //guests
        GuestIdentity g1 = new GuestIdentity();
        g1.setName("Me Myself");
        g1.setIdentityProviderUrl("http://api.ufibp.tech/api/identity");
        g1.setAuthToken("123");
        identityRepository.save(g1);

        GuestIdentity g2 = new GuestIdentity();
        g2.setName("Customer A");
        g2.setIdentityProviderUrl("http://api.ufibp.tech/api/identity");
        g2.setAuthToken("123");
        identityRepository.save(g2);

        GuestIdentity g3 = new GuestIdentity();
        g3.setName("Employee B");
        g3.setIdentityProviderUrl("http://api.ufibp.tech/api/identity");
        g3.setAuthToken("123");
        identityRepository.save(g3);
    }


}
