package junction2016.ufibp.backend.init;

import junction2016.ufibp.backend.model.WelcomeCard;
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

    @PostConstruct
    public void createDbIfEmpty() {

        //skip if data is there
        if(welcomeCardRepository.getDefault().size()>1) {
            return;
        }

        //default welcome
        WelcomeCard w1 = new WelcomeCard();
        w1.setName("Building info");
        w1.setContent("Temperature: 23, people in the building: 1234");
        welcomeCardRepository.save(w1);

        WelcomeCard w2 = new WelcomeCard();
        w2.setName("Lunch");
        w2.setContent("Pork Child Donut Cake Pizza");
        welcomeCardRepository.save(w2);

        WelcomeCard w3 = new WelcomeCard();
        w3.setName("Interactive map");
        w3.setContent("some html code here");
        welcomeCardRepository.save(w3);
    }

}
