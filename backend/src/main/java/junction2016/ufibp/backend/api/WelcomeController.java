package junction2016.ufibp.backend.api;

import junction2016.ufibp.backend.model.WelcomeCard;
import junction2016.ufibp.backend.service.WelcomeCardService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by konstantin.petrukhnov@gmail.com on 2016-11-26.
 */
@Slf4j
@RestController
@RequestMapping("/welcome")
public class WelcomeController {

    @Autowired
    private WelcomeCardService welcomeCardService;


    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(method = RequestMethod.GET)
    public String welcome() {
        return "welcome";
    }

    @ResponseStatus(HttpStatus.OK)
    @RequestMapping(path = "/list", method = RequestMethod.GET)
    public List<WelcomeCard> list() {
        return welcomeCardService.getDefault();
    }
}
