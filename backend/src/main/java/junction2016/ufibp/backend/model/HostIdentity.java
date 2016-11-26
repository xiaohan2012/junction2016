package junction2016.ufibp.backend.model;

import lombok.Data;

/**
 * Created by konstantin.petrukhnov@gmail.com on 2016-11-26.
 */
@Data
public class HostIdentity {

    private String id;
    private String identityProviderUrl;
    private String name;
    private String authToken;
    private String wlanName;
    private String wlanPass;
    private String welcomeHostUrl;
}
