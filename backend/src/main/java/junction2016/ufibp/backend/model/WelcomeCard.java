package junction2016.ufibp.backend.model;

import lombok.Data;

/**
 * Created by konstantin.petrukhnov@gmail.com on 2016-11-26.
 */
@Data
public class WelcomeCard {

    private String id;
    private String name;
    private String content; //plain html/css?
    private String url; //should content already have it?

}
