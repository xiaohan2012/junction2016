package junction2016.ufibp.backend.service;

import junction2016.ufibp.backend.model.WelcomeCard;
import junction2016.ufibp.backend.repository.WelcomeCardRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by konstantin.petrukhnov@gmail.com on 2016-11-26.
 */
@Slf4j
@Service
public class WelcomeCardService {

    @Autowired
    private WelcomeCardRepository welcomeCardRepository;

    public List<WelcomeCard> getDefault(){
        return welcomeCardRepository.getDefault();
    }
}
