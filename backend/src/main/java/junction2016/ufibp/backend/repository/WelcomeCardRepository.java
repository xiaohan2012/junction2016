package junction2016.ufibp.backend.repository;

import junction2016.ufibp.backend.model.WelcomeCard;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by konstantin.petrukhnov@gmail.com on 2016-11-26.
 */
@Slf4j
@Repository
public class WelcomeCardRepository {

    private final static String FIELD_ID = "_id";
    private final static String COLLECTION_WELCOME_DEFAULT_CARD = "welcomeDefaultCard";

    @Autowired
    MongoTemplate mongoTemplate;


    public List<WelcomeCard> getDefault() {
        return mongoTemplate.findAll(WelcomeCard.class, COLLECTION_WELCOME_DEFAULT_CARD);
    }

    public void save(WelcomeCard w1) {
        mongoTemplate.save(w1, COLLECTION_WELCOME_DEFAULT_CARD);
    }
}
