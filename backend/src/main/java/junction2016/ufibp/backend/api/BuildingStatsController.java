package junction2016.ufibp.backend.api;

import junction2016.ufibp.backend.external.Connector720;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by konstantin.petrukhnov@gmail.com on 2016-11-26.
 */
@Slf4j
@RestController
@RequestMapping("/buildingStats")
public class BuildingStatsController {

    @Autowired
    private Connector720 connector720;

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(path = "/temperature", method = RequestMethod.GET)
    public String temperature() {
        return connector720.getTemp();
    }
}
