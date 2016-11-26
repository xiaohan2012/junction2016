package junction2016.ufibp.backend.external;

import lombok.Data;

/**
 * Created by konstantin.petrukhnov@gmail.com on 2016-11-26.
 */
@Data
public class TemperatureRequest720 {

    private String from;
    private String until;
    private String aggregate;
}
