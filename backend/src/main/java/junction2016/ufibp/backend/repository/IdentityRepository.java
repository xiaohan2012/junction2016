package junction2016.ufibp.backend.repository;

import junction2016.ufibp.backend.model.GuestIdentity;
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
public class IdentityRepository {


    private final static String FIELD_ID = "_id";
    private final static String FIELD_PROVIDER = "identityProviderUrl";

    private final static String COLLECTION_GUEST_IDENTITY = "identityGuest";


    @Autowired
    MongoTemplate mongoTemplate;


    public GuestIdentity getById(String id, String identityProviderUrl) {
        return mongoTemplate.findOne(Query.query(Criteria.where(FIELD_ID).is(id).and(FIELD_PROVIDER).is(identityProviderUrl)), GuestIdentity.class, COLLECTION_GUEST_IDENTITY);
    }

    public void save(GuestIdentity identity) {
        mongoTemplate.save(identity, COLLECTION_GUEST_IDENTITY);
    }
}
