package junction2016.ufibp.backend.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

import java.util.List;

/**
 * Created by konstantin.petrukhnov@gmail.com on 2016-11-26.
 */
@Data
public class GuestIdentity {

    @Id
    private String id;
    private String identityProviderUrl;
    private String name;
    private String authToken;
    private List<String> locales; //preferred locales

}

